"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="w-full">
        <div className="mx-30 grid grid-cols-3 gap-150 rounded-2xl bg-gray-50/5 justify-evenly">
          <div className=" items-start g px-6 py-3 text-white text-sm font-medium ">
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
          <div className="flex gap-6 text-black text-sm justify-center my-3 font-medium">
            <Link href="/invest" className="hover:underline">
              Invest
            </Link>
            <Link href="/raise" className="hover:underline">
              Raise
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
          <div>
            <Link href="/about">
              <button className="px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
