# Modula — Documentation Rooter un nouveau projet

## 🚀 Fork le projet sur github

1. Allez sur le repository [Modula](https://github.com/ClementH-dev/Modula)

2. Clonez le repository en local :
```bash
git clone https://github.com/ClementH-dev/Modula.git
```

3. Configurez votre repository distant :
```bash
git remote add upstream https://github.com/ClementH-dev/Modula.git
git remote -v # Doit afficher "origin" le fork et "upstream" le repository original
```

## 🛠️ Configuration du projet

1. Installez les dépendances :
```bash
cd Modula
npm install
```

2. Créez une base de données dédiée pour ce projet

3. Dupliquez les fichier `.env.example` en `.env` et configurez les variables d’environnement :

4. Éditez le fichier d'environnement dans la partie api et dans la partie web

5. Initialisez le premier utilisateur admin

## 🗄️Configuration de Prisma

1. Appliquez les migrations pour créer les tables dans la base de données :
```bash
npx prisma migrate dev --name init # En production, utilisez "npx prisma migrate deploy"
```

2. Générez le client Prisma :
```bash
npx prisma generate
```

3. Vérifiez la connexion à la base de données :
```bash
npx prisma db pull
```

## Mettre a jour son fork

1. Récupérez les dernières modifications du repository original :
```bash
    git fetch upstream
```

2. Mettez à jour votre branche principale avec les changements du repository original :
```bash
    git checkout main
    git merge upstream/main
```

3. Résolvez les éventuels conflits, puis poussez les changements sur votre fork :
```bash
    git push origin main
```