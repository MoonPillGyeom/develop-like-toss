import { register } from "@/app/actions/register";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export const useRegister = () => {
  const [isError, setIsError] = useState<boolean>();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const result = await register({
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    });
    console.log("result : ", result);
    if (result?.error) {
      setIsError(result.error);
      return;
    }

    formRef.current?.reset();
    router.push("/login");
  };

  return { isError, handleSubmit, formRef };
};
