/*
  Warnings:

  - The primary key for the `Lead` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Lead_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Lead_id_seq";
