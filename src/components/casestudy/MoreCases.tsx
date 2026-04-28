"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/utils/get-image-url";

export default function MoreCases({ data }: any) {
  if (!data || !data.cards) return null;

  const title = data.title || "MORE CASES";

  const words = title.split(" ");
  const firstWord = words[0];
  const remainingWords = words.slice(1).join(" ");

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-16">
      <div className="w-full mx-auto flex flex-col gap-10 lg:gap-14">

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl lg:text-[64px] font-black uppercase tracking-tight">
            <span className="text-black">{firstWord}</span>{" "}
            <span className="text-[#2F85EA]">{remainingWords}</span>
          </h2>
          <div className="w-14 h-[2px] bg-[#2F85EA]/40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.cards.map((card: any) => (
            <div
              key={card.id}
              className="rounded-[20px] overflow-hidden bg-[#201F1F] group shadow-md"
            >
              {/* IMAGE */}
              <div className="relative w-full aspect-[1.4] overflow-hidden">
                {card.image && (
                  <Image
                    src={getImageUrl(card.image.url)}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                )}
              </div>

              {/* CONTENT BLOCK */}
              <div className="bg-[#201F1F] p-6 lg:p-8 flex flex-col gap-3">
                {card.category && (
                  <span className="text-[#2F85EA] text-[10px] font-bold uppercase tracking-widest">
                    {card.category}
                  </span>
                )}

                <h3 className="text-2xl lg:text-[28px] font-bold text-white tracking-tight">
                  {card.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed max-w-[90%]">
                  {card.description}
                </p>

                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/cases/${card.id}`}
                    className="text-[#2F85EA] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
                  >
                    VIEW CASE STUDY →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}