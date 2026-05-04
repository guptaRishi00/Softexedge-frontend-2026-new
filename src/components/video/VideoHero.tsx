"use client";

import React from "react";
import Link from "next/link";
import { getImageUrl } from "@/utils/get-image-url";

export default function VideoHero({ data }: any) {
  if (!data) return null;

  const { title, description, bg, ctas } = data;

  const words = title?.split(" ") || [];
  const mainTitle = words.slice(0, -1).join(" ");
  const highlightWord = words[words.length - 1];

  return (
    <section className="relative w-full lg:min-h-[96.5vh] flex items-center overflow-hidden bg-black -mt-[150px] pt-[112px]">
      {/* Background Video */}
      {bg?.url && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover object-[75%_center] opacity-80"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={getImageUrl(bg.url)} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-[550px] flex flex-col gap-6 lg:gap-8">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-6xl lg:text-[70px] font-[900] text-white">
              {mainTitle}{" "}
              <span className="block text-[#2B6CF2]">{highlightWord}</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-[22px] text-white/80 leading-relaxed font-light mt-2 max-w-md">
            {description}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-5 mt-6">
            {ctas?.map((cta: any, index: number) => (
              <Link
                key={cta.id}
                href={`/${cta.href}`}
                className={`px-9 py-3.5 rounded-full font-semibold text-[17px] transition-all duration-300 ${
                  index === 0
                    ? "bg-white text-[#2B6CF2] hover:bg-gray-100"
                    : "border-[1.5px] border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {cta.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
