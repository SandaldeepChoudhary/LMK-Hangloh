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

export const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className=" lg:hidden border-none rounded-full">
            <MenuIcon size={28}  />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Welcome!</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
              <Link href="#" className="font-bold">
                Home
              </Link>
              <Link href="#services" className="font-bold">
                Services
              </Link>
              <Link href="#about" className="font-bold">
                About
              </Link>
              <Link href="#contact" className="font-bold">
                Contact
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
