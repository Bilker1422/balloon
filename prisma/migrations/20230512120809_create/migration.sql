-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "current" INTEGER NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "post_color_key" ON "post"("color");
