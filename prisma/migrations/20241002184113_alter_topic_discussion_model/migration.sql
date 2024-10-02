/*
  Warnings:

  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `topicId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `discussionId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Topic_slug_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Topic";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Discussion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "discussionId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Post_discussionId_fkey" FOREIGN KEY ("discussionId") REFERENCES "Discussion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("content", "createdAt", "id", "title", "updatedAt", "userId") SELECT "content", "createdAt", "id", "title", "updatedAt", "userId" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Discussion_slug_key" ON "Discussion"("slug");
