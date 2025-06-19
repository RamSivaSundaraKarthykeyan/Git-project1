import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div>
        <nav>
          <Link href="/next-pro/app/(components)/(pages)/invest">Invest</Link>
          <Link href="/next-pro/app/(components)/(pages)/raise">Raise</Link>
          <Link href="/next-pro/app/(components)/(pages)/about">About</Link>
        </nav>
      </div>
    </>
  );
}
