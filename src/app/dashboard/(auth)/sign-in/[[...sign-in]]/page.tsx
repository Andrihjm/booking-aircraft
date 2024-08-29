import FormSignin from "@/app/form/auth/form-signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-in",
};

const page = () => {
  return (
    <>
      <FormSignin />
    </>
  );
};

export default page;
