import { clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}
function Button({
  type = "button",
  variant = "primary",
  className,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const buttonStyle = clsx("w-full h-14 rounded-xl font-bold", {
    // primary: disabled일 땐 gradient 제거
    "bg-[image:var(--gradient-blue)] text-white":
      variant === "primary" && !disabled,
    "bg-black-20 text-gray-40": variant === "primary" && disabled,

    // secondary: text-gradient과 border 유지, disabled면 색 변경
    "bg-[image:var(--gradient-blue)] bg-clip-text text-transparent border border-blue-20":
      variant === "secondary" && !disabled,
    "text-gray-20 border border-gray-20": variant === "tertiary" && !disabled,
    "text-black-20 border-black-20 border":
      (variant === "secondary" || variant === "tertiary") && disabled,
  });

  return (
    <button
      disabled={disabled}
      {...props}
      type={type}
      className={`disabled:cursor-not-allowed cursor-pointer ${buttonStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
