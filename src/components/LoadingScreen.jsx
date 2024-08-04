import { Loader2 } from "lucide-react";
import React from "react";

export const LoadingScreen = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[400px] h-[400px] grid grid-cols-1 gap-y-2 place-items-center">
        <img
          src="/LmkLogoPng.png"
          fill
          alt="Loading..."
          className="animate-pulse"
        />
        <Loader2 size={40} className="animate-spin" />
      </div>
    </div>
  );
};
