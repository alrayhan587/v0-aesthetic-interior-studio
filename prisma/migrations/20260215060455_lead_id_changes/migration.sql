/*
  Warnings:

  - The primary key for the `Lead` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Lead` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_assignedTo_fkey";

-- AlterTable
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "Lead_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
