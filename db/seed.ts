import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.cafeMenu.deleteMany();

  await prisma.cafeMenu.createMany({
    data: sampleData.menus,
  });

  console.log("Database seeded successfully!");
}

main();
