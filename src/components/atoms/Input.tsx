import { InputProps } from "@/app/types/componentsType/input";

function Input({
  id,
  type = "text",
  placeholder,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      className={`w-full px-6 py-5 border rounded-md text-white text-md bg-black-20 border-gray-40 focus:outline-none shadow-sm ${className}`}
      {...props}
    />
  );
}
export default Input;
