import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const jost = Jost({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Lok Mitra Kendra Hangloh",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header/>
          {children}{" "}
      <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}