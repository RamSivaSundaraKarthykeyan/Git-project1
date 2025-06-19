import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div>
        <nav>
          <Link href={""}>Invest</Link>
          <Link>Raise</Link>
          <Link>About</Link>
        </nav>
      </div>
    </>
  );
}
