/*
  Warnings:

  - You are about to drop the column `gradeLevel` on the `Student` table. All the data in the column will be lost.
  - Made the column `semester` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "gradeLevel",
ALTER COLUMN "semester" SET NOT NULL;
