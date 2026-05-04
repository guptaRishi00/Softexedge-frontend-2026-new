import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function Impact({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-16 lg:py-0 px-6 lg:px-0 overflow-hidden rounded-[20px] ">
      <div className="w-full mx-auto flex flex-col gap-16 lg:gap-24">
        {/* Header & Stats Block */}
        <div className="flex flex-col gap-12 lg:gap-16 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black tracking-tight text-center md:text-left">
            {data.title || "Our Impact"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 text-center">
            {data.counts?.map((count: any, index: number) => (
              <div
                key={count.id || index}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex items-end justify-center">
                  <span className="text-[90px] lg:text-[200px] font-extrabold text-black leading-none tracking-tighter">
                    {count.number}
                  </span>
                  <span className="text-[60px] lg:text-[90px] font-bold text-[#2F85EA] leading-none ml-2">
                    +
                  </span>
                </div>
                <p className="text-lg md:text-3xl font-medium text-black mt-4 lg:mt-6">
                  {count.text || count.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.cards?.map((card: any) => (
            <div
              key={card.id}
              className="relative w-full aspect-[2/3] md:aspect-[1.9] rounded-[20px] overflow-hidden group bg-zinc-900"
            >
              {/* Background Image */}
              {card.background?.url && (
                <Image
                  src={getImageUrl(card.background.url)}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              )}

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />

              {/* Card Content */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between z-10">
                {/* Top Icon Pill */}
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 origin-left">
                  {card.icon?.url && (
                    <div className="relative w-7 h-7 lg:w-8 lg:h-8">
                      <Image
                        src={getImageUrl(card.icon.url)}
                        alt=""
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  )}
                </div>

                {/* Bottom Text */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
