"use client";

import { ActionResult, handleSignInUser } from "@/app/actions/auth/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

const initialFormData: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormSignin = () => {
  const [state, formState] = useFormState(handleSignInUser, initialFormData);

  console.log(state);

  return (
    <div className="w-full min-h-screen">
      <div className="min-h-screen flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="sm:w-full sm:max-w-sm sm:mx-auto">
          <h2 className="mt-10 text-center text-2xl font-bold leading-tight text-gray-900">
            Sign to your account
          </h2>
        </div>

        <div className="w-full sm:w-full sm:max-w-sm sm:mx-auto">
          <form action={formState} className="w-full space-y-4">
            <Input name="email" type="email" placeholder="Email..." />
            <Input name="password" type="password" placeholder="Password..." />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSignin;
