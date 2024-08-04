import React from "react";
import { Caveat } from "next/font/google";
import { Briefcase, Mail, PhoneCall, User } from "lucide-react";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <section>
          <div className="flex flex-col col-span-2 lg:flex-row justify-start items-start lg:h-screen">
            <div className="mt-4 w-full flex flex-col justify-start items-start col-span-2">
              <div>
                <h1 className="font-bold text-md my-4">
                  HELLO PALAMPUR, <span className="text-primary">WE ARE</span>
                </h1>
                <h2 className="font-bold text-7xl text-primary">
                  Lok Mitra Kendra Hangloh
                </h2>
                <h2
                  className={`text-2xl font-semibold my-6 ${caveat.className}`}
                >
                  Your One-Stop Service Center
                </h2>
                <p className="my-4">
                  At Lok Mitra Kendra Hangloh we&apos;re dedicated to customer
                  satisfaction, we ensure efficient, reliable, and friendly
                  service to meet all your essential needs.
                </p>
              </div>
              <div className="py-4 flex gap-4">
                <Link href="#" className="relative">
                  <button className="w-40 h-14 rounded-full border-black bg-white border-2 z-10 text-sm font-bold hover:bg-primary hover:text-white transition duration-500 relative ease-in-out dark:text-black dark:hover:text-white">
                    CONTACT US
                  </button>
                  <div className="w-40 h-14 absolute bg-gray-300 rounded-full z-0 top-2 -right-2"></div>
                </Link>
                <a
                  href="https://maps.app.goo.gl/f4fsbFaRsPcQAuh2A?g_st=ac"
                  target="_blank"
                >
                  <button className="w-44 h-14 rounded-full text-sm tracking-wide font-semibold hover:bg-secondary transition duration-500 ease-in-out">
                    GET DIRECTIONS &rarr;
                  </button>
                </a>
              </div>
              <a
                className="flex items-center gap-2 my-4 hover:text-primary hover:underline transition duration-150"
                href="tel:+91-9317877889"
              >
                <PhoneCall size={20} />
                +91-9317877889
              </a>
              <a
                className="flex items-center gap-2 my-4 hover:text-primary hover:underline transition duration-150"
                href="mailto:lmkhangloh@gmail.com"
              >
                <Mail size={20} />
                lmkhangloh@gmail.com
              </a>
            </div>
            <div className="w-full h-1/2 lg:h-screen p-4 relative">
              <div className="relative">
                <div className="lg:flex justify-between items-center lg:w-44 px-4 lg:h-14 hidden bg-primary absolute bottom-32 -left-12 md:bottom-56 rounded-full">
                  <User size={40} className="text-white mr-2" />
                  <h3 className="text-white font-semibold text-xs lg:text-sm flex items-center gap-2">
                    <span className="text-lg">2K+</span>{" "}
                    <div className="w-1/2">HAPPY CLIENTS</div>
                  </h3>
                </div>
                <div className="lg:flex justify-between items-center lg:w-44 px-4 lg:h-14 hidden bg-primary absolute top-32 right-6 md:bottom-56  rounded-full">
                  <Briefcase size={40} className="text-white mr-2" />
                  <h3 className="text-white font-semibold text-xs lg:text-sm flex items-center gap-2">
                    <span className="text-lg">100+</span>{" "}
                    <div className="w-1/2">SERVICES</div>
                  </h3>
                </div>
                <img
                  src="/LmkLogo.jpg"
                  alt="Lok Mitra Kendra Logo"
                  className="rounded-tl-[210px] rounded-tr-[285px] rounded-br-[210px] rounded-bl-[290px]  w-[510px] h-[462px] lg:object-contain object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
