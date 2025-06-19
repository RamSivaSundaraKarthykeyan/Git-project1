"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div>
        <>
          <Link className="text-gray-600" href="/invest">
            Invest
          </Link>
          <Link href="/raise">Raise</Link>
          <Link href="/about">About</Link>
        </>
      </div>
    </>
  );
}
