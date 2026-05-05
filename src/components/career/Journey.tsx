"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function Journey({ data }: any) {
  if (!data) return null;

  // Splitting title to highlight the second word dynamically
  const title = data.title || "The Journey to Joining";
  const titleParts = title.split(" ");
  const firstPart = titleParts.slice(0, 1).join(" ");
  const middlePart = titleParts.slice(1, 2).join(" ");
  const lastPart = titleParts.slice(2).join(" ");

  return (
    <section className="p-3">
      {/* PARENT STYLES PRESERVED EXACTLY */}
      <div className="w-full bg-black py-12 lg:py-20 lg:px-15 px-6 overflow-hidden rounded-[20px]">
        <div className="w-full mx-auto flex flex-col gap-12 lg:gap-20">
          {/* Header: Traditional Left-Aligned Editorial Style */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 border-b border-white/10 pb-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white">
              {firstPart}
              <span className="text-[#2F85EA]"> {middlePart} </span>
              {lastPart}
            </h2>
            {data.description && (
              <p className="text-white/50 text-base md:text-lg lg:text-xl max-w-sm leading-relaxed font-medium lg:pt-10">
                {data.description}
              </p>
            )}
          </div>

          {/* Connected Grid: Traditional Structural Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {data.cards?.map((step: any, index: number) => (
              <div
                key={step.id}
                className="group relative p-8 lg:p-10 border-r border-b border-white/10 flex flex-col gap-12 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                {/* Meta Information: Traditional Numbering */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl lg:text-5xl font-black font-mono text-white/5 group-hover:text-[#2F85EA] transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {step.icon?.url && (
                    <div className="w-10 h-10 relative opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={getImageUrl(step.icon.url)}
                        alt={step.title}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 transition-all"
                        unoptimized
                      />
                    </div>
                  )}
                </div>

                {/* Content Block */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                    {step.title}
                  </h3>
                  {/* Subtle underline that grows on hover */}
                  <div className="h-0.5 w-8 bg-[#2F85EA] group-hover:w-full transition-all duration-500" />
                  <p className="text-white/40 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Footer Indicator */}
          <div className="flex justify-center md:justify-start">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] flex items-center gap-4">
              <div className="w-8 h-px bg-white/10" />
              Standard Process Workflow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
