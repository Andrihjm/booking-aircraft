import SubmitButton from "@/components/shared/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const FormAirplanes = () => {
  return (
    <form action="" className="w-2/5 space-y-4">
      <div>
        <Label htmlFor="code">Aircraft Code</Label>
        <Input id="code" name="code" required placeholder="Aircraft Code..." />
      </div>

      <div>
        <Label htmlFor="name">Aircraft Name</Label>
        <Input id="name" name="name" required placeholder="Aircraft Name..." />
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
  );
};

export default FormAirplanes;
