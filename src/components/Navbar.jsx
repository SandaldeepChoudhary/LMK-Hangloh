import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-22 flex justify-center items-center">
        <div className="flex items-center justify-between w-full h-full px-4 border-b-slate-200">
          <Image src="/LmkLogoPng.png" width={80} height={80}/>
          <div className="w-2/4 h-full flex items-center justify-between gap-4 px-4">
            <Link href="#" className="text-black hover:text-red-400">
              Home
            </Link>
            <Link href="#" className="text-black hover:text-red-400">
              About
            </Link>
            <Link href="#services" className="text-black hover:text-red-400">
              Services
            </Link>
            <Link href="#" className="text-black hover:text-red-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
