import { useState } from "react";

export const useInput = (maxLength: number) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [charArray, setCharArray] = useState<string[]>([]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length <= maxLength) {
      setInputValue(newValue);
      setCharArray(newValue.split(""));
    }
  };

  const reset = () => {
    setInputValue("");
    setCharArray([]);
  };

  return { inputValue, charArray, handleChangeValue, reset };
};
