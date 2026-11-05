# Carnet d'observation des sols

> Projet individuel du SAS DFS, brief 3 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte
## Contexte

## Contexte

L'outil est destiné à l'assistant terrain Agritech de la ferme pédagogique, qui relève des points de sol avec la fiche de terrain. Son besoin : conserver ses relevés et retrouver rapidement les points concernés, pour repérer les valeurs à vérifier avec le coach agronomie. Pour chaque point, il saisit un identifiant, une parcelle, une classe de texture (sableux, limoneux ou argileux), un pH et un état d'humidité (sec, intermédiaire ou humide). Le programme, lancé dans le terminal avec un menu, lui affiche la liste des observations, le résultat d'une recherche par point, parcelle ou texture, un tri par pH et une synthèse : pH minimum et maximum, nombre d'observations par texture et points à discuter (pH strictement inférieur à 5,5). Les saisies invalides sont refusées avec un message, sans arrêter le programme, et chaque ajout est enregistré dans un fichier JSON. Le carnet décrit des constats et repère des valeurs à discuter ; il ne produit aucun diagnostic et ne donne aucun conseil de fertilisation. Il ne calcule pas non plus de moyenne de pH, car l'échelle du pH est logarithmique.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/observations.json`
- [x] Ajouter une observation, saisies invalides refusées sans arrêter le programme
- [x] Lister les observations, message si le carnet est vide
- [x] Rechercher par point ou par parcelle ; filtrer par texture
- [x] Trier par pH
- [x] Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [x] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [ ] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

Le fichier `donnees/observations.json` contient 10 observations de départ, réparties sur 5 parcelles (P1 à P5). Chaque observation a cinq champs : `id`, `parcelle`, `texture`, `pH` et `etatHumidite` (détail dans [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)). Le pH est un nombre de 0 à 14, **sans unité**. Ces données sont **fictives** : elles servent à l'exercice et ne décrivent aucun vrai sol. Les textures et les états d'humidité sont des classes d'exercice.

## Limites
- Une seule observation par point : le moment du relevé (date, météo récente) n'est pas enregistré, donc on ne peut pas suivre l'évolution d'un point.
- Les classes de texture et d'humidité sont des catégories d'exercice, moins fines qu'une analyse en laboratoire.
- Programme en ligne de commande, pour un seul utilisateur à la fois ; les données sont dans un fichier JSON, sans base de données.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Adom grâce victoire, compte GitHub: adomgrac. Entraide : les personnes avec qui j'ai eu le même sujet(Sanogo zie;Djongon junior;ruth Tomede;Dadié jean-marie michel;Touré emmanuel;Manh jean-marc;Assié konan cédric;Kambou cédric;Pele axel junior; konan Kouassi anglovia), sur le codage de trois fichier(registe.js;stockage.js;recherche.js).
