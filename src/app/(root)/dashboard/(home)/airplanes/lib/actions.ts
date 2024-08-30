"use server";

import { ActionResult } from "@/app/actions/auth/actions";
import { airplaneFormSchema } from "./validation";
import { redirect } from "next/navigation";
import { uploadFile } from "@/lib/supabase/supabase";
import prisma from "../../../../../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createAirplane(
  prevState: any,
  formData: FormData
): Promise<ActionResult | undefined> {
  const value = airplaneFormSchema.safeParse({
    name: formData.get("name"),
    code: formData.get("code"),
    image: formData.get("image"),
  });

  if (!value.success) {
    const errorDesc = value.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error validation",
      errorDesc,
    };
  }

  const uploadedFile = await uploadFile(value.data.image);

  if (uploadedFile instanceof Error) {
    return {
      errorTitle: "Failed to upload image",
      errorDesc: ["An error occurred while uploading the image."],
    };
  }

  try {
    const data = await prisma.airPlane.create({
      data: {
        name: value.data.name,
        code: value.data.code,
        image: uploadedFile as string,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/airplanes");
  redirect("/dashboard/airplanes");
}
