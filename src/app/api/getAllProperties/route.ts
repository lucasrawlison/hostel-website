import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {

    const properties = await prisma.property.findMany({
      orderBy: { id: "desc" },
      include: {
        host: true,
        location: true,
        rules: true,
        amenities: true,
        reviews: true,
        photos: true,
      },

    });

    return NextResponse.json(
      {
        properties,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching featured properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch featured properties" },
      { status: 500 }
    );
  }
}
