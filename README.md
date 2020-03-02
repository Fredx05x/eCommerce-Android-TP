Application mobile qui permet de s'incrire, de se connecter, de naviguer et acheter dans une e-boutique. 


Le projet vien aussi avec un server qui centralise tout les données de l'application.


La boutique recois et peux faire des modifications au server.


# Comment installer 
1. Vous devez avoir [Node.js]( https://nodejs.org/en/) sinon installer la version LTS.
2. Cloner le repositoire 
3. Sur le chemin du server: _android-dev/tp_mobile_derrick_frederick_marco/server_ faite npm ci et une fois les dépendances installés faite npm start
4. Ouvrer le projet avec [Android Studio](https://developer.android.com/studio).'
5. Dans la section /helpers/DataBaseHelper, changez la constante URL_SERVER par votre adresse ipv4 comme ceci: _http://votreAddresseIp:8080_ (important de rajouter :8080)
6. Faite _f6_ dans Android Studio.
5. Ouvrer l'application sur votre telephone. 