import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email("Please enter a valid email address.")
    .max(255, "Email must be less than 255 characters."),
});

export type LoginType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email("Please enter a valid email address.")
    .max(255, "Email must be less than 255 characters."),
  username: z
    .string({ required_error: "Username is required." })
    .min(5, "Username must be at least 5 characters.")
    .max(32, "Username must be less than 32 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
});

export type RegisterType = z.infer<typeof RegisterSchema>;

export enum ActionEnum {
  Register = "register",
  Login = "login",
}
