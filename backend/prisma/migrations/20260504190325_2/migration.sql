/*
  Warnings:

  - Added the required column `info` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "info" TEXT NOT NULL;
