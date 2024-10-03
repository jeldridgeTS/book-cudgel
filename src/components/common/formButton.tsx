"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FormButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children, ...props }: FormButtonProps) {
  console.log("SOME PROPS", props);
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending} {...props}>
      {children}
    </Button>
  );
}
