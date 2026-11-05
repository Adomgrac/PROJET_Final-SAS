# Relevé des tests
**Projet : Carnet d'observation des sols**

## 1. Calculs à la main

**Objectif :** Vérifier manuellement les résultats de référence indiqués dans le fichier `SUJET.md`, puis les comparer aux résultats obtenus avec le programme JavaScript.

| N° | Vérification | Résultat du calcul manuel | Résultat du programme | Conclusion |
|---:|---|---|---|---|
| 1 | pH minimum | 4,8 | 4,8 | Conforme |
| 2 | pH maximum | 7,6 | 7,6 | Conforme |
| 3 | Nombre de sols sableux | 3 observations | 3 observations | Conforme |
| 4 | Nombre de sols limoneux | 4 observations | 4 observations | Conforme |
| 5 | Nombre de sols argileux | 3 observations | 3 observations | Conforme |
| 6 | Nombre total d'observations | 3 + 4 + 3 = 10 | 10 observations | Conforme |
| 7 | Points à discuter avec le coach | S01, S04, S06 et S09 | 4 points identifiés | Conforme |
| 8 | Vérification du seuil pH 5,5 | 5,5 n'est pas inférieur à 5,5 | Non retenu | Conforme |
| 9 | Recherche du point S04 | P2, sableux, pH 4,8, sec | Informations correspondantes affichées | Conforme |
| 10 | Recherche du point S99 | Aucun résultat attendu | À vérifier | À refaire |
| 11 | Tri par pH croissant | S04 doit apparaître en première position | Observations classées par pH dans l'ordre croissant | Conforme |

## 2. Vérification des règles de validation

| Cas vérifié | Calcul ou règle manuelle | Résultat attendu | Résultat obtenu |
|---|---|---|---|
| pH = 14 | Valeur comprise entre 0 et 14 | Accepté | À vérifier |
| pH = 14,1 | Valeur supérieure à 14 | Refusé | À vérifier |
| pH = -1 | Valeur inférieure à 0 | Refusé | À vérifier |
| pH vide | Absence de valeur numérique | Refusé | À vérifier |
| Humidité invalide | Valeur différente de sec, intermédiaire ou humide | Refusé | À vérifier |

## 3. Essais dans le menu

| Action | Attendu | Obtenu | Testeur |
|---|---|---|---|
| Ajout d'une observation valide | L'observation est acceptée et enregistrée | Observation ajoutée avec succès. | Koffi Boagr VIEGNEKOU |
| Conservation après redémarrage | L'observation ajoutée reste présente après le redémarrage | À vérifier | Koffi Boagr VIEGNEKOU |
| Ajout avec pH = 14,1 | La saisie est refusée | À vérifier | Koffi Boagr VIEGNEKOU |
| Recherche S99 | Aucun résultat trouvé | Choix inconnu : retour au menu. Test de recherche à refaire. | Koffi Boagr VIEGNEKOU |
| Tri par pH | Les observations sont classées selon le pH croissant | Observations classées par pH dans l'ordre croissant. | Koffi Boagr VIEGNEKOU |
| Synthèse | Les valeurs calculées correspondent aux calculs manuels | pH minimum : 4,8 ; pH maximum : 7,6. | Koffi Boagr VIEGNEKOU |
| Choix inconnu | Le programme refuse le choix et continue | Choix inconnu : « 99 ». Tapez un chiffre du menu. | Koffi Boagr VIEGNEKOU |

## 4. Vérification sur un autre poste

**Objectif :** Vérifier que le projet peut être récupéré et exécuté sur un autre ordinateur à partir du dépôt GitHub.

Commandes utilisées :

```bash
git clone https://github.com/Adomgrac/PROJET_Final-SAS.git
cd brief-3-carnet-sols
node app.js
npm test
```

**Résultat attendu :**
- Le dépôt est correctement cloné.
- L'application démarre sans erreur.
- Le menu principal s'affiche.
- Les tests automatiques s'exécutent correctement.

**Testeur :** Koffi Boagr VIEGNEKOU