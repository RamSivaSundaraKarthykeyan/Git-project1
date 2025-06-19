"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div>
        <>
          <Link href="/invest">Invest</Link>
          <Link href="/next-pro/app/(components)/(pages)/raise">Raise</Link>
          <Link href="/(pages)/about">About</Link>
        </>
      </div>
    </>
  );
}
