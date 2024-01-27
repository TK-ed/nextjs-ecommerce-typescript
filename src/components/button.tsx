"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function Button({ children, className, ...props }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`${className} btn btn-primary`}
      type="submit"
      disabled={pending}
    >
      {pending ? <span className="loading loading-dots loading-md" /> : null}
      {children}
    </button>
  );
}
