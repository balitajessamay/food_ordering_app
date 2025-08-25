
import { IoMdClose } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";

import Link from "next/link";
import { jaroFont } from "@/app/layout";

import OpenElement from "@/hooks/OpenElement";

const Navbar = () => {
  
  
  return (
    <>
      <nav className="sticky top-0 h-[10vh] w-full px-16 py-6 bg-(--background-color)">
        <div className="md:mx-8 flex justify-between">
          <Link href="/" className={`text-2xl ${jaroFont.className}`}>
              Sandwi<span className="text-(--accent-color)">rrific</span>
          </Link>

          <OpenElement elementStyle="text-(--accent-color) text-3xl cursor-pointer md:hidden" />

          {/* <button className="text-(--accent-color) text-3xl cursor-pointer md:hidden">
            <TiThMenuOutline />
          </button> */}
          
          <div className={`absolute flex flex-col text-center bg-cyan-700/20 backdrop-blur-sm h-[100vh] w-70  top-0 right-0 text-lg z-10 hidden md:h-auto md:w-auto md:bg-transparent md:my-auto md:px-0 md:space-x-4 md:relative md:block`}>
            <IoMdClose className="ms-4 my-8 md:hidden hover:text-rose-700" />
            <Link href="/about" className="py-4 xs:border-black xs:border-y xs:hover:bg-black/40 md:px-4 md:py-1 md:rounded md:hover:border-1 md:hover:border-(--accent-color) md:hover:bg-none md:xl:hover:text-(--accent-color)">About</Link>
            <Link href="/menu" className="py-4 xs:border-black xs:border-b xs:hover:bg-black/40 md:px-4 md:py-1 md:rounded md:hover:border-1 md:hover:border-(--accent-color) md:hover:bg-none md:xl:hover:text-(--accent-color)">Menu</Link>
            <Link href="/login" className="py-4 xs:border-black xs:border-b xs:hover:bg-black/40 md:px-4 md:py-1 md:rounded md:hover:border-1 md:hover:border-(--accent-color) md:hover:bg-none md:xl:hover:text-(--accent-color)">Login</Link>
            <Link href="/reserve-table" className="py-4 xs:border-black xs:border-b text-(--accent-color) xs:hover:bg-black/40 md:px-4 md:py-1 md:rounded md:hover:border-1 md:hover:border-(--accent-color) md:hover:bg-none">Reserve a Table</Link>
          </div>
        </div>
      </nav>
    
    </>
  );
}

export default Navbar