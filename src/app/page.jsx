"use client";
import { About } from "@/components/About";
import { ContactUs } from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Services } from "@/components/Services";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading time
  }, []);
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <main>
          <Header />
          <Hero />
          <Services />
          <About />
          <ContactUs />
          <Footer />
        </main>
      )}
    </>
  );
}
