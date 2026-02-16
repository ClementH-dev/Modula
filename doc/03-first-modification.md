# Modula — Première modification d'un projet

## 🛠️ Mettre à jours les roles 

1. Dans le fichier [role.prisma](../apps/api/src/db/schema/role.prisma) mettre à jour l'enum RoleName en ajoutant les roles nécessaires au nouveau projet.

2. Appliquez les migrations pour mettre à jour la base de données :
```bash
npx prisma migrate dev --name update-roles 
```

3. Vérifier le role par défaut lors de la création d'un utilisateur dans le fichier [userController.ts](../apps/api/src/controllers/userController.ts) et mettez à jour si nécessaire.