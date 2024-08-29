"use server";

import { formSchema } from "@/app/validations/validation-signin";
import { redirect } from "next/navigation";
import prisma from "../../../../lib/prisma";
import { verifyPassword } from "@/utils/password-settings";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

export interface ActionResult {
  errorTitle: string | null;
  errorDesc: string[] | null;
}

export async function handleSignInUser(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  console.log(formData.get("email"));

  const value = formSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!value.success) {
    const errorDesc = value.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error validation",
      errorDesc: errorDesc,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: value.data.email,
    },
  });
  if (!existingUser) {
    return {
      errorTitle: "Error validation",
      errorDesc: ["User not found"],
    };
  }

  const comparePassword = await verifyPassword(
    value.data.password,
    existingUser.password
  );
  if (!comparePassword) {
    return {
      errorTitle: "Error validation",
      errorDesc: ["Invalid password"],
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard");
}
