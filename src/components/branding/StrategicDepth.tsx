"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function StrategicDepth({ data }: any) {
  if (!data) return null;

  const { title, cards } = data;

  const words = title?.split(" ") || [];
  const firstPart = words[0];
  const highlightWord = words[1];

  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 lg:px-10 overflow-hidden rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="w-full mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl lg:text-[84px] font-bold uppercase text-black">
            {firstPart}{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              {highlightWord}
            </span>
          </h2>
          <div className="w-32 h-1 bg-blue-200/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-8 flex">
            <DepthCard card={cards?.[0]} variant="primary" />
          </div>
          <div className="md:col-span-4 flex">
            <DepthCard card={cards?.[1]} variant="secondary" />
          </div>

          <div className="md:col-span-4 flex">
            <DepthCard card={cards?.[2]} variant="motion" />
          </div>
          <div className="md:col-span-4 flex">
            <DepthCard card={cards?.[3]} variant="branding" />
          </div>

          <div className="md:col-span-4 flex">
            <Link
              href="/services"
              className="w-full bg-black rounded-[20px] p-10 lg:p-12 flex items-center justify-between group transition-all duration-300 hover:bg-[#0A0A0A] shadow-xl"
            >
              <span className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                View All Services
              </span>
              <MdArrowOutward className="text-3xl text-[#2F85EA] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DepthCard({ card, variant }: { card: any; variant: string }) {
  if (!card) return null;

  return (
    <div className="relative w-full bg-black rounded-[20px] p-10 lg:p-12 text-white flex flex-col gap-6 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 group">
      {variant === "primary" && card.bg && (
        <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-40">
          <Image
            src={getImageUrl(card.bg.url)}
            alt=""
            fill
            className="object-cover object-right-top opacity-30"
            unoptimized
          />
        </div>
      )}

      <div className="relative z-10 space-y-6 flex-1 flex flex-col">
        <div className="flex items-center gap-5">
          {(variant === "primary" || variant === "secondary") && card.icon && (
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src={getImageUrl(card.icon.url)}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          )}

          <h3
            className={`text-2xl lg:text-3xl font-bold uppercase tracking-tight ${variant === "secondary" ? "max-w-[300px]" : ""}`}
          >
            {card.title}
          </h3>
        </div>

        <p className="text-white/60 text-lg leading-relaxed max-w-xl font-medium">
          {card.description}
        </p>

        <div className="pt-4 mt-auto">
          {/* Tags for Primary Variant */}
          {variant === "primary" && card.tags?.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {card.tags.map((tag: any) => (
                <span
                  key={tag.id}
                  className="px-5 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white/80"
                >
                  {tag.text}
                </span>
              ))}
            </div>
          )}

          {variant === "motion" && (
            <div className="w-full h-[6px] bg-white/10 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[45%] bg-linear-to-r from-[#3445E7] to-[#07D6F3]" />
            </div>
          )}

          {variant === "branding" && (
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-[#96E5F5] border-2 border-black" />
              <div className="w-12 h-12 rounded-full bg-[#F5C796] border-2 border-black" />
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#3445E7] to-[#2F85EA] border-2 border-black" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
