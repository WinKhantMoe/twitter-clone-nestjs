-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "userTag" TEXT NOT NULL,
    "password" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "user_profile_image" BYTEA NOT NULL,
    "day" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_userTag_key" ON "Users"("userTag");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
