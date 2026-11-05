# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| Lire et écrire un fichier en asynchrone | Documentation Node.js (`fs/promises`) ,un camarade,une IA| `readFile` et `writeFile` renvoient une promesse : on les attend avec `await`. `JSON.parse` transforme le texte en tableau, `JSON.stringify(x, null, 2)` écrit un JSON indenté. | `src/stockage.js` |
| Trouver ou retirer un élément d'un tableau | MDN (`find`, `findIndex`, `splice`) | `find` renvoie l'élément ou `undefined` ; `findIndex` renvoie `-1` s'il n'existe pas ; `splice(position, 1)` retire l'élément en modifiant le tableau. | `trouverParId` (`registre.js`), `supprimerObservation` (`bonus.js`) |
| Filtrer sans modifier le tableau d'origine | MDN (`filter`),cours  | `filter` renvoie un nouveau tableau avec les éléments qui respectent la condition. | `src/recherche.js`, `pointsADiscuter` |
| Trier sans changer l'ordre du tableau reçu | MDN (`toSorted`, comparateur numérique),IA  | `toSorted` renvoie une copie triée ; `(a, b) => a.pH - b.pH` trie par nombre et non comme du texte. | `trierParPh` (`recherche.js`) |
| Convertir un texte saisi en nombre | `src/outils.js` fourni | `versNombre` accepte la virgule et renvoie `NaN` pour un texte vide ou invalide, là où `Number('')` vaut 0. | `verifierObservation`, `creerObservation` |

Rôle d'un carnet d'observation du sol| sur site https://www.bing.com/search?q=c%27est+quoi+le+r%C3%B4le++d%27un+carnet+d%27observation+du+sol&form=ANNTH1&refig=6aec8f163e784765bdf7780a6dfdf1b0&pc=U531 | 
Le carnet d'observation du sol joue un rôle essentiel dans la collecte de données et la réflexion sur les observations.| 