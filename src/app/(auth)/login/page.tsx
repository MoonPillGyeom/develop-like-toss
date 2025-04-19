"use client";
import Button from "@/components/common/Button";
import Input, { PasswordInput } from "@/components/common/Input";

function Login() {
  const handleChange = () => {
    console.log("event handler");
  };
  return (
    <form className="flex flex-col gap-10 w-full max-w-3xl">
      <Input
        id="email"
        label="이메일"
        placeholder="이메일을 입력해 주세요"
        className="focus:border-blue-20"
        onChange={handleChange}
      />
      <PasswordInput
        id="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        className="focus:border-blue-20"
        onChange={handleChange}
      />
      <Button>로그인</Button>
    </form>
  );
}

export default Login;
