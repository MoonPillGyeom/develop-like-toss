import Link from "next/link";

function Header() {
  return (
    <>
      <div className="flex">
        <nav>
          <Link href="/login">로그인</Link>
          <Link href="/register">회원가입</Link>
        </nav>
      </div>
    </>
  );
}
export default Header;
