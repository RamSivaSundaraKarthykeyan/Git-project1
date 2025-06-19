"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-center ">
        <div>
          <picture>
            <Image
              src="/image-removebg-preview.png"
              alt="logo"
              height={50}
              width={50}
            ></Image>
          </picture>
        </div>
        <div className="flex justify-center gap-9">
          <Link href="/invest">Invest</Link>
          <Link href="/raise">Raise</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </>
  );
}
