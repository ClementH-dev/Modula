import {Request, Response} from 'express';
import {prisma} from '../db/prisma';
import bcrypt from 'bcrypt';
import { RoleEnum } from '../generated/prisma/browser';

export const getUsers = async (_req: Request, res: Response) => {
    // TODO : AJOUTER LA PAGINATION + FILTRAGE + TRI
    try{
        const users = await prisma.user.findMany({
             include: { roleUsers: { select: { role: { select: { name: true } } } } }
        });
        res.status(200).json({
            message: 'Utilisateurs récupérés avec succès',
            users
        });
    } catch (error) {
        res.status(500).json({ error: `Erreur lors de la récupération des utilisateurs ${error}` });
    }
}

export const register = async (req: Request, res: Response) => {
    try{
        const { email, name, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email et mot de passe sont requis' });
        }

        let roles = req.body.roles as RoleEnum[];
        // Si aucun rôle n'est fourni, assigner le rôle USER par défaut
        if (!roles || roles.length === 0) {
            roles = [RoleEnum.USER];
        }
        
        // TODO : Imposer un password fort + vérifier l'email n'est pas déjà utilisé + vérifier que les rôles sont valides
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
            email,
            name,
            password: passwordHash,
            roleUsers: {
                create: roles.map(role => ({
                role: {
                    connect: { name: role }
                }
                }))
            }
            },
            include: { roleUsers: { select: { role: { select: { name: true } } } } }
        });

        res.status(201).json({
            message: 'Utilisateur créé avec succès',
            user: newUser
        });

    } catch (error) {
        res.status(500).json({ error: `Erreur lors de l'enregistrement de l'utilisateur ${error}` });
    }
}