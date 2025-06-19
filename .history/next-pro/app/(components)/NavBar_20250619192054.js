"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex justify-center gap-9">
          <Link href="/invest">Invest</Link>
          <Link href="/raise">Raise</Link>
          <Link href="/about">About</Link>
        </div>
        <div></div>
      </div>
    </>
  );
}
