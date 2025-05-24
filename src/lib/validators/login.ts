import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email("Please enter a valid email address.")
    .max(255, "Email must be less than 255 characters."),
});

export type LoginType = z.infer<typeof LoginSchema>;
