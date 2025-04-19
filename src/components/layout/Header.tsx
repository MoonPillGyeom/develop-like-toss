"use client";

import Input from "@/components/common/Input/Input";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="flex text-white px-12 justify-between items-center py-6">
        <span>logo</span>
        <div className="flex gap-8">
          <Input
            id="text"
            placeholder="검색"
            onChange={() => console.log("test")}
          />
          <nav className="flex gap-8 items-center">
            <Link href="/login">로그인</Link>
            <Link href="/register">회원가입</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
