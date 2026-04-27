"use client";

import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function SelectedWorksUiux({ data }: any) {
  if (!data) return null;

  const { title, description, cards } = data;

  const words = title?.split(" ") || [];
  const firstPart = words[0];
  const highlightWord = words[1];

  return (
    <section className="w-full bg-black rounded-[20px] py-16 lg:py-24 px-6 lg:px- text-white mt-10 scale-[0.97] origin-top">
      <div className="w-full mx-auto flex flex-col gap-12 lg:gap-20">
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-[72px] font-extrabold tracking-tighter uppercase leading-none">
            {firstPart}{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              {highlightWord}
            </span>
          </h2>

          <p className="text-white/60 text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-16">
          {cards?.map((card: any) => (
            <Link
              key={card.id}
              href={card.href || "#"}
              target="_blank"
              className="group flex flex-col gap-6 w-full md:w-[calc(50%-20px)] scale-[0.97]"
            >
              <div className="relative aspect-[16/10] rounded-[30px] overflow-hidden bg-zinc-900 shadow-xl">
                {card.image?.url && (
                  <Image
                    src={card.image.url}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 "
                    unoptimized
                  />
                )}

                <div className="absolute bottom-6 left-6 flex gap-2">
                  {card.tags?.map((tag: any) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/90"
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 px-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>

                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <MdArrowOutward className="text-xl" />
                  </div>
                </div>

                <p className="text-white/40 text-base lg:text-lg leading-relaxed max-w-md">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
