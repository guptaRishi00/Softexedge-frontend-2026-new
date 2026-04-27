"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function KineticProcess({ data }: any) {
  if (!data) return null;

  const { title, description, cards } = data;

  const titleWords = title.split(" ");
  const highlightWord = "KINETIC";

  return (
    <section className="w-full bg-black rounded-[20px] p-10 lg:p-20 text-white mt-10 scale-[0.97] origin-top">
      <div className="w-full mx-auto flex flex-col gap-16 lg:gap-24">
        {/* HEADER SECTION */}
        <div className="space-y-6">
          <h2 className="text-5xl lg:text-[84px] font-extrabold uppercase leading-[1.05] tracking-tighter">
            {titleWords.map((word: string, i: number) => (
              <span key={i}>
                {word.toUpperCase() === highlightWord ? (
                  <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                    {word}{" "}
                  </span>
                ) : (
                  <span>{word} </span>
                )}
              </span>
            ))}
          </h2>

          <p className="text-white/60 text-lg lg:text-xl max-w-xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* PROCESS CARDS FLEX */}
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-12 lg:gap-0">
          {cards?.map((card: any, index: number) => (
            <div
              key={card.id}
              className={`flex flex-col gap-8 relative 
              w-full md:w-[calc(50%-24px)] lg:w-1/4
              px-0 lg:px-8 first:pl-0 last:pr-0
              ${index !== cards.length - 1 ? "lg:border-r lg:border-white/10" : ""}
              scale-[0.96] origin-top`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#111111] rounded-2xl flex items-center justify-center border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-105">
                {card.icon?.url && (
                  <div className="relative w-7 h-7">
                    <Image
                      src={getImageUrl(card.icon.url)}
                      alt={card.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed lg:max-w-[220px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
