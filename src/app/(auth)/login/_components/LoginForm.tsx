import { useLogin } from "@/app/(auth)/login/_lib/_hooks/useLogin";
import Button from "@/components/atoms/Button";
import InputMessage from "@/components/atoms/InputMessage";
import LabelInputWithMessage from "@/components/molecules/LabelInput";
import { PasswordInput } from "@/components/molecules/PasswordInput";
import Link from "next/link";

function LoginForm() {
  const { isError, handleSubmit } = useLogin();

  return (
    <form
      className="w-full max-w-[400px] flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <LabelInputWithMessage
          id="email"
          placeholder="이메일을 입력해 주세요"
          label="이메일"
          inputProps={{ className: "focus:border-blue-20" }}
        />
        {isError && <InputMessage error="잘못된 이메일입니다." />}
      </div>
      <div className="relative">
        <PasswordInput
          id="password"
          placeholder="비밀번호를 입력해 주세요"
          label="비밀번호"
          inputProps={{ className: "focus:border-blue-20" }}
        />
        {isError && <InputMessage error="비밀번호를 확인해주세요." />}
      </div>
      <Button type="submit">Logi In</Button>
      <Link
        href="/register"
        className="text-sm text-[#888] transition duration-150 ease hover:text-blue-20 text-center"
      >
        계정이 없으신가요?
      </Link>
    </form>
  );
}

export default LoginForm;
