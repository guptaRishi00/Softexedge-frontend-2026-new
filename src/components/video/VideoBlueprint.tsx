"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function VideoBlueprint({ data }: any) {
  if (!data) return null;

  const { title, description, cards } = data;

  // Improved title splitting to ensure no words are lost
  const words = title?.split(" ") || [];
  const firstPart = words[0] || "";
  const highlightWord = words[1] || "";
  const restOfTitle = words.slice(2).join(" ");

  return (
    <section className="p-3 mt-14">
      {/* Parent wrapper styles preserved */}
      <div className="w-full bg-black py-14 lg:py-20 px-6 lg:px-12 text-white overflow-hidden rounded-[20px]">
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-16 lg:gap-20">
          {/* Header: High-Tech Editorial Split */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 border-b border-white/10 pb-12">
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black uppercase tracking-tighter leading-[0.9] max-w-3xl">
              {firstPart}{" "}
              <span className="bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                {highlightWord}
              </span>{" "}
              {restOfTitle}
            </h2>

            {description && (
              <p className="text-white/60 text-base lg:text-lg font-medium max-w-md leading-relaxed border-l-2 border-[#2F85EA]/30 pl-6">
                {description}
              </p>
            )}
          </div>

          {/* Cards: Blueprint Schematic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Optional schematic connecting line behind the cards on desktop */}

            {cards?.map((card: any, index: number) => (
              <div
                key={card.id}
                className="group relative bg-gradient-to-b from-white/[0.04] to-transparent rounded-[24px] p-8 lg:p-10 flex flex-col gap-8 transition-all duration-500 hover:from-white/[0.08] hover:to-white/[0.02] border border-white/5 hover:border-white/15 overflow-hidden shadow-2xl"
              >
                {/* Glowing Top Edge Indicator */}

                {/* Blueprint Watermark Number */}
                <div className="absolute -top-6 -right-6 text-[120px] font-black text-white/[0.02] group-hover:text-[#2F85EA]/5 transition-colors duration-500 pointer-events-none select-none leading-none z-0">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon Container - Tech style */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-[#2F85EA]/50 group-hover:shadow-[0_0_20px_rgba(47,133,234,0.2)] backdrop-blur-sm">
                  {card.icon?.url && (
                    <div className="relative w-8 h-8">
                      <Image
                        src={getImageUrl(card.icon.url)}
                        alt={card.title}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        unoptimized
                      />
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#07D6F3] transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-white/50 text-sm lg:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
