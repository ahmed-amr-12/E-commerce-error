"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
// import { LoginSchema } from "@/app/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "./../../schemas/LoginSchema";
import { MyLogin } from "@/Actions/Loginn";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toast } from "radix-ui";

export default function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const router = useRouter();
  const [authError, setAuthError] = useState("");

  async function handleLogin(values: LoginType) {
    if (values.email && values.password) {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        // Toast.error("Invalid email or password", { position: "top-center" });
      } else {
        // Toast.success("Welcome back!", { position: "top-center" });
        router.push("/");
        router.refresh();
      }
    }
    
  }

  return (
    <>
      <h1>Login</h1>
      <div className="max-w-5xl mx-auto bg-blue-800 p-5 ">
        <form onSubmit={form.handleSubmit(handleLogin)} action="">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  type="password"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {authError && (
            <div className="text-red-500 my-2" role="alert">
              {authError}
            </div>
          )}

          <button className="cursor-pointer my-3 w-full text-2xl bg-black text-white rounded rounded-3xl p-3">
            login
          </button>
        </form>
      </div>
    </>
  );
}
