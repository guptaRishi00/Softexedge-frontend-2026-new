"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function GlobalViews({ data }: any) {
  if (!data) return null;

  const { title, modules, image } = data;

  const words = title?.split(" ") || [];
  const highlightPart = words[0];
  const mainTitle = words.slice(1).join(" ");

  return (
    <section className="w-full bg-white py-14 lg:py-20 px-6 lg:px-16 overflow-hidden rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-14">
          <div className="space-y-3">
            <h2 className="text-5xl lg:text-[72px] font-extrabold tracking-tighter uppercase leading-[0.95]">
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                {highlightPart}
              </span>
              <br />
              <span className="text-black">{mainTitle}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {modules?.map((module: any, index: number) => (
              <div
                key={module.id}
                className={`flex items-start gap-6 border-l-2 pl-6 transition-colors duration-300 ${index === 0 ? "border-[#3445E7]" : "border-gray-100"
                  }`}
              >
                <div className="min-w-[70px]">
                  <span
                    className={`text-2xl lg:text-3xl font-bold tracking-tight ${index === 0 ? "text-[#3445E7]" : "text-gray-300"
                      }`}
                  >
                    {module.count}
                  </span>
                </div>

                <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-sm">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[1/1] rounded-[20px] overflow-hidden shadow-xl bg-gray-100 scale-[0.97]">
          {image?.url && (
            <Image
              src={getImageUrl(image.url)}
              alt="Global Views Showcase"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              unoptimized
            />
          )}
        </div>
      </div>
    </section>
  );
}