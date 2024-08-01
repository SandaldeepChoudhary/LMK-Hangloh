import { About } from "@/components/About";
import { ContactUs } from "@/components/ContactUs";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <About/>
      <ContactUs/>
    </main>
  );
}
