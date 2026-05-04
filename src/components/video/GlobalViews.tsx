"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function GlobalViews({ data }: any) {
  if (!data) return null;

  const { title, modules, image } = data;

  // Split title logic
  const words = title?.split(" ") || [];
  const highlightPart = words[0];
  const mainTitle = words.slice(1).join(" ");

  return (
    <section className="w-full bg-white py-14 lg:py-12 px-6 lg:px-10 overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-10 lg:gap-12">
        {/* Header: Scaled down text and spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
            <span className="bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent inline-block mb-1 md:mb-0">
              {highlightPart}
            </span>
            <br className="hidden md:block" />
            <span className="text-black">{mainTitle}</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#2F85EA] rounded-full shrink-0 shadow-sm" />
        </div>

        {/* Main Content Layout: Scaled Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* LEFT: Scaled Dashboard-Style Metric Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            {modules?.map((module: any, index: number) => (
              <div
                key={module.id}
                className="group relative p-5 md:p-6 rounded-[24px] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-[0_15px_30px_-10px_rgba(47,133,234,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2F85EA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <span className="min-w-[80px] text-4xl lg:text-5xl font-black text-black tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3445E7] group-hover:to-[#07D6F3] transition-all duration-300">
                    {module.count}
                  </span>

                  {/* Subtle divider line on desktop */}
                  <div className="hidden sm:block w-px h-8 bg-gray-200 group-hover:bg-[#2F85EA]/20 transition-colors" />

                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Scaled Dynamic Image Container */}
          <div className="lg:col-span-7 relative w-full aspect-square lg:aspect-auto lg:min-h-[400px] rounded-[24px] overflow-hidden group shadow-md">
            {image?.url && (
              <>
                <Image
                  src={getImageUrl(image.url)}
                  alt="Global Views Showcase"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  unoptimized
                />
                {/* Inner glass border */}
                <div className="absolute inset-0 border-[4px] border-white/20 rounded-[24px] z-10 pointer-events-none mix-blend-overlay" />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
