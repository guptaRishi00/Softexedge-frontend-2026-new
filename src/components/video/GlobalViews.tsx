"use client";

import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function GlobalViews({ data }: any) {
  if (!data) return null;

  const { title, modules, image } = data;

  // Split title: "500M+" (gradient) and "GLOBAL VIEWS" (navy)
  const words = title?.split(" ") || [];
  const highlightPart = words[0]; // 500M+
  const mainTitle = words.slice(1).join(" "); // GLOBAL VIEWS

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* LEFT COLUMN: CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-6xl lg:text-[90px] font-extrabold tracking-tighter uppercase leading-[0.95]">
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                {highlightPart}
              </span>
              <br />
              <span className="text-[#04034C]">{mainTitle}</span>
            </h2>
          </div>

          {/* STATS LIST */}
          <div className="flex flex-col gap-10">
            {modules?.map((module: any, index: number) => (
              <div
                key={module.id}
                className={`flex items-start gap-8 border-l-2 pl-8 transition-colors duration-300 ${
                  index === 0 ? "border-[#3445E7]" : "border-gray-100"
                }`}
              >
                <div className="min-w-[80px]">
                  <span
                    className={`text-3xl lg:text-4xl font-bold tracking-tight ${
                      index === 0 ? "text-[#3445E7]" : "text-gray-300"
                    }`}
                  >
                    {module.count}
                  </span>
                </div>
                <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-sm">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: FEATURED IMAGE */}
        <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl bg-gray-100">
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
