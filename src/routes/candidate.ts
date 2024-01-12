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


router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      skills,
      status,
      expectedSalary,
      nodeJsExperience,
      reactJsExperience,
    } = req.body;

    // Calculate Node.js score based on experience
    let nodeJsScore = 0;
    if (nodeJsExperience < 1) {
      nodeJsScore = 1;
    } else if (nodeJsExperience >= 1 && nodeJsExperience <= 2) {
      nodeJsScore = 2;
    } else {
      nodeJsScore = 3;
    }

    // Calculate ReactJS score based on experience
    let reactJsScore = 0;
    if (reactJsExperience < 1) {
      reactJsScore = 1;
    } else if (reactJsExperience >= 1 && reactJsExperience <= 2) {
      reactJsScore = 2;
    } else {
      reactJsScore = 3;
    }

    // Calculate total score
    const totalScore = nodeJsScore + reactJsScore;

    const newCandidate = await prisma.candidate.create({
      data: {
        name,
        email,
        phone,
        skills,
        status,
        expectedSalary,
        nodeJsExperience,
        reactJsExperience,
        totalScore, 
      },
    });

    res.json(newCandidate);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Implement other CRUD operations (create, update, delete) as needed

export default router;
