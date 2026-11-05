# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : ✏️

1. **// Renvoie un texte avec une observation par ligne (lignes séparées par '\n'),
// ou 'Aucune observation enregistrée.' si la liste est vide.
export function listerObservations(observations) {
  if(observations.length===0){
    return 'Aucune observation enregistrée.'
  }else{
    return observations.map(formaterObservation).join('\n')
  }
}**, et comment elle marche : La fonction listerObservations permet d'afficher toutes les observations enregistrées dans le carnet de sols. Elle commence par vérifier si le tableau est vide. Si aucune observation n'existe, elle retourne un message. Dans le cas contraire, elle utilise la méthode map() pour formater chaque observation, puis join('\n') pour regrouper les résultats en les séparant par des retours à la ligne.

2. **Une difficulté, et sa solution** :  un test rouge à cause d'une erreur des espaces , des acsents , un code ou un texte mal saisie , une fonction mal utilisée.
Rechercher les erreurs avec calme et les corrigées au fir et à mesure.


3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) : Djongon junior, j'ai aidé Manh dans l'explication d'un codage (Renvoie une ligne de texte qui décrit l'observation.)
