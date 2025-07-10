import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body  = await req.json();
  const { id } = body;
  const propertyId = Number(body.id);

  if(!id){
    return NextResponse.json(
      { error: "Property ID is required" },
      { status: 400 }
    );
  }
  try {
    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
      },
      include: {
        host: true,
        location: true,
        rules: true,
        amenities: true,
        reviews: true,
        photos: true,
        nearbyPlaces: true,
      },
    });

    console.log("property:", property);

    return NextResponse.json(
      {
        property,
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
