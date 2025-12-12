-- CreateTable
CREATE TABLE "Draft" (
    "id" TEXT NOT NULL,
    "content" TEXT,
    "media" TEXT[],
    "tweetId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "retweetId" TEXT,
    "replyId" TEXT,

    CONSTRAINT "Draft_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Draft" ADD CONSTRAINT "Draft_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Draft" ADD CONSTRAINT "Draft_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Draft" ADD CONSTRAINT "Draft_retweetId_fkey" FOREIGN KEY ("retweetId") REFERENCES "Retweet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Draft" ADD CONSTRAINT "Draft_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Reply"("id") ON DELETE SET NULL ON UPDATE CASCADE;
