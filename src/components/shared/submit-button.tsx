"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "default" | "ghost" | "destructive" | "link";
}

const SubmitButton = ({ children, className, variant }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant={variant}
      disabled={pending}
      className={`w-full ${className}`}
    >
      {pending ? "Loading..." : children}
    </Button>
  );
};

export default SubmitButton;
