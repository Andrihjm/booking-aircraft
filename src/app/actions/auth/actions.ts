"use server";

import { formSchema } from "@/app/validations/validation-signin";
import { redirect } from "next/navigation";

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

  return redirect("/dashboard");
}
