"use client";

import { ActionResult, handleSignInUser } from "@/app/actions/auth/actions";
import SubmitButton from "@/components/shared/submit-button";
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
    <>
      <ul className="bg-red-500 list-disc list-inside">
        {state.errorDesc?.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>

      <div className="w-full sm:w-full sm:max-w-sm sm:mx-auto">
        <form action={formState} className="w-full space-y-4">
          <Input name="email" type="email" placeholder="Email..." />
          <Input name="password" type="password" placeholder="Password..." />

          <SubmitButton>Sign in</SubmitButton>
        </form>
      </div>
    </>
  );
};

export default FormSignin;
