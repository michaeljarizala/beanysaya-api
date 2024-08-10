/*
  Warnings:

  - You are about to drop the column `expiration` on the `Order` table. All the data in the column will be lost.
  - Added the required column `cardExpiration` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "expiration",
ADD COLUMN     "cardExpiration" VARCHAR(5) NOT NULL;
