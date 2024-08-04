"use client";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";

export const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    //remove event

    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30`}
    >
      <div className="container mx-auto">
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </header>
  );
};
