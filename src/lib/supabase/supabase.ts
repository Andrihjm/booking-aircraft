import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!!;
const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!!;

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_KEY
);

export const uploadFile = async (file: File) => {
  try {
    const fileName = `${Date.now()}.png`;

    const { data, error } = await supabase.storage
      .from("ImageUpload")
      .upload(`public/airplanes/${fileName}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw new Error(error.message);
    }

    return fileName;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUrlFileImage = (fileName: string) => {
  const { data } = supabase.storage
    .from("ImageUpload")
    .getPublicUrl(`public/airplanes/${fileName}`);

  return data.publicUrl;
};
