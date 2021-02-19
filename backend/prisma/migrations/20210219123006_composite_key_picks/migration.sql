/*
  Warnings:

  - The migration will change the primary key for the `Pick` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Pick` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pick" DROP CONSTRAINT "Pick_pkey",
DROP COLUMN "id",
ADD PRIMARY KEY ("playerId", "gameId");
