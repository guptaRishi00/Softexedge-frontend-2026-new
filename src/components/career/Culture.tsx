import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function Culture({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 lg:px-12 rounded-[20px]">
      <div className="w-full max-w-screen-2xl mx-auto">
        {/* Redesigned Header: Split Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-black/5 pb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter max-w-2xl leading-[0.9]">
            {data.title}
          </h2>
          <p className="text-gray-500 text-lg lg:text-xl max-w-md leading-relaxed font-medium">
            {data.description}
          </p>
        </div>

        {/* Culture Cards: Staggered Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {data.cards?.map((card: any, index: number) => (
            <div
              key={card.id}
              // Stagger every second item down on large screens to create a dynamic wave layout
              className={`group flex flex-col gap-6 ${
                index % 2 !== 0 ? "lg:mt-16" : ""
              }`}
            >
              {/* Image Container - Floating minimalist style */}
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-50 shadow-sm border border-black/5">
                {card.icon?.url && (
                  <Image
                    src={getImageUrl(card.icon.url)}
                    alt={card.title}
                    fill
                    className="object-cover transition-all duration-700"
                    unoptimized
                  />
                )}

                {/* Floating Index Badge */}
              </div>

              {/* Text Content - Detached below the image */}
              <div className="px-2 flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-black flex justify-between items-center group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                  {/* Decorative arrow that appears on hover */}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
