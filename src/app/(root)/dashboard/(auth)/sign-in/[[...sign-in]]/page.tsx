import FormSignin from "@/app/form/auth/form-signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-in",
};

const page = () => {
  return (
    <>
      <header className="sm:w-full sm:max-w-sm sm:mx-auto">
        <h2 className="mt-10 text-center text-2xl font-bold leading-tight text-gray-900">
          Sign to your account
        </h2>
      </header>

      <FormSignin />
    </>
  );
};

export default page;
