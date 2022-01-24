# FishEye
Sixième projet du parcours "Développeur Front End" chez OpenClassroom. 
FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux.
## Objectifs
Le site est obsolète et a besoin d'être remanié.

## Compétences évaluées
- Gérer les évènements d'un site avec JavaScript
- Développer une application web modulaire avec des design patterns
- Ecrire du code JavaScript maintenable
- Assurer l'accessibilité d'un site web


## Technologies

**Recommandée:** HTML / CSS / Sass
**Interdit:** Javascript / Frameworks CSS / Inline CSS


## Notes

**Polices :**
- Texte: font-family: "DM Sans", sans-serif;

**Code Couleurs :**

- Couleur 1: #901C1C;
- Couleur 2: rgb(228, 221, 221);
- Couleur 3: #D3573C;
- Couleur 4: #db8876;
- Couleur 5: #fff;


## Tester le projet
clonez le projet depuis un terminal
```terminal
git clone https://github.com/nlkennengounou/KenneNgounouNellyLaure_6_15122021.git
```
## Livrables attendus
 
### Page d’accueil (x1)
- Affichage de la localisation des restaurants. 
- Une courte présentation de l’entreprise.
- Une section contenant les 4 menus sous forme cartes.

### Pages de menu (x4)
- 4 pages contenant chacune le menu d’un restaurant.

### Footer
- Le footer est identique sur toutes les pages.
- Au clic sur “Contact”, un renvoi vers une adresse mail est effectué.

### Header
- Le header est présent sur toutes les pages.
- Sur la page d’accueil, il contient le logo du site.
- Sur les pages de menu, il contient en plus un bouton de retour vers la page d’accueil.


## Effets graphiques et animations

### Boutons
-  Au survol, la couleur de fond des boutons principaux devra légèrement s’éclaircir.
L’ombre portée devra également être plus visible.
- À terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour ça, un
bouton "J’aime" en forme de cœur est présent sur la maquette. Au clic, il devra se
remplir progressivement. Pour cette première version, l’effet peut être apparaître au
survol sur desktop au lieu du clic.

### Page d’accueil
- Quand l’application aura plus de menus, un “loading spinner” sera nécessaire. Sur
cette maquette, nous souhaitons en avoir un aperçu. Il devra apparaître pendant 1 à
3 secondes quand on arrive sur la page d'accueil, couvrir l'intégralité de l'écran, et
utiliser les animations CSS (pas de librairie). Le design de ce loader n’est pas défini,
toute proposition est donc la bienvenue tant qu’elle est cohérente avec la charte
graphique du site.

### Pages de menu
- À l’arrivée sur la page, les plats devront apparaître progressivement avec un léger
décalage dans le temps. Ils pourront soit apparaître un par un, soit par groupe
“Entrée”, “Plat” et “Dessert”. Un exemple de l’effet attendu est fourni.
- Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus.
Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser de
la droite vers la gauche. Pour cette première version, l’effet peut apparaître au survol
sur desktop au lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec
des points de suspension. Un exemple de l’effet attendu est fourni.





























Data
ApiFishEye : récupére, de manière asynchrone, les données du JSON.

Factory
ImageFactory : crée un élément img, et lui donne les attributs (‘src’, ‘alt’, ‘role’).

VideoFactory : crée un élément video, et lui donne les attributs (‘src’, ‘controls’, ‘role’).

MediaFactory : vérifie si l’élément est une image ou une vidéo et exécute ImageFactory ou VideoFactory.

GalleryFactory : crée la section gallerie pour chaque page des photographes.

HomePage
HomePageBuilder : crée la section comprenant l’ensemble des photographes sur la page d’accueil à partir des données JSON récupérées dans la classe ApiFishEye. Elle appelle également, les classes ‘Filter’ et ‘Scroll’.

Filter : filtrer les photographes par tags dans la page d’accueil.

Scroll : faire apparaitre le bouton ‘Passer au contenu’ dans la page d’accueil lorsque l’utilisateur se trouve à un certain point de la page. Permet, de plus, de rediriger celui-ci au clic du bouton, vers la section des photographes.

Photographers Pages
PhotographerProfil : créé le profil, se trouvant dans le header, de chaque photographe sur la page qui lui est destinée, à partir des données JSON récupérées dans la classe ApiFishEye. De plus, appelle les classes ‘Modal’ et ‘Form’.

Modal : faire apparaitre un formulaire au clic du bouton ‘Contactez-moi’**, afin de pouvoir communiquer avec le photographe de son choix.

Form : vérifier les informations que l’utilisateur rentre dans le formulaire.

DropDownMenu : permet à l’utilisateur d’ouvrir/fermer le menu dropDown qui le donnera la possibilité de trier le travail de chaque photographe par Popularité, par Date ou bien par Titre. Appelle GalleryFactory à chaque fois que l’utilisateur fait un choix de trie afin de créer le HTML de la galerie.

MediaBuilder : appelle GalleryFactory afin de créer par default l’HTML de la galerie. De plus, crée la box qui comprend le nombre total de ‘Likes’ ainsi que le prix du photographe.

Lightbox : permet de créer, au clic d’une image/video, une Lightbox. Cette Lightbox affiche les médias dans une taille plus conséquente, et permet de switcher d’une image/video à une autre à l’aide des buttons ‘arrow’ ou bien avec les flèches directionnelles du clavier.

LikeSubscriber : permet d’ajouter/enlever un ‘like’ au clic de l'icône ‘coeur’ pour chaque media. À noter qu’à chaque clic, le nombre de ‘like’ du média ainsi que le nombre total de ‘like’ du photographes en question sont incrémentés.