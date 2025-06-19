"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const toSignUp = () => {
    <a href="/about"></a>;
  };

  return (
    <>
      <div className="flex justify-center justify-evenly">
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
        <div>
          <button onClick={toSignUp}>Get Started</button>
        </div>
      </div>
    </>
  );
}
