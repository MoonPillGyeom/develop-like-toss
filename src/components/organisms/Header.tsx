"use client";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full text-white px-12 py-6 z-10">
        <div className="flex justify-between items-center">
          <span>logo</span>
          <div className="flex gap-8">
            <Input
              id="text"
              placeholder="검색"
              onChange={() => console.log("test")}
            />
            <nav className="flex gap-8 items-center">
              <Button
                onClick={() => {
                  signOut({ redirect: false }).then(() => {
                    Router.push("/");
                  });
                }}
              >
                로그아웃 버튼(임시)
              </Button>
              <Link href="/login">로그인</Link>
              <Link href="/register">회원가입</Link>
            </nav>
          </div>
        </div>
      </header>
      {/* 페이지 컨텐츠가 header 아래로 내려오도록 padding-top 추가 */}
      <div className="pt-[90px]">{/* 여기에 페이지 본문 내용 */}</div>
    </>
  );
}
