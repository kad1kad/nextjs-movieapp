import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <h1 className="text-4xl tracking-widest">MOVIE DISC</h1>
    </header>
  );
}

export default Header;
