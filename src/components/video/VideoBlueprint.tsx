"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function VideoBlueprint({ data }: any) {
  if (!data) return null;

  const { title, description, cards } = data;

  const words = title?.split(" ") || [];
  const firstPart = words[0];
  const highlightWord = words[1];

  return (
    <section className="w-full bg-black rounded-[20px] py-14 lg:py-20 px-6 lg:px-10 text-white mt-10 overflow-hidden scale-[0.97] origin-top">
      <div className="w-full mx-auto flex flex-col gap-10 lg:gap-16">
        <div className="space-y-5">
          <h2 className="text-4xl lg:text-[72px] font-bold uppercase tracking-tighter leading-tight">
            {firstPart}{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              {highlightWord}
            </span>
          </h2>

          <p className="text-white/60 text-base lg:text-lg font-medium max-w-xl">
            {description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-6">
          {cards?.map((card: any) => (
            <div
              key={card.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-1/4 bg-[#1A1A1A] rounded-[20px] p-6 lg:p-8 flex flex-col gap-5 transition-all duration-300 hover:bg-[#222222] border border-white/5 hover:border-white/10 group scale-[0.97]"
            >
              <div className="w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {card.icon?.url && (
                  <div className="relative w-full h-full">
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

              <div className="space-y-3">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
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