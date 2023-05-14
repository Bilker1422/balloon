import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const posts = await prisma.post.findMany();

  return NextResponse.json({ posts });
  prisma.$disconnect();
}

export async function POST(req: NextRequest) {
  const json = await req.json();
  const post = await prisma.post.update({
    where: { id: json.id },
    data: {
      current: {
        increment: json.increment ? json.increment : 0,
      },
    },
  });
}
