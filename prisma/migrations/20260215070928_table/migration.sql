/*
  Warnings:

  - You are about to drop the column `assignedTo` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `userType` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "assignedTo";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userType";
