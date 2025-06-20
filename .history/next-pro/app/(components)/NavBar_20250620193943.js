"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="">
        <div className="flex justify-center justify-evenly">
          <div className="bg-black bg-opacity-80 backdrop-blur-md px-8 py-4 flex items-center justify-between">
            <picture>
              <Link href="/">
                <Image
                  src="/image-removebg-preview.png" // do not include public in the src address it will cause the to not load and just presents a png logo
                  alt="logo"
                  height={50}
                  width={50}
                ></Image>
              </Link>
            </picture>
          </div>
          <div className="flex gap-6 text-white text-sm justify-center my-3 font-medium">
            <Link href="/invest">Invest</Link>
            <Link href="/raise">Raise</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/about">
              <button className=" p-2 rounded-b-xl my-2">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
