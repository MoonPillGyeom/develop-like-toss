import { useRegister } from "@/app/(auth)/register/_lib/_hooks/useRegister";
import Button from "@/components/atoms/Button";
import InputMessage from "@/components/atoms/InputMessage";
import LabelInputWithMessage from "@/components/molecules/LabelInput";
import { PasswordInput } from "@/components/molecules/PasswordInput";
import Link from "next/link";

function RegisterForm() {
  const { isError, handleSubmit, formRef } = useRegister();
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="p-6 w-full max-w-[400px] flex flex-col gap-6 border border-solid border-black bg-white rounded"
    >
      <LabelInputWithMessage
        id="name"
        label="닉네임"
        placeholder="닉네임을 입력해 주세요"
        inputProps={{ className: "focus:border-blue-20" }}
      />
      {isError ? (
        <InputMessage error="닉네임은 최대 6자 입니다." />
      ) : (
        <InputMessage helper="닉네임은 6자 이내로 작성해주세요." />
      )}
      <LabelInputWithMessage
        id="email"
        label="이메일"
        placeholder="이메일을 입력해 주세요"
        inputProps={{ className: "focus:border-blue-20" }}
      />
      {isError ? (
        <InputMessage error="잘못된 이메일 입니다." />
      ) : (
        <InputMessage helper="사용하지 않는 이메일을 입력해 주세요." />
      )}
      <PasswordInput
        id="password"
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        inputProps={{ className: "focus:border-blue-20" }}
      />
      {isError ? (
        <InputMessage error="6자 이내" />
      ) : (
        <InputMessage helper="평소 사용하지 않는 비밀번호로 가입해 주세요." />
      )}
      <Button type="submit">Sign up</Button>

      <Link
        href="/login"
        className="text-sm text-[#888] transition duration-150 ease hover:text-black text-center"
      >
        이미 계정이 있으신가요?
      </Link>
    </form>
  );
}

export default RegisterForm;
