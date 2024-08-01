"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LoaderCircle, MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggler = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      {isClient ? (
        <Button
          variant="outline"
          onClick={toggleTheme}
          size="icon"
          className="rounded-full"
        >
          {theme === "dark" ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          ) : (
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          )}
        </Button>
      ) : (
        <div>
          <LoaderCircle size={20} className="animate-spin" />
        </div>
      )}
    </div>
  );
};
