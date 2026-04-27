import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function VideoBlueprint({ data }: any) {
  if (!data) return null;

  const { title, description, cards } = data;

  // Split title to highlight "BLUEPRINT" in blue gradient
  const words = title?.split(" ") || [];
  const firstPart = words[0];
  const highlightWord = words[1];

  return (
    <section className="w-full bg-black rounded-[32px] py-16 lg:py-24 px-8 lg:px-20 text-white mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-20">
        {/* HEADER SECTION */}
        <div className="space-y-6">
          <h2 className="text-5xl lg:text-[84px] font-bold uppercase tracking-tighter leading-tight">
            {firstPart}{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              {highlightWord}
            </span>
          </h2>
          <p className="text-white/60 text-lg lg:text-xl font-medium max-w-xl">
            {description}
          </p>
        </div>

        {/* PROCESS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards?.map((card: any) => (
            <div
              key={card.id}
              className="bg-[#1A1A1A] rounded-[24px] p-8 lg:p-10 flex flex-col gap-6 transition-all duration-300 hover:bg-[#222222] border border-white/5 hover:border-white/10 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {card.icon?.url && (
                  <div className="relative w-full h-full">
                    <Image
                      src={getImageUrl(card.icon.url)}
                      alt={card.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="text-white/50 text-base leading-relaxed">
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
