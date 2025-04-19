"use client";

import Button from "@/components/common/Button";
import Input, { PasswordInput } from "@/components/common/Input";

export default function Home() {
  const handleClick = () => {
    console.log("test!!!");
  };
  return (
    <>
      {/* 기본 */}
      <Input
        id="email"
        label="이메일"
        placeholder="이메일을 입력해 주세요."
        onChange={handleClick}
        className="focus:border-blue-20"
      />
      {/* 폼 제출후 오류인 경우 */}
      <Input
        id="email"
        label="이메일"
        placeholder="이메일을 입력해 주세요."
        error="잘못된 이메일 입니다."
        onChange={handleClick}
        className="border-red-40"
      />
      {/* 기본 */}
      <PasswordInput
        id="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        onChange={handleClick}
        className="focus:border-blue-20"
      />
      {/* 폼 제출후 오류인 경우 */}
      <PasswordInput
        id="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        onChange={handleClick}
        error="최소 8자 이상"
        className="border-red-40"
      />
      {/* 기본 */}
      <PasswordInput
        id="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해 주세요"
        onChange={handleClick}
        className="focus:border-blue-20"
      />
      <Button type="button">가입하기</Button>
    </>
  );
}
