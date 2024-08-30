"use server";

import prisma from "../../lib/prisma";

export async function getAirplanes() {
  try {
    const planes = await prisma.airPlane.findMany({});
    return planes;
  } catch (error) {
    console.log("Database error: ", error);
    return [];
  }
}
