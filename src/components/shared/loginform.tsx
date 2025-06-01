"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon, OctagonAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { LoginSchema, LoginType } from "@/lib/validators/auth";
import { login } from "@/lib/actions/auth";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: LoginType) => {
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const result = await login(values);

      if (!result.data) {
        form.setError("root", { message: result.message });
        setErrorMessage(result.message);
        return;
      }

      setSuccessMessage(result.message);
    } catch (error) {
      const fallback = "Something went wrong. Please try again.";
      form.setError("root", { message: fallback });
      setErrorMessage(fallback);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-1 md:col-span-2 gap-4 mb-6">
              <FormLabel asChild>
                <Label htmlFor="email">Email</Label>
              </FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {successMessage && (
          <div className="flex gap-2 text-start justify-start mb-6 items-start col-span-1 md:col-span-2 bg-green-100 border-green-300 border-2 p-2 text-green-900">
            <MailIcon /> {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="flex gap-2 text-start justify-start mb-6 items-start col-span-1 md:col-span-2 bg-yellow-100 border-yellow-300 border-2 p-2 text-yellow-900">
            <OctagonAlertIcon /> {errorMessage}
          </div>
        )}

        <div className="md:col-span-2 mb-6">
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Login"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
