"use client";
import React from "react";
import Image from "next/image";
import mainAppImg from "../assets/main_app.jpeg";

export default function PhoneMockup() {
  return (
    <div className="relative group perspective-1000 scale-75 sm:scale-90 lg:scale-100 transition-transform duration-500">
      {/* Dynamic Glow Effect matching the app's blue */}
      <div className="absolute -inset-20 bg-blue-500/5 blur-[120px] opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity duration-1000" />

      {/* Device Frame */}
      <div className="relative mx-auto border-[#eeeff1] bg-[#fdfdfd] border-[12px] rounded-[3.5rem] h-[660px] w-[320px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] ring-1 ring-gray-900/5 overflow-hidden">
        {/* Hardware Notch Detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#eeeff1] rounded-b-3xl z-50 flex items-center justify-center">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>
        {/* The Real App Image */}
        <div className="h-full w-full relative bg-white overflow-hidden">
          <Image
            src={mainAppImg}
            alt="Netle App Screenshot"
            fill
            className="object-cover scale-105" // Slight scale to fill frame nicely
            priority
          />
        </div>
        {/* Glass Reflection for Premium Depth */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent z-40" />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-[#fdfdfd] z-50 rounded-full w-1/3 mx-auto mb-2 opacity-20" />{" "}
        {/* Home Indicator */}
      </div>

      <style jsx>{`
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
