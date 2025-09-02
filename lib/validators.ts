import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "MenuItem must have exactly two decimal places"
  );

// MenuItems insertion schema
export const insertMenuItemSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  description: z.string().min(10).max(500),
  isAvailable: z.boolean().default(true),
  image: z.string().min(1, "Image URL is required"),
  isFeatured: z.boolean().default(false),
  banner: z.string().nullable(),
  price: currency,
});
