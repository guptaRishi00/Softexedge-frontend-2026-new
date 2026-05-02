"use client";

import Image from "next/image";
import Link from "next/link";

export default function Design({ data }: any) {
  if (!data) return null;

  const { title, description, image, cta } = data;

  const words = title?.split(" ") || [];
  const mainTitle = words.slice(0, 2).join(" ");
  const highlightWord = words.slice(2).join(" ");

  return (
    <section className="w-full bg-black overflow-hidden px-6 lg:px-16 py-12 lg:py-16 rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-26">
        {/* LEFT: IMAGE CARD */}
        <div className="flex-1 relative w-full max-w-205">
          <div className="relative rounded-[28px] p-0.75 bg-linear-to-br from-white/10 to-white/0 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <div className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] rounded-[30px] overflow-hidden bg-[#0A0A0A]">
              {image?.url && (
                <Image
                  src={image.url}
                  alt={image.name || "Design with Soul"}
                  fill
                  className="object-cover grayscale"
                  unoptimized
                />
              )}

              {/* SUBTLE INNER GLOW */}
              <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-black/20" />
            </div>
          </div>

          {/* FLOATING STAT CARD */}
          <div className="absolute -bottom-6 right-6 lg:-right-10 backdrop-blur-2xl border border-white/10 px-6 py-4 lg:px-8 lg:py-6 rounded-2xl shadow-2xl">
            <p className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              98%
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/70 mt-1">
              Client Success Rate
            </p>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="space-y-5">
            <h2 className="text-4xl md:text-6xl text-white lg:text-8xl font-bold leading-[1.1] tracking-tight">
              {mainTitle}
              <span className="block bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                {highlightWord}
              </span>
            </h2>

            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
              {description}
            </p>
          </div>

          {cta && (
            <Link
              href={`/${cta.href}`}
              className="w-fit px-8 py-3 rounded-full font-medium text-base bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white transition-all duration-300 hover:opacity-90"
            >
              {cta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
