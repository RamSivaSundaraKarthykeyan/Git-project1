import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="flex ">
        <Link className="mx-3" href={"/"}>
          Invest
        </Link>
        <Link className="mx-3" href={""}>
          Raise
        </Link>
        <Link className="mx-3" href={""}>
          About
        </Link>
      </div>
    </nav>
  );
}
