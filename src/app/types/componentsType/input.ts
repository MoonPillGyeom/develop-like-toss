export interface InputProps extends React.ComponentProps<"input"> {
  id: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export interface PasswordInputProps extends React.ComponentProps<"input"> {
  id: string;
  type?: string;
  placeholder?: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  /** input의 props입니다. */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
