import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="flex gap-3">
        <Link href={"/next-pro/app/(pages)/invest"}>Invest</Link>
        <Link href={"/next-pro/app/(pages)/raise"}>Raise</Link>
        <Link href={"/next-pro/app/(pages)/about"}>About</Link>
      </div>
    </nav>
  );
}
