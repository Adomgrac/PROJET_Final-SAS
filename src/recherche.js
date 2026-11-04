// Rechercher et trier les observations.
// Fiche : fiches/4-rechercher-trier.md · Vérifier : npm run test:recherche

// Renvoie un NOUVEAU tableau avec les observations de cette parcelle (éventuellement vide).
export function filtrerParParcelle(observations, parcelle) {
  //throw new Error('TODO : coder filtrerParParcelle dans src/recherche.js');
  const observationparcelle = []
  return observations.filter(observation => observation.parcelle===parcelle)
}



