// Carnet d'observation des sols — point d'entrée : le menu.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';



function accueil() {
  console.log('===============================');
  console.log('Ferme pédagogique');
  console.log('===============================');
}
function afficherLeMenu() {
  console.log('');
  console.log('----------- MENU ------------');
  console.log('1. Ajouter une observation');
  console.log('2. Lister les observations');
  console.log('3. Rechercher (point, parcelle, texture)');
  console.log('4. Trier par pH');
  console.log('5. Synthèse des observations');
  console.log('0. Quitter');
}

// Choix 1 : Ajouter une observation
async function ajouter(observations) {
  console.log('--- Ajouter une observation ---');

  const id = await demander('Point observé (ex. S11) : ');
  if (id === null) return;
  const parcelle = await demander('Parcelle (ex. P1) : ');
  if (parcelle === null) return;
  const texture = await demander(`Texture (${TEXTURES.join(', ')}) : `);
  if (texture === null) return;
  const pH = await demander('pH (nombre de 0 à 14, sans unité, virgule acceptée) : ');
  if (pH === null) return;
  const etatHumidite = await demander(`État d'humidité (${HUMIDITES.join(', ')}) : `);
  if (etatHumidite === null) return;

  // Normalisation de l'écriture
  const saisie = {
    id: id.trim().toUpperCase(),
    parcelle: parcelle.trim().toUpperCase(),
    texture: texture.trim().toLowerCase(),
    pH,
    etatHumidite: etatHumidite.trim().toLowerCase(),
  };

  const erreurs = ajouterObservation(observations, saisie);
  if (erreurs.length > 0) {
    console.log('Observation refusée :');
    for (const erreur of erreurs) {
      console.log(`  - ${erreur}`);
    }
    console.log(`Le carnet compte toujours ${observations.length} observation(s).`);
    return;
  }

  await enregistrerJson(FICHIER_DONNEES, observations);
  console.log(`Observation ${saisie.id} ajoutée. Le carnet compte ${observations.length} observation(s).`);
}

// pour le choix 2 (lister)
function lister(observations) {
  console.log(`--- Liste des observations (${observations.length}) ---`);
  console.log(listerObservations(observations));
}

// Pour le Choix 3 : rechercher par point, parcelle ou texture
async function rechercher(observations) {
  console.log('--- Rechercher ---');
  console.log('1. Par point (identifiant)');
  console.log('2. Par parcelle');
  console.log("3. Les observations d'une texture");
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  switch (sousChoix.trim()) {
    case '1': {
      const saisie = await demander('Point : ');
      if (saisie === null) return;
      const id = saisie.toUpperCase();
      const observation = trouverParId(observations, id);
      console.log(observation === undefined ? `Observation ${id} introuvable.` : formaterObservation(observation));
      break;
    }
    case '2': {
      const saisie = await demander('Parcelle : ');
      if (saisie === null) return;
      const parcelle = saisie.toUpperCase();
      const trouvees = filtrerParParcelle(observations, parcelle);
      console.log(`${trouvees.length} observation(s) sur la parcelle ${parcelle} :`);
      console.log(listerObservations(trouvees));
      break;
    }
    case '3': {
      const saisie = await demander('Texture : ');
      if (saisie === null) return;
      const texture = saisie.toLowerCase();
      const trouvees = filtrerParTexture(observations, texture);
      console.log(`${trouvees.length} observation(s) de texture ${texture} :`);
      console.log(listerObservations(trouvees));
      break;
    }
    default:
      console.log('Choix inconnu : retour au menu.');
  }
}

// Pour le Choix 4 : trier par pH
async function trier(observations) {
  console.log('--- Trier ---');
  console.log('1. Par pH croissant');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix.trim() === '1') {
    console.log(listerObservations(trierParPh(observations)));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}

// Pour le Choix 5 : synthèse
function synthese(observations) {
  console.log('--- Synthèse des observations ---');
  console.log(`Nombre d'observations : ${observations.length}`);

  const bornes = phMinMax(observations);
  if (bornes === null) {
    console.log('pH minimum et maximum : aucune donnée');
  } else {
    console.log(`pH minimum : ${bornes.min} · pH maximum : ${bornes.max}`);
  }

  console.log('Observations par texture :');
  for (const [texture, nombre] of Object.entries(compterParTexture(observations))) {
    console.log(`  ${texture} : ${nombre}`);
  }

  const aDiscuter = pointsADiscuter(observations, SEUIL_PH_A_DISCUTER);
  console.log(`Points à discuter avec le coach (pH < ${SEUIL_PH_A_DISCUTER}) : ${aDiscuter.length}`);
  for (const observation of aDiscuter) {
    console.log(`  ${formaterObservation(observation)}`);
  }

  console.log("Rappels : le pH est sans unité. Aucune moyenne de pH n'est calculée (échelle logarithmique).");
  console.log("Ces points ne sont pas un diagnostic de fertilisation : ils servent à préparer l'échange avec le coach.");
}
 
// C'est la fonction qui va permettre de lancer l'application
async function main() {
  ouvrirSaisie();
  try {
    accueil();

    // Chargement des données
    let observations;
    try {
      observations = await chargerJson(FICHIER_DONNEES);
    } catch (erreur) {
      console.log(`Impossible de charger ${FICHIER_DONNEES} : ${erreur.message}`);
      return;
    }

    // Boucle du menu : affiché avant chaque choix
    let continuer = true;
    while (continuer) {
      afficherLeMenu();
      const choix = await demander('Votre choix : ');
      if (choix === null) break; // fin de la saisie (Ctrl+D)

      try {
        switch (choix.trim()) {
          case '1':
            await ajouter(observations);
            break;
          case '2':
            lister(observations);
            break;
          case '3':
            await rechercher(observations);
            break;
          case '4':
            await trier(observations);
            break;
          case '5':
            synthese(observations);
            break;
          case '0':
            continuer = false;
            break;
          default:
            console.log('Choix inconnu : tapez un nombre du menu.');
        }
      } catch (erreur) {
        console.log(`Une erreur est survenue : ${erreur.message}`);
      }
    }

    console.log('Au revoir !');
  } finally {
    fermerSaisie();
  }
}

main();