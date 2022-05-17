import Link from "next/link";
import Nav from "./Nav";
import Slideshow from "./SlideShow";

function Header({ results }) {
  return (
    <header className="relative w-screen">
      <nav className="absolute z-30 justify-start w-screen px-4 bg-gradient-to-b from-slate-800 h-1/2">
        <div className="absolute top-0 flex items-center mt-3">
          {/* LOGO */}

          <Link href="/">
            <a>
              <h1 className="top-0 z-30 tracking-widest text-transparent md:text-4xl sm:text-md bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-700 to-indigo-700">
                MOVIE DISC
              </h1>
            </a>
          </Link>

          <Nav />
        </div>
      </nav>

      {/* HEADER SLIDER */}

      <Slideshow results={results} />
    </header>
  );
}

export default Header;
