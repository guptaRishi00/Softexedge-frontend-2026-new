import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function Culture({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 lg:px-12 rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-black tracking-tight">
            {data.title}
          </h2>
          <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-2xl">
            {data.description}
          </p>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards?.map((card: any) => (
            <div
              key={card.id}
              className="group relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl"
            >
              {/* Background Image */}
              {card.icon?.url && (
                <Image
                  src={getImageUrl(card.icon.url)}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700"
                  unoptimized
                />
              )}

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 " />

              {/* Card Text Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm lg:text-base leading-snug">
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
