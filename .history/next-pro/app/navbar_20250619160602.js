import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="flex-1/3 ">
        <Link className="gap-3" href={"/"}>
          Invest
        </Link>
        <Link className="gap-3" href={""}>
          Raise
        </Link>
        <Link className="gap-3" href={""}>
          About
        </Link>
      </div>
    </nav>
  );
}
