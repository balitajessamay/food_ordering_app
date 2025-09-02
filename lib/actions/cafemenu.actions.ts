"use server";
import { prisma } from "@/db/prisma";
import { convertPrismaToJS } from "../utils";
import { LATEST_MENU_ITEMS_LIMIT } from "../constants";

// get latest cafemenu items
export async function getLatestMenuItems() {
  const data = await prisma.cafeMenu.findMany({
    take: LATEST_MENU_ITEMS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertPrismaToJS(data);
}
