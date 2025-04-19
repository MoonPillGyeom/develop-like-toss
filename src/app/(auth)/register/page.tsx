"use client";
import Button from "@/components/common/Button";
import Input, { PasswordInput } from "@/components/common/Input";

function Register() {
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
      <Input
        id="nickName"
        label="닉네임"
        placeholder="닉네임을 입력해 주세요"
        className="focus:border-blue-20"
        helperText="최대 10자 가능"
        onChange={handleChange}
      />
      <PasswordInput
        id="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        className="focus:border-blue-20"
        helperText="최소 8자 이상"
        onChange={handleChange}
      />
      <PasswordInput
        id="password"
        type="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해 주세요"
        className="focus:border-blue-20"
        onChange={handleChange}
      />
      <Button className="mt-5">로그인</Button>
    </form>
  );
}

export default Register;
