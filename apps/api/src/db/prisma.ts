import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl || typeof dbUrl !== 'string') {
    throw new Error('DATABASE_URL environment variable is not set or is not a string');
}

const adapter = new PrismaPg({ 
  connectionString: dbUrl
});
export const prisma = new PrismaClient({ adapter });