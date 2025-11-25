/*
  Warnings:

  - The `user_profile_image` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "user_profile_image",
ADD COLUMN     "user_profile_image" BYTEA;
