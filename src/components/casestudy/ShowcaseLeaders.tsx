"use client";

import React from "react";
import LogoLoop from "@/components/home/LogoLoop";
import { getImageUrl } from "@/utils/get-image-url";

export default function ShowcaseLeaders({ data }: any) {
  if (!data) return null;

  const logos = data.image?.map((imgItem: any) => ({
    src: getImageUrl(imgItem.image?.url),
    alt: "Brand Logo",
  })) || [];

  const title = data.title || "Showcase your brand among a curated selection of Global Industry Leaders";

  const renderTitle = () => {
    const highlight = "Global Industry Leaders";
    if (title.includes(highlight)) {
      const parts = title.split(highlight);
      return (
        <>
          {parts[0]}
          <br className="hidden lg:block" />
          <span className="text-[#2F85EA]">{highlight}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-10 overflow-hidden rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="w-full mx-auto flex flex-col gap-10 lg:gap-14 items-center">
        <h2 className="text-3xl lg:text-[44px] font-[900] tracking-tight text-center max-w-4xl mx-auto text-[#1F1F1F] leading-snug">
          {renderTitle()}
        </h2>

        <div className="w-full mt-4 lg:mt-6 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 flex justify-center">
          {logos.length > 0 ? (
            <LogoLoop
              logos={logos}
              speed={40}
              gap={100}
              logoHeight={40}
            />
          ) : (
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 text-xl lg:text-[28px] font-bold text-gray-400/80">
              <span>Aqualog</span>
              <span>Beanpole</span>
              <span>Neurolinq</span>
              <span>Socle RH</span>
              <span>TRAUL</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}