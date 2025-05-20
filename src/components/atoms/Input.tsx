import { InputProps } from "@/app/types/componentsType/input";
import { forwardRef } from "react";

function InputComponent(
  { id, type = "text", placeholder, className = "", ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      className={`w-full px-6 py-5 border rounded-md text-white text-md bg-black-20 border-gray-40 focus:outline-none shadow-sm ${className}`}
      ref={ref}
      {...props}
    />
  );
}

const Input = forwardRef(InputComponent);
export default Input;
