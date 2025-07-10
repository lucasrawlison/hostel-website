import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const featuredProperties = await prisma.property.findMany({
      where: {
        featured: true,
      },
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
        featuredProperties,
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
