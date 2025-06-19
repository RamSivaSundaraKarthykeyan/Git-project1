import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="flex gap-3">
        <Link href={"/"}>Invest</Link>
        <Link href={""}>Raise</Link>
        <Link href={""}>About</Link>
      </div>
    </nav>
  );
}
