import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between h-auto m-5 sm:flex-row">
      <h1 className="text-4xl tracking-widest text-transparent font-extralight bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-700 to-indigo-700">
        MOVIE DISC
      </h1>
    </header>
  );
}

export default Header;
