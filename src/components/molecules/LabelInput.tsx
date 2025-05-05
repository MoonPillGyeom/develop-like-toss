import InputMessage from "@/components/atoms/InputMessage";
import { Label } from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";

interface LabelInputWithMessageProps {
  /** input의 id 속성입니다. name 속성도 동일하게 적용됩니다. */
  id: string;
  /** input의 placeholder입니다. */
  placeholder: string;
  /** label의 label입니다. */
  label?: string;
  /** error메시지 속성입니다. */
  errorMessage?: string;
  /** input의 props입니다. */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const LabelInputWithMessage = ({
  id,
  placeholder,
  label,
  errorMessage,
  inputProps,
}: LabelInputWithMessageProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} placeholder={placeholder} {...inputProps} />
      {errorMessage && <InputMessage message={errorMessage} isError />}
    </div>
  );
};

export default LabelInputWithMessage;
