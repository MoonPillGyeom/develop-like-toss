"use client";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";

export default function Header() {
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
            <Button
              // className="border border-solid border-black rounded"
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
      </header>
    </>
  );
}
