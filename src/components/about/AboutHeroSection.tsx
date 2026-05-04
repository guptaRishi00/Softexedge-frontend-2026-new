"use client";

import Image from "next/image";

export default function AboutHeroSection({ data }: any) {
  if (!data) return null;

  const titleParts = data.title.split(" ");

  const titleOne = titleParts[0] || "";
  const titleTwo = titleParts.slice(1, 3).join(" ") || "";
  const titleThree = titleParts.slice(3).join("") || "";

  const images = data.images || [];
  console.log("titleTwo:", titleThree);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-12 bg-white lg:-mt-20 min-h-screen">
      {/* Left Side: Text Content */}
      <div className="flex flex-col gap-10 w-full lg:w-1/2 ">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black max-w-xl">
          <span className="block">{titleOne}</span>

          <span className="block">{titleTwo}</span>

          <span className="block bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
            {titleThree}
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-black max-w-md leading-relaxed">
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
