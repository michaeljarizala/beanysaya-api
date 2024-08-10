/*
  Warnings:

  - You are about to alter the column `cvv` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(3)`.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "cvv" SET DATA TYPE VARCHAR(3);
