"use client";
import React from "react";
import ScrollCarousel from "./HorizontalScrollCarousel";
import { AutomaticCarousal } from "./AutomaticCarousal";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });
export const About = () => {
  return (
    <div className="container mx-auto">
      <section id="about">
        <div className="flex h-10 items-center justify-center">
          <span className="font-bold text-4xl ">About Us</span>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center mt-6 border-2 lg:border-0 mb-4 border-gray-200 rounded-xl pt-6">
          <div className="lg:w-[500px] w-[200px] sm:w-[350px] my-4">
            <AutomaticCarousal />
          </div>
          <div className="grid-cols-1 py-4 mx-4 ">
            <h2
              className={`${caveat.className} my-4 font-bold text-lg lg:text-2xl`}
            >
              Your Trusted Service Point at Lok Mitra Kendra Hangloh
            </h2>
            <p className="text-sm lg:text-md">
              Our shop is nestled amidst the majestic Dhauladhar mountains,
              offering a range of online services from applications to
              printouts. We specialize in web development and are proud to be an
              authorized CSP (Customer Service Point) of State Bank of India.
              Here, you can open instant bank accounts, transfer money, withdraw
              or deposit funds, and even get insurance. We are also your local
              hub for paint and hardware needs. From vibrant paints to essential
              hardware like taps and tools, we stock a variety of products to
              help you complete your projects. If you have a specific
              requirement, let us know, and we will strive to provide you with
              the best possible solution. Whatever your need, we strive to
              provide the best possible service to you.
            </p>
          </div>
        </div>
        <ScrollCarousel />
      </section>
    </div>
  );
};
