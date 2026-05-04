"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";

export default function BrandingTestimonial({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  if (!data) return null;

  const { title, description, cards } = data;
  const totalCards = cards?.length || 0;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 >= totalCards ? 0 : prev + 1));
  }, [totalCards]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalCards - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000); // Slightly slower auto-play
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const words = title?.split(" ") || [];
  const firstPart = words.slice(0, -1).join(" ");
  const highlightWord = words[words.length - 1];

  return (
    <section className="p-3">
      <div
        className="w-full bg-black py-12 lg:py-16 px-6 lg:px-12 text-white overflow-hidden rounded-[20px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full mx-auto flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* LEFT SIDE: HEADER & NAVIGATION (Scaled) */}
          <div className="w-full lg:w-[30%] flex flex-col justify-between gap-8 z-10 bg-black">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                {firstPart}{" "}
                <span className="block bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                  {highlightWord}
                </span>
              </h2>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-xs">
                {description}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                <MdChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                <MdChevronRight />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: CAROUSEL (Scaled) */}
          <div className="flex-1 relative overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{
                x: `-${currentIndex * (100 / (totalCards > 1 ? 2 : 1))}%`,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ width: `${(totalCards / 2) * 100}%` }}
            >
              {cards?.map((card: any) => (
                <div
                  key={card.id}
                  className="w-full lg:w-[calc(50%-10px)] flex-shrink-0 bg-zinc-900/30 border border-white/5 rounded-[24px] p-6 md:p-8 flex flex-col justify-between gap-8 group hover:bg-zinc-900/50 transition-colors duration-500"
                >
                  <div className="flex justify-end">
                    <div className="relative w-8 h-6 opacity-10 group-hover:opacity-30 transition-opacity">
                      <svg
                        width="32"
                        height="24"
                        viewBox="0 0 40 32"
                        fill="currentColor"
                      >
                        <path d="M0 18.6667C0 8.33333 7.33333 0 16 0V6.66667C11.3333 6.66667 9.33333 10 9.33333 13.3333H16V32H0V18.6667ZM24 18.6667C24 8.33333 31.3333 0 40 0V6.66667C35.3333 6.66667 33.3333 10 33.3333 13.3333H40V32H24V18.6667Z" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl font-medium leading-relaxed italic text-white/90">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-3">
                    {card.image?.url && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                        <Image
                          src={getImageUrl(card.image.url)}
                          alt={card.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-base font-bold text-white uppercase tracking-wide">
                        {card.name}
                      </h4>
                      <p className="text-[11px] font-bold text-[#3445E7] uppercase tracking-widest">
                        {card.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
