"use client";
import Button from "@/components/atoms/Button";
import Input, { PasswordInput } from "@/components/atoms/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log(res);
    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok) {
      router.push("/");
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        className="p-6 w-full max-w-[400px] flex flex-col gap-6 border border-solid border-black bg-white rounded"
        onSubmit={handleSubmit}
      >
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <h1 className="text-2xl font-bold w-full">Sign In</h1>
        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="Email"
          className="focus:border-blue-20"
        />
        <PasswordInput
          id="password"
          name="password"
          label="Password"
          placeholder="Password"
          className="focus:border-blue-20"
        />
        <Button type="submit">Logi In</Button>
        <Link
          href="/register"
          className="text-sm text-[#888] transition duration-150 ease hover:text-black text-center"
        >
          Don&apos;t have an account?
        </Link>
      </form>
    </section>
  );
}

export default Login;
