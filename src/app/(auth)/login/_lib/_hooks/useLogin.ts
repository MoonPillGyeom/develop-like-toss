import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useLogin() {
  const [isError, setIsError] = useState<boolean | undefined>(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (!res?.ok) {
      setIsError(res?.ok);
    }
    if (res?.ok) {
      router.push("/");
    }
  };

  return { isError, handleSubmit };
}
