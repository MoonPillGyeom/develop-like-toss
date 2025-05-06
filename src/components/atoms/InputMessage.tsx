import React from "react";

interface InputMessageProps {
  error?: string;
  helper?: string;
}

const InputMessage = ({ error, helper }: InputMessageProps) => {
  if (!error && !helper) return null;

  const message = error ?? helper;
  const messageStyle = error ? "text-red-500" : "text-gray-500";

  return <p className={`absolute text-sm ${messageStyle}`}>{message}</p>;
};

export default InputMessage;
