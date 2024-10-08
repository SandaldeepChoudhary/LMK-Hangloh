"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FileText, HandCoinsIcon, Paintbrush } from "lucide-react";
import Marquee from "react-fast-marquee";
import { motion, useScroll } from "framer-motion";
import { AutomaticCarousal } from "./AutomaticCarousal";

const servicesData = [
  {
    icon: <FileText size={72} strokeWidth={0.75} />,
    title: "Online Services",
    description:
      "We specialize in online form filling, enabling you to complete essential paperwork with ease and accuracy. Our services include secure financial transactions and assistance with bank account openings, ensuring a seamless banking experience.",
  },
  {
    icon: <HandCoinsIcon size={72} strokeWidth={0.75} />,
    title: "Insurance & Taxation",
    description:
      "We also offer comprehensive health and motor insurance services, providing you with the coverage and peace of mind you need. Additionally, we facilitate tax payments, making it convenient for you to stay compliant with tax regulations.",
  },
  {
    icon: <Paintbrush size={72} strokeWidth={0.75} />,
    title: "Paint and Hardware",
    description:
      "Beyond these services, we also offer a diverse selection of paint and hardware items. Our commitment to customer satisfaction ensures you receive efficient, reliable, and friendly service for all your essential requirements.",
  },
];

export const Services = () => {
  return (
    <section className="mb-12 xl:mb-12" id="services">
      <div className="container mx-auto">
        <h2 className="mb-12 xl:mb-24 text-center text-4xl font-bold  mx-auto">
          Services
        </h2>

        {/* grid items  */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[320px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="lg:w-[128px] lg:h-[80px] w-[60px] h-[40px] bg-white dark:bg-transparent flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-6">
          <Marquee>
            <img
              src="/services/EdistrictLogo.png"
              className="w-60 h-40 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
            <img
              src="/services/CSCLogo.png"
              className="w-40 h-20 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
            <img
              src="/services/DigitaLIndiaLogo.svg"
              className="w-40 h-20 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
            <img
              src="/services/AadharLogo.svg"
              className="w-40 h-20 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
            <img
              src="/services/AirtelLogo.svg"
              className="w-40 h-20 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
            <img
              src="/services/Ayushman-BharatLogo.svg"
              className="w-40 h-20 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
            <img
              src="/services/BSNLLogo.svg"
              className="w-40 h-20 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
            <img
              src="/services/HDFCLogo.svg"
              className="w-40 h-20 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
            <img
              src="/services/IRCTCLogo.svg"
              className="w-40 h-20 lg:mx-10 mx-4 object-contain"
              alt="logo"
            />
          </Marquee>
        </div>
      </div>
    </section>
  );
};
