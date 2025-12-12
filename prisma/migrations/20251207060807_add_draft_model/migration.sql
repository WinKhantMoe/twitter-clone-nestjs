-- DropForeignKey
ALTER TABLE "public"."Draft" DROP CONSTRAINT "Draft_tweetId_fkey";

-- AlterTable
ALTER TABLE "Draft" ALTER COLUMN "tweetId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Draft" ADD CONSTRAINT "Draft_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
