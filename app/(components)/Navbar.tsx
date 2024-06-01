import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcons } from "./SocialIcons";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full bg-white border-b shadow-md">
      <div className="max-w-6xl mx-auto flex  items-center justify-between py-3">
        <div className="flex items-center">
          <Image width={170} height={170} src={"/assets/logo.svg"} alt="Logo" />
          <span className="h-10 border-l-2 ml-3"></span>
          <SocialIcons size={24} />
        </div>

        <nav className="flex items-center flex-col md:flex-row  gap-4 text-gray-400 uppercase text-sm font-semibold tracking-wide">
          <Link className="hidden md:inline-block hover:text-gray-600" href="/">
            home
          </Link>
          <Link className="hidden md:inline-block hover:text-gray-600" href="/">
            restrunant
          </Link>
          <Link className="hidden md:inline-block hover:text-gray-600" href="/">
            best deal
          </Link>
          <Link className="hidden md:inline-block hover:text-gray-600" href="/">
            contact
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="bg-[#03045e] text-white rounded py-3 px-4 hover:-translate-y-2 duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="bg-[#fb8500] text-white rounded py-3 px-4 hover:-translate-y-2 duration-200 hover:shadow-xl"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
