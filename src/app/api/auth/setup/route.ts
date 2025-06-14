import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST() {
  try {
    // テストユーザーの作成
    const hashedPassword = await bcrypt.hash("password123", 10);
    const user = await prisma.user.create({
      data: {
        name: "テストユーザー",
        email: "test@example.com",
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "テストユーザーを作成しました",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("テストユーザー作成エラー:", error);
    return NextResponse.json(
      { message: "テストユーザーの作成に失敗しました" },
      { status: 500 }
    );
  }
}
