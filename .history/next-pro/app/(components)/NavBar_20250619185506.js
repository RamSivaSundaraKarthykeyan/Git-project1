"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="justify-center">
        <>
          <Link href="/invest">Invest</Link>
          <Link href="/raise">Raise</Link>
          <Link href="/about">About</Link>
        </>
      </div>
    </>
  );
}
