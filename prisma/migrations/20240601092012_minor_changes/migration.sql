/*
  Warnings:

  - You are about to drop the column `published` on the `Place` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Place" DROP COLUMN "published",
ALTER COLUMN "updatedAt" DROP NOT NULL;
