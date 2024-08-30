import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const MAX_FILE_SIZE = 2000000; // 2 MB

export const airplaneFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, "Name must be at last 4 characters long"),
  code: z
    .string({ required_error: "Code is required" })
    .regex(/^[A-Z]{3}-[0-9]{3}$/, "The code must be formatted [XXX-111"),
  image: z
    .any()
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "The file type must be jpeg, jpg or png"
    )
    .refine(
      (file: File) => file.size <= MAX_FILE_SIZE,
      "Files must be less than 2 MB in size"
    ),
});
