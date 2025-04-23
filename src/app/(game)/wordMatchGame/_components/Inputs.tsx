import Input from "@/components/common/Input/Input";
import { ChangeEvent } from "react";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Inputs({ onChange }: InputProps) {
  return (
    // <div className="flex w-28">
    <div className="flex w-[120px]">
      <Input id="word" onChange={onChange} />
      <Input id="word" onChange={onChange} />
    </div>
  );
}
