# Modula — Première modification d'un projet

## 🛠️ Mettre à jours les roles 

1. Dans le fichier [role.prisma](../apps/api/src/db/schema/role.prisma) mettre à jour l'enum RoleName en ajoutant les roles nécessaires au nouveau projet.

2. Appliquez les migrations pour mettre à jour la base de données :
```bash
npx prisma migrate dev --name update-roles 
```