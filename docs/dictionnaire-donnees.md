# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — |
|  `parcelle`|Parcelle où se trouve le point | texte| non vide|- |P5|
| `texture` | Texture du sol|texte |présente dans la liste `sableux`, `limoneux`, `argileux`  |-|`limoneux` |
|`pH`| Potentiel hydrogène du sol|nombre |non vide,doit etre un entier  |sans unité|`6.5`|
| Etat d'humidité | Humidité du sol au moment du relevé|texte |présent dans la liste `sec`, `intermédiaire`, `humide`  |- | `sec` |

**Listes de valeurs autorisées** : texture = `sableux`, `limoneux`, `argileux` ; état d'humidité = `sec`, `intermédiaire`, `humide`; pH : nombre entre 0 et 14 

**Sources** :  `SUJET.md` (section « Les données »), `donnees/observations.json` (10 observations fictives), `src/registre.js` (listes `TEXTURES` et `HUMIDITES`), fiche de terrain (C) remise par le coach agronomie.

