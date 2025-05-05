interface InputMessageProps {
  message: string;
  isError: boolean;
}

const InputMessage = ({ message, isError }: InputMessageProps) => {
  const messageStyle = isError ? "text-red-500" : "text-gray-500";
  return <p className={`absolute text-sm ${messageStyle}`}>{message}</p>;
};

export default InputMessage;
// let message: React.ReactNode = null;

// if (error) {
//   message = <p className="text-red-40">{error}</p>;
// } else if (helperText) {
//   message = <p className="text-gray-40">{helperText}</p>;
// }
