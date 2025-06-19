import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div>
        <nav>
          <Link>Invest</Link>
          <Link>Raise</Link>
          <Link>About</Link>
        </nav>
      </div>
    </>
  );
}
