"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function WhyWork({ data }: any) {
  if (!data) return null;

  return (
    <section className="p-3">
      {/* Traditional Box Layout */}
      <div className="w-full bg-black py-16 lg:py-10 px-6 lg:px-10 rounded-[20px] overflow-hidden">
        <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Content & Features */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                {data.title}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                {data.description}
              </p>
            </div>

            {/* Traditional Vertical List */}
            <div className="flex flex-col gap-6">
              {data.lists?.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/[0.08]"
                >
                  {/* Standard Icon Sizing */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon?.url && (
                      <Image
                        src={getImageUrl(item.icon.url)}
                        alt=""
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[#2B6CF2] font-mono text-xs font-bold uppercase tracking-widest">
                      Feature {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Traditional Image Block */}
          <div className="relative w-full aspect-square md:aspect-4/3 lg:h-165 rounded-[20px] overflow-hidden shadow-2xl border border-white/5">
            {data.image?.url && (
              <Image
                src={getImageUrl(data.image.url)}
                alt={data.title || "Why work with us"}
                fill
                className="object-cover"
                unoptimized
              />
            )}

            {/* Simple Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
