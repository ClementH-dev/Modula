import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import { RoleEnum } from '../generated/prisma/enums';

export const getRoles = async (_req: Request, res: Response) => {
    try {
        const roles = await prisma.role.findMany({
            include: { roleUsers: { include: { user: true } } }
        });
        res.status(200).json({
            message: 'Rôles récupérés avec succès',
            roles
        });
    } catch (error) {
        res.status(500).json({ error: `Erreur lors de la récupération des rôles ${error}` });
    }
}

export const createRole = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        // TODO : Vérifier le rôle de l'utilisateur + ajouter les permissions du rôle dans la base de données

        if (!name) {
            return res.status(400).json({ error: 'Le nom du rôle est requis' });
        }

        // Vérifier que le nom de role est valide
        if (!Object.keys(RoleEnum).includes(name)) {
            return res.status(400).json({ error: 'Le nom du rôle est invalide' });
        }

        const newRole = await prisma.role.create({
            data: { name }
        });
        res.status(201).json({
            message: 'Rôle créé avec succès',
            role: newRole
        });
    } catch (error) {
        res.status(500).json({ error: `Erreur lors de la création du rôle ${error}` });
    }
}

// TODO : Ajouter update UNIQUEMENT quand les permissions seront implémentées