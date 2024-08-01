import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-22 flex justify-center items-center">
        <div className="flex items-center justify-between w-full h-full px-4 border-b-slate-200">
          <Image src="/LmkLogoPng.png" alt="Lmk Hangloh Logo" width={80} height={80}/>
          <div className="w-2/4 h-full items-center justify-between hidden lg:flex gap-4 px-4">
            <Link href="#" className="hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="hover:text-primary">
              About
            </Link>
            <Link href="#services" className="hover:text-primary">
              Services
            </Link>
            <Link href="#contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
          <div className="relative flex gap-1">
            <ThemeToggler/>
            <MobileNav className="absolute right-0"/>
          </div>
        </div>
      </div>
    </>
  );
};
