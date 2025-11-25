/*
  Warnings:

  - The `phone` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[phone]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "phone",
ADD COLUMN     "phone" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");
