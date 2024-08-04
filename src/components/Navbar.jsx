import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import { MobileNav } from "./MobileNav";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-10 flex justify-center items-center">
        <div className="flex items-center justify-between w-full h-full px-4 border-b-slate-200">
          <Link href="/">
            <Image
              src="/LmkLogoPng.png"
              alt="Lmk Hangloh Logo"
              width={80}
              height={80}
            />
          </Link>
          <div
            className={`w-2/4 h-full items-center justify-between hidden lg:flex gap-4 px-4 text-lg font-semibold transition-all duration-200 ${caveat.className}`}
          >
            <Link
              href="#"
              className="hover:text-primary transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-primary transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="#services"
              className="hover:text-primary transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-all duration-200"
            >
              Contact
            </Link>
          </div>
          <div className="relative flex gap-1">
            <ThemeToggler />
            <MobileNav className="absolute right-0" />
          </div>
        </div>
      </div>
    </>
  );
};
