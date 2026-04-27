import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getImageUrl } from "@/utils/get-image-url";

export default function Herosection({ data }: any) {
  const { title, description, images } = data || {};

  const words = title?.split(" ") || [];
  const firstPart = words.slice(0, 2).join(" ");
  const secondPart = words.slice(2).join(" ");

  const [imageOne, imageTwo, imageThree, imageFour] =
    images?.map((img: any) => img.image) || [];

  console.log(imageFour?.url);

  return (
    <section className="w-full bg-white px-6 md:px-10 lg:px-16 py-10 lg:py-20">
      <div className="w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col leading-tight">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#04034C]">
              {firstPart}
            </h1>

            <h1 className="text-4xl md:text-6xl lg:text-7xl lg:max-w-sm font-extrabold bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              {secondPart}
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xl">
            {description}
          </p>

          <Link
            href="/contact"
            className="inline-block w-fit px-6 py-3 rounded-full bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white font-medium hover:opacity-90 transition"
          >
            Open Positions
          </Link>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-3 auto-rows-[140px] md:auto-rows-[160px] lg:auto-rows-[150px] gap-4">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl relative">
            <Image
              src={imageOne?.url || ""}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="overflow-hidden rounded-2xl relative">
            <Image
              src={imageTwo?.url || ""}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Blue Card */}
          <div className="rounded-2xl bg-linear-to-r from-[#3445E7] to-[#07D6F3] text-white flex flex-col items-start justify-end text-center p-6">
            <h2 className="text-2xl md:text-3xl font-bold">10+</h2>
            <p className="text-xs md:text-sm font-medium tracking-wide">
              CLIENT COUNTRIES
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl relative">
            <Image
              src={imageThree?.url || ""}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="col-span-2 overflow-hidden rounded-2xl relative">
            <Image
              src={getImageUrl(imageFour?.url) || ""}
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
