# GUIDE POUR UTILISER LE TEMPLATE A DUPLIQUER

1. Copier le dossier .template_a_dupliquer à la racine du serveur

2. Le renommer en enlevant le "."

3. Modifier les fichiers suivants :
    * env/DBParam.php
        - mettre à jour les variables de connexion à la base de données

    * local_templates
        - title.twig : seulement mettre le titre du nouveau site
        - footer.twig : seulement mettre le contenu du footer du nouveau site
        - about.twig : la structure est prête, il faut simplement ajouter du contenu dans les balises qui ont la classe card-header et card-body
        - pour plus d'informations sur l'utilisation de Bootstrap, utilisez ce lien : [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

    * assets/css/style.css
        - custom primary : choisir une couleur foncée, pour qu'elle s'accorde avec le mode sombre
        - custom secondary : choisir une couleur plus claire, sur la même base que la custom primary

4. Ajouter le dossier files avec les sources des audios dans le dossier assets du sous-site.

IMPORTANT : toute modification apportée dans le dossier common se répercutera sur tous les sous-sites.