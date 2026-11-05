
// Ajouter et lister les observations de sol.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { versNombre } from './outils.js';

// Listes fermées des classes d'exercice, validées par le coach agronomie.
export const TEXTURES = ['sableux', 'limoneux', 'argileux'];
export const HUMIDITES = ['sec', 'intermédiaire', 'humide'];

// Renvoie une ligne de texte qui décrit l'observation.
// Exemple : 'S01 | P1 | sableux | pH 5.2 | sec'
export function formaterObservation(observation) {
  return `${observation.id} | ${observation.parcelle} | ${observation.texture} | pH ${observation.pH} | ${observation.etatHumidite}`;
}

// Renvoie un texte avec une observation par ligne (lignes séparées par '\n'),
// ou 'Aucune observation enregistrée.' si la liste est vide.
export function listerObservations(observations) {
  if (observations.length === 0) {
    return 'Aucune observation enregistrée.';
  } else {
    return observations.map(formaterObservation).join('\n');
  }
}

// Renvoie l'observation qui a cet identifiant de point, ou undefined si elle n'existe pas.
export function trouverParId(observations, id) {
  return observations.find(observation => observation.id === id);
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'S11', parcelle: 'P6', texture: 'limoneux', pH: '5,8', etatHumidite: 'humide' }
// Renvoie un tableau de messages d'erreur, un message par règle non respectée ;
// un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · parcelle obligatoire (n'importe quel texte non vide)
// · texture présente dans TEXTURES · pH nombre entre 0 et 14 (bornes comprises)
// · etatHumidite présent dans HUMIDITES. N'ajoutez aucune autre règle que celles-ci.
export function verifierObservation(saisie, observations) {
  const erreurs = [];

  if (!saisie.id) {
    erreurs.push("identifiant obligatoire");
  } else {
    for (const verifierid of observations) {
      if (verifierid.id === saisie.id) {
        erreurs.push("identifiant existant");
        break;
      }
    }
  }

  if (!saisie.parcelle) {
    erreurs.push("parcelle obligatoire");
  }

  const pH = versNombre(saisie.pH);

  if (String(saisie.pH).trim() === "" || isNaN(pH) || pH < 0 || pH > 14) {
    erreurs.push("Le pH doit être un nombre entre 0 et 14");
  }

  if (!HUMIDITES.includes(saisie.etatHumidite)) {
    erreurs.push("État d'humidité invalide");
  }

  if (!TEXTURES.includes(saisie.texture)) {
    erreurs.push("Texture invalide");
  }

  return erreurs;
}

// Fabrique l'observation à enregistrer à partir d'une saisie VALIDE : pH devient un nombre.
export function creerObservation(saisie) {
  const valide = { ...saisie };
  valide.pH = versNombre(saisie.pH);
  return valide;
}

// Ajoute une observation au carnet si la saisie est valide.
// Tous les champs de la saisie arrivent sous forme de TEXTE (le pH est converti en nombre à l'ajout).
// Renvoie un tableau de messages d'erreur (vide si l'observation a bien été ajoutée) ;
// en cas d'erreur, le carnet n'est pas modifié.

// Ajoute la saisie au carnet si elle est valide (verifierObservation, puis creerObservation).
// Renvoie les erreurs : [] si l'observation a été ajoutée ; sinon les messages, et rien n'est ajouté.
export function ajouterObservation(observations, saisie) {
  const erreurs = verifierObservation(saisie, observations);

  if (erreurs.length > 0) {
    return erreurs;
  }

  const open = creerObservation(saisie);
  observations.push(open);

  return [];
}
