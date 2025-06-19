"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const toSignUp = () => {
    return <Link href="/about" />;
  };

  return (
    <>
      <div className="flex justify-center justify-evenly">
        <div>
          <picture>
            <Image
              src="/image-removebg-preview.png" // do not include public in the src address it will cause the to not load and just presents a png logo
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
          <Link href="/about">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}
