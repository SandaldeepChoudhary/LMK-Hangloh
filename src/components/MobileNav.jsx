import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });
export const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className=" lg:hidden border-none rounded-full"
          >
            <MenuIcon size={28} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Welcome!</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div
              className={`grid grid-cols-1 items-center gap-4  ${caveat.className}`}
            >
              <Link href="#" className="font-bold">
                <SheetClose>
                  <button>Home</button>
                </SheetClose>
              </Link>
              <Link href="#services" className="font-bold">
                <SheetClose>
                  <button>Services</button>
                </SheetClose>
              </Link>
              <Link href="#about" className="font-bold">
                <SheetClose>
                  <button>About</button>
                </SheetClose>
              </Link>
              <Link href="#contact" className="font-bold">
                <SheetClose>
                  <button>Contact</button>
                </SheetClose>
              </Link>
            </div>
          </div>
          <SheetFooter>
            <div className="flex  justify-center items-center gap-1 w-full text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://sandaldeep.vercel.app/"
                target="_blank"
                className="text-primary underline"
              >
                Sandaldeep.
              </a>{" "}
              All rights reserved.
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
