import { useToggle } from "@/app/hooks/useToogle";
import { PasswordInputProps } from "@/app/types/componentsType/input";
import Input from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";

export function PasswordInput({
  id,
  placeholder,
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  inputProps,
}: PasswordInputProps) {
  const { isVisible, toggleVisibility } = useToggle();

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <Input
          id={id}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          {...inputProps}
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white"
        >
          {isVisible ? (
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
    </div>
  );
}
