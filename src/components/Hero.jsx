import React from "react";
import { Navbar } from "./Navbar";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { Button } from "./ui/button";

const caveat = Caveat({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <>
    <div className="container mx-auto">
      <Navbar />
      <section>
      <div className="flex flex-col col-span-2 lg:flex-row justify-start items-start lg:h-screen">
        <div className="mt-4 w-full flex flex-col justify-start items-start col-span-2">
          <div>
            <h1 className="font-bold text-md my-4">HELLO WORLD, <span className="text-primary">WE ARE</span></h1>
            <h2 className="font-bold text-7xl text-primary">Lok Mitra Kendra Hangloh</h2>
            <h2 className={`text-2xl font-semibold my-6 ${caveat.className}`}>
            Your One-Stop Service Center
            </h2>
            <p className="my-4">
            At Lok Mitra Kendra Hangloh we&apos;re dedicated to customer satisfaction, we ensure efficient, reliable, and friendly service to meet all your essential needs.
            </p>
          </div>
          <div className="py-4 flex gap-4">
            <button className="w-40 h-14 rounded-full border-black border-2 text-sm font-bold hover:bg-primary hover:text-white transition duration-500 ease-in-out">CONTACT US</button>
            <button className="w-44 h-14 rounded-full text-sm tracking-wide font-semibold hover:bg-secondary transition duration-500 ease-in-out">GET DIRECTIONS &rarr;</button>
       
          </div>
        </div>
        <div className="w-full h-1/2 lg:h-screen p-4 relative">
        <img src="/LmkLogo.jpg" alt="Lok Mitra Kendra Logo" objectFit="contain"/>
        </div>
      </div>
      </section>
    </div>
    </>
  );
};
