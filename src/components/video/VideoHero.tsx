"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/utils/get-image-url";

export default function VideoHero({ data }: any) {
  if (!data) return null;

  const { title, description, bg, ctas } = data;

  // Split title to highlight the last word as shown in image
  const words = title?.split(" ") || [];
  const mainTitle = words.slice(0, -1).join(" ");
  const highlightWord = words[words.length - 1];

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-black rounded-[20px]">
      {/* Background Image with Dark Overlay */}
      {bg?.url && (
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl(bg.url)}
            alt={bg.name || "Video Content Hero"}
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 py-20">
        <div className="max-w-4xl flex flex-col gap-8 lg:gap-10">
          {/* Typography Scale */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-extrabold text-white leading-[1.05] tracking-tighter">
              {mainTitle}{" "}
              <span className="block bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                {highlightWord}
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-xl leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5 mt-4">
            {ctas?.map((cta: any, index: number) => (
              <Link
                key={cta.id}
                href={`/${cta.href}`}
                className={`px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  index === 0
                    ? "bg-white text-black hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:text-white"
                    : "border-2 border-white/20 text-white hover:bg-white hover:text-black"
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
