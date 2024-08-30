"use server";

import { getUser, lucia } from "@/lib/auth";
import { ActionResult } from "./auth/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logOutUser(): Promise<ActionResult> {
  const { session } = await getUser();

  if (!session) {
    return {
      errorTitle: "Error",
      errorDesc: ["Unauthorized"],
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = await lucia.createBlankSessionCookie();

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard/sign-in");
}
