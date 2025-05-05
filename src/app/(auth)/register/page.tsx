"use client";

import Input, { PasswordInput } from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/app/actions/register";

function Register() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const result = await register({
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    });

    if (result?.error) {
      setError(result.error);
      return;
    }

    ref.current?.reset();
    router.push("/login");
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="p-6 w-full max-w-[400px] flex flex-col gap-6 border border-solid border-black bg-white rounded"
      >
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <h1 className="text-2xl font-bold w-full">Sign Up</h1>

        <Input
          id="name"
          name="name"
          label="Full Name"
          placeholder="Full Name"
          className="focus:border-blue-20"
        />
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

        <Button type="submit">Sign up</Button>

        <Link
          href="/login"
          className="text-sm text-[#888] transition duration-150 ease hover:text-black text-center"
        >
          Already have an account?
        </Link>
      </form>
    </section>
  );
}

export default Register;
