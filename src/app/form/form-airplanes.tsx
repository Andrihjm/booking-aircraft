"use client";

import SubmitButton from "@/components/shared/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useFormState } from "react-dom";
import { ActionResult } from "../actions/auth/actions";
import { createAirplane } from "../(root)/dashboard/(home)/airplanes/lib/actions";

const initialFormData: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormAirplanes = () => {
  const [state, formState] = useFormState(createAirplane, initialFormData);
  console.log(state);

  return (
    <div className="w-2/5">
      <ul className="bg-red-500 list-disc list-inside">
        {state?.errorDesc?.map((error, index) => (
          <li key={index + error}>{error}</li>
        ))}
      </ul>

      <form action={formState} className="space-y-4">
        <div>
          <Label htmlFor="code">Aircraft Code</Label>
          <Input
            id="code"
            name="code"
            required
            placeholder="Aircraft Code..."
          />
        </div>

        <div>
          <Label htmlFor="name">Aircraft Name</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Aircraft Name..."
          />
        </div>

        <div>
          <Label htmlFor="image">Upload Photos</Label>
          <Input
            id="image"
            name="image"
            type="file"
            required
            placeholder="Upload Photos..."
          />
        </div>

        <SubmitButton>Create</SubmitButton>
      </form>
    </div>
  );
};

export default FormAirplanes;
