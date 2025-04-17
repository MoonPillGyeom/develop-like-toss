import { clsx } from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "tertiary";
  className: string;
  children: ReactNode;
}
function Button({
  type = "button",
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonClass = clsx({
    "from-blue-20 to-indigo-20": variant === "primary",
    "": variant === "secondary",
    "": variant === "tertiary",
  });
  return (
    <button
      {...props}
      type={type}
      className={`w-full h-14 bg-linear-to-r text-white ${buttonClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
