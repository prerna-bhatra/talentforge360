-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "expectedSalary" INTEGER NOT NULL,
    "nodeJsExperience" INTEGER NOT NULL,
    "reactJsExperience" INTEGER NOT NULL,
    "totalScore" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);
