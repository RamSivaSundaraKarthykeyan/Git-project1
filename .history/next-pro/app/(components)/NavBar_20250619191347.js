"use client";
import Link from "next/link";
import Image from "next/image";

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
          <Image
            src="/next-pro/public/image-removebg-preview.png"
            alt="logo"
            width={0}
          ></Image>
        </div>
      </div>
    </>
  );
}
