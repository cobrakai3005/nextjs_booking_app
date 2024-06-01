-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SINGLE', 'DOUBLE', 'MORE');

-- CreateTable
CREATE TABLE "Place" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "featuredImage" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "type" "Type" NOT NULL,
    "price" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "capicity" INTEGER NOT NULL,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Place_slug_key" ON "Place"("slug");
