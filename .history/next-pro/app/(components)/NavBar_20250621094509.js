"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="w-full">
        <div className="mx-30 my-9.5 grid grid-cols-3 gap-40 rounded-2xl bg-gray-50/5 justify-evenly">
          <div className=" items-start  px-6 py-3 text-white text-sm font-medium ">
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
          <div className="flex gap-x-14 pt-4 text-white text-sm justify-center my-3 font-medium">
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
              <button className="px-7 py-4 mx-4 my-2.5 rounded-2xl ml-70 bg-gray-50/10 hover:bg-gray-50/15">
                Get Started {">>"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
