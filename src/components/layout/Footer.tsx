import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-40 text-sm flex justify-between absolute bottom-0">
      <p>
        icon by{" "}
        <Link
          href="https://icons8.com/icons"
          target="_blank"
          className="underline"
        >
          icons8
        </Link>
      </p>
    </footer>
  );
}
