/*
  Warnings:

  - You are about to drop the column `color` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `colorcode` on the `post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[colorName]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `colorCodeMain` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorCodeSide` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorName` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "post_color_key";

-- AlterTable
ALTER TABLE "post" DROP COLUMN "color",
DROP COLUMN "colorcode",
ADD COLUMN     "colorCodeMain" TEXT NOT NULL,
ADD COLUMN     "colorCodeSide" TEXT NOT NULL,
ADD COLUMN     "colorName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "post_colorName_key" ON "post"("colorName");
