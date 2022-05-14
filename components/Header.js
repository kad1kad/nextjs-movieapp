import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-row flex-col items-center justify-between h-auto m-5">
      <Link href="/">
        <a>
          <h1 className="text-4xl tracking-widest text-transparent font-extralight bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-700 to-indigo-700">
            MOVIE DISC
          </h1>
        </a>
      </Link>
    </header>
  );
}

export default Header;
