"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-center gap-10">
        <div>
          <Link href="/invest">Invest</Link>
          <Link href="/raise">Raise</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <img src="/next-pro/public/image-removebg-preview.png"></img>
        </div>
      </div>
    </>
  );
}
