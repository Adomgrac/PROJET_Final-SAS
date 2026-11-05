# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
|---|---|---|---|
| Préparation du poste de travail et du dépôt GitHub ; compréhension du besoin de suivi des sols maraîchers ; lecture des documents de cadrage | Jour 1 après-midi | Jour 1 après-midi + Jour 2 matin | `npm test` : 3 verts / 39 rouges au premier lancement ; dépôt GitHub créé ; besoin du projet compris |
| Fiche 2 : lecture et enregistrement des observations de sol au format JSON | La nuit Jour 1 | Après-midi Jour 2 | `npm run test:stockage` : 3 tests verts ; vérification de l'enregistrement et de la lecture des données |
| Fiche 3 : ajout et affichage des observations ; choix 1 et 2 ; validation des données agronomiques et gestion des erreurs | La nuit Jour 1 | Après-midi Jour 2 | `npm run test:registre` : 13 tests verts ; test manuel d'ajout d'une observation et vérification après redémarrage |
| Fiche 4 : recherche et tri des observations de sol ; choix 3 et 4 | Matin Jour 2 | La nuit Jour 2 | `npm run test:recherche` : 7 tests verts ; tests manuels de recherche par identifiant et de filtrage par parcelle et texture ; vérification du tri par pH |
| Fiche 5 : synthèse agronomique des observations ; choix 5 | Après-midi Jour 2 | Matinée Jour 3 | `npm run test:synthese` : 5 tests verts ; vérification du pH minimum, du pH maximum et du nombre d'observations par texture |
| Tests personnels et tests réalisés par un camarade | La nuit Jour 2 | Matinée Jour 4 | Tests réalisés par VIEGNEKOU Koffi Bogar ; résultats des essais manuels consignés dans `releve-tests.md` |
| Élaboration de la fiche agronomique ; rédaction du README et de la documentation du projet | La nuit Jour 2 | Matinée Jour 4 | Fichiers du dossier `docs/` et fichier `README.md` complétés |
| Clonage du dépôt GitHub sur un autre poste ; installation et lancement de l'application ; répétition de la démonstration | Matin Jour 3 | Après-midi Jour 4 | Dépôt cloné et démonstration réalisée devant les camarades travaillant sur le même sujet |
| Fonctionnalités bonus : suppression et modification d'une observation ; tri par pH décroissant ; identification de la texture la plus fréquente | Après-midi Jour 4 |  |  |


**Blocages** (le message exact, ce que j'ai essayé, la solution) : 
