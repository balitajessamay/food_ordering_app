import z from "zod";
import { insertMenuItemSchema } from "@/lib/validators";

export type MenuItem = z.infer<typeof insertMenuItemSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
