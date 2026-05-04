import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function WhyWork({ data }: any) {
  if (!data) return null;

  return (
    <section className="p-3">
      <div className="w-full bg-black overflow-hidden rounded-[20px]">
        {/* Adjusted padding (py/px) slightly to match the smaller internal scale */}
        <div className="lg:py-12 lg:px-12 px-6 py-10 flex flex-col gap-10 lg:gap-14">
          {/* Top: Split Header (Scaled down text and gaps) */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-2xl">
              {data.title}
            </h2>
            <p className="text-white/60 text-sm lg:text-base max-w-sm leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Bottom: Modern Bento-Style Grid Layout */}
          <div className="flex flex-col xl:flex-row gap-5 items-stretch">
            {/* LEFT: Hero Image (Reduced min-height and border radius) */}
            <div className="relative w-full xl:w-[45%] aspect-square md:aspect-[16/9] xl:aspect-auto xl:min-h-[450px] rounded-[24px] overflow-hidden group">
              <Image
                src={getImageUrl(data.image?.url)}
                alt={data.title || "Why work with us"}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />
            </div>

            {/* RIGHT: Feature Cards Grid (Reduced gap, padding, and heights) */}
            <div className="w-full xl:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5">
              {data.lists?.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="group bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-300 rounded-[24px] p-6 flex flex-col justify-between min-h-[180px]"
                >
                  {/* Card Header: Scaled down Icon + Number */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2B6CF2]/10 flex items-center justify-center shrink-0 border border-[#2B6CF2]/20 group-hover:bg-[#2B6CF2]/20 transition-colors">
                      {item.icon?.url && (
                        <Image
                          src={getImageUrl(item.icon.url)}
                          alt=""
                          width={20}
                          height={20}
                          className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                    </div>
                    <span className="text-white/10 group-hover:text-white/30 transition-colors font-mono text-2xl font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card Body: Scaled down text */}
                  <p className="text-white/70 group-hover:text-white/95 transition-colors text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
