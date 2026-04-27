"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrandingHero({ data }: any) {
  if (!data) return null;

  const { title, description, images, ctas } = data;

  // Split title: "Branding Built for" and "Growth"
  const words = title?.split(" ") || [];
  const mainTitle = words.slice(0, -1).join(" ");
  const highlightWord = words[words.length - 1];

  const [imageOne, imageTwo, imageThree] =
    images?.map((img: any) => img.image) || [];

  return (
    <section className="relative w-full bg-white px-6 md:px-10 lg:px-16 py-10 lg:py-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="relative z-10 w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-[84px] leading-[1.1] font-extrabold text-black">
              {mainTitle}{" "}
              <span className="block md:inline bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                {highlightWord}
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-500 max-w-md leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-4">
            {ctas?.map((cta: any, index: number) => (
              <Link
                key={cta.id}
                href={`/${cta.href}`}
                className={`px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  index === 0
                    ? "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white hover:shadow-xl hover:shadow-blue-500/20"
                    : "border border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {cta.text}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: CUSTOM 3-IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px] lg:h-[500px] w-full max-w-2xl ml-auto">
          {/* Large Vertical Image (Left) */}
          <div className="relative h-full rounded-[30px] overflow-hidden shadow-2xl">
            {imageOne && (
              <Image
                src={imageOne.url}
                alt={imageOne.name || "Branding Showcase 1"}
                fill
                className="object-cover"
                unoptimized
              />
            )}
          </div>

          {/* Stacked Images (Right) */}
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative rounded-[40px] overflow-hidden shadow-xl">
              {imageTwo && (
                <Image
                  src={imageTwo.url}
                  alt={imageTwo.name || "Branding Showcase 2"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              )}
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-xl bg-[#040714]">
              {imageThree && (
                <Image
                  src={imageThree.url}
                  alt={imageThree.name || "Branding Showcase 3"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
