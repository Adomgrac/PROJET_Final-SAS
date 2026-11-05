// Ajouter et lister les observations de sol.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { versNombre } from './outils.js';

// Listes fermées des classes d'exercice, validées par le coach agronomie.
export const TEXTURES = ['sableux', 'limoneux', 'argileux'];
export const HUMIDITES = ['sec', 'intermédiaire', 'humide'];

// Renvoie une ligne de texte qui décrit l'observation.
// Exemple : 'S01 | P1 | sableux | pH 5.2 | sec'
export function formaterObservation(observation) {
  //throw new Error('TODO : coder formaterObservation dans src/registre.js');
  return `${observation.id} | ${observation.parcelle} | ${observation.texture} | pH ${observation.pH} | ${observation.etatHumidite}`;
}

// Renvoie un texte avec une observation par ligne (lignes séparées par '\n'),
// ou 'Aucune observation enregistrée.' si la liste est vide.
export function listerObservations(observations) {
  //throw new Error('TODO : coder listerObservations dans src/registre.js');
  if(observations.length===0){
    return 'Aucune observation enregistrée.'
  }else{
    return observations.map(formaterObservation).join('\n')
  }
}

// Renvoie l'observation qui a cet identifiant de point, ou undefined si elle n'existe pas.
export function trouverParId(observations, id) {
  //throw new Error('TODO : coder trouverParId dans src/registre.js');
  return observations.find(observation => observation.id===id)
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'S11', parcelle: 'P6', texture: 'limoneux', pH: '5,8', etatHumidite: 'humide' }
// Renvoie un tableau de messages d'erreur, un message par règle non respectée ;
// un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · parcelle obligatoire (n'importe quel texte non vide)
// · texture présente dans TEXTURES · pH nombre entre 0 et 14 (bornes comprises)
// · etatHumidite présent dans HUMIDITES. N'ajoutez aucune autre règle que celles-ci.
export function verifierObservation(saisie, observations) {
  //throw new Error('TODO : coder verifierObservation dans src/registre.js');
  const errone = []
  if (!saisie.id){
    errone.push("identifiant obligatoire")
  }else{
    for(const verifierid of observations){
      if (verifierid.id === saisie.id){
        errone.push("identifiant existant")
      }
    }
  }

  if(!saisie.parcelle){
    errone.push("parcelle obligatoire")
  }

  const pH = versNombre(saisie.pH)
  if(pH<0||pH>14||isNaN(pH)||saisie.pH===""){
    errone.push("Entrer un pH vide compris en 0 et 14")
  }

  if(!HUMIDITES.includes(saisie.etatHumidite)){
    errone.push("validé")
  }

  if(!TEXTURES.includes(saisie.texture)){
    errone.push("validé")
  }
  return errone
}

// Ajoute une observation au carnet si la saisie est valide.
// Tous les champs de la saisie arrivent sous forme de TEXTE (le pH est converti en nombre à l'ajout).
// Renvoie un tableau de messages d'erreur (vide si l'observation a bien été ajoutée) ;
// en cas d'erreur, le carnet n'est pas modifié.

export function ajouterObservation(observations, saisie) {
  const erreurs = [];

  if (!saisie.id) {
    erreurs.push('Le point observé est obligatoire.');
  } else if (observations.some((o) => o.id === saisie.id)) {
    erreurs.push(`Le point ${saisie.id} existe déjà.`);
  }

  if (!saisie.parcelle) {
    erreurs.push('La parcelle est obligatoire.');
  }

  if (!TEXTURES.includes(saisie.texture)) {
    erreurs.push(`Texture invalide (attendu : ${TEXTURES.join(', ')}).`);
  }

  const pH = Number(String(saisie.pH).trim().replace(',', '.'));
  if (String(saisie.pH).trim() === '' || Number.isNaN(pH) || pH < 0 || pH > 14) {
    erreurs.push('Le pH doit être un nombre entre 0 et 14.');
  }

  if (!HUMIDITES.includes(saisie.etatHumidite)) {
    erreurs.push(`État d'humidité invalide (attendu : ${HUMIDITES.join(', ')}).`);
  }

  if (erreurs.length > 0) {
    return erreurs;
  }

  observations.push({
    id: saisie.id,
    parcelle: saisie.parcelle,
    texture: saisie.texture,
    pH,
    etatHumidite: saisie.etatHumidite,
  });

  return erreurs;
} 