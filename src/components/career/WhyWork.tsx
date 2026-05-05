"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function WhyWork({ data }: any) {
  if (!data) return null;

  return (
    <section className="p-3">
      <div className="w-full bg-black overflow-hidden rounded-[20px] relative">
        <div className="relative z-10 py-10 lg:py-14 px-4 md:px-6 flex flex-col gap-8 lg:gap-10">
          {/* Top: Centered Editorial Header (Scaled Down) */}
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1]">
              {data.title}
            </h2>
            <p className="text-white/60 text-sm lg:text-base max-w-xl leading-relaxed font-medium">
              {data.description}
            </p>
          </div>

          {/* Cinematic Wide Image (Scaled Down Overlap) */}
          <div className="w-full max-w-350 mx-auto relative aspect-square md:aspect-21/9 lg:aspect-3/1 rounded-[16px] overflow-hidden group border border-white/10 shadow-xl">
            {data.image?.url && (
              <Image
                src={getImageUrl(data.image.url)}
                alt={data.title || "Why work with us"}
                fill
                className="object-cover"
                unoptimized
              />
            )}

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Overlapping Cards (Scaled Down Sizing, Padding, and Gaps) */}
          <div className="w-full px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 relative z-20 -mt-12 md:-mt-16 lg:-mt-24">
            {data.lists?.map((item: any, index: number) => (
              <div
                key={item.id}
                className="group relative w-full h-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 hover:border-[#2F85EA]/50 transition-all duration-500 rounded-[20px] p-6 flex flex-col gap-6 min-h-[160px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(47,133,234,0.2)]"
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-linear-to-br from-[#3445E7]/20 to-[#07D6F3]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500 group-hover:bg-[#2F85EA]/20 group-hover:border-[#2F85EA]/30 shadow-md">
                    {item.icon?.url && (
                      <Image
                        src={getImageUrl(item.icon.url)}
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>

                  <span className="text-white/5 group-hover:text-white/20 transition-colors font-black text-4xl leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-white/60 group-hover:text-white/95 transition-colors text-sm lg:text-[15px] leading-relaxed relative z-10 font-medium mt-auto">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
