import { ComponentProps, useState } from "react";

interface InputProps extends ComponentProps<"input"> {
  id: string;
  label?: string;
  type?: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  className?: string;
}

/**
 * @param id htmlFor,id
 */
function Input({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  helperText,
  className,
  ...props
}: InputProps) {
  let message: React.ReactNode = null;

  if (error) {
    message = <p className="text-red-40">{error}</p>;
  } else if (helperText) {
    message = <p className="text-gray-40">{helperText}</p>;
  }
  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <label htmlFor={id} className="text-white text-lg">
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1.5">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`text-white text-md w-full px-6 py-5 border border-gray-40 focus:outline-none rounded-md shadow-sm bg-black-20 ${className}`}
          {...props}
        />
        {message}
      </div>
    </div>
  );
}

export function PasswordInput({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  className,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  let message: React.ReactNode = null;

  if (error) {
    message = <p className="text-red-40">{error}</p>;
  } else if (helperText) {
    message = <p className="text-gray-40">{helperText}</p>;
  }

  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <label htmlFor={id} className="text-white text-lg">
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1.5">
        <div className="relative">
          <input
            id={id}
            type={isPasswordVisible ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`text-white text-md w-full px-6 py-5 border border-gray-40 focus:outline-none rounded-md shadow-sm bg-black-20 ${className}`}
            {...props}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white"
          >
            {isPasswordVisible ? (
              <span role="img" aria-label="hide">
                🙈
              </span>
            ) : (
              <span role="img" aria-label="show">
                👁️
              </span>
            )}
          </button>
        </div>
        {message}
      </div>
    </div>
  );
}

export default Input;
