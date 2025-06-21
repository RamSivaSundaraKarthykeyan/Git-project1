"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="w-full">
        <div className="mx-4 my-4 grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl bg-gray-50/5">
          <div className="px-4 py-2 flex justify-center md:justify-start">
            <picture>
              <Link href="/">
                <Image
                  src="/image-removebg-preview.png"
                  alt="logo"
                  height={50}
                  width={50}
                />
              </Link>
            </picture>
            .{" "}
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-14 pt-4 text-white text-sm items-center md:justify-center my-3 font-medium">
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
          <div className="flex justify-center md:justify-end">
            <Link href="/about">
              <button className="px-7 py-4 mx-4 my-2.5 rounded-2xl bg-gray-50/10 hover:bg-gray-50/15">
                Get Started {">"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
