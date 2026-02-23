"use client";

import Image from "next/image";

export default function AboutHeroSection({ data }: any) {
  if (!data) return null;

  // Split title: "Design That" (titleOne) and "Demands Attention" (titleTwo)
  const titleParts = data.title.split("\n") || data.title.split(" ");
  const titleOne = titleParts.slice(0, 1).join(" ");
  const titleTwo = titleParts.slice(1).join(" ");
  const images = data.images || [];

  return (
    <section className="w-full flex flex-col md:flex-row lg:min-h-[96.5vh] items-center justify-between p-8 md:p-16 gap-12 bg-white">
      {/* Left Side: Text Content */}
      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[1.1] font-bold text-[#04034C] max-w-lg">
          {titleOne}{" "}
          <span className="block md:inline bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
            {titleTwo}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-black/80 max-w-md leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Right Side: Staggered Bento Grid */}
      <div className="grid grid-cols-12 gap-4 w-full lg:w-1/2 max-w-2xl">
        {/* Row 1: 5-span Left, 7-span Right */}
        <div className="col-span-5 relative h-[200px] md:h-[200px] overflow-hidden rounded-[20px] shadow-sm">
          {images[0] && (
            <Image
              unoptimized
              src={images[0].url}
              alt={images[0].name || "Hero image 1"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
        <div className="col-span-7 relative h-[200px] md:h-[200px] overflow-hidden rounded-[20px] shadow-sm">
          {images[1] && (
            <Image
              unoptimized
              src={images[1].url}
              alt={images[1].name || "Hero image 2"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        {/* Row 2: 7-span Left, 5-span Right */}
        <div className="col-span-7 relative h-[200px] md:h-[200px] overflow-hidden rounded-[20px] shadow-sm">
          {images[2] && (
            <Image
              unoptimized
              src={images[2].url}
              alt={images[2].name || "Hero image 3"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
        <div className="col-span-5 relative h-[200px] md:h-[200px] overflow-hidden rounded-[20px] shadow-sm">
          {images[3] && (
            <Image
              unoptimized
              src={images[3].url}
              alt={images[3].name || "Hero image 4"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
      </div>
    </section>
  );
}
