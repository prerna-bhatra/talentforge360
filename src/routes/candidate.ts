import express, { Request, Response } from 'express';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/client'



const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const candidates = await prisma.candidate.findMany();
    res.json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Implement other CRUD operations (create, update, delete) as needed

export default router;
