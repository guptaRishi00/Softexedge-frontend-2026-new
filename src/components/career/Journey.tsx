import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function Journey({ data }: any) {
  if (!data) return null;

  // Splitting title to highlight "Journey" in blue as per design
  const title = data.title || "The Journey to Joining";
  const titleParts = title.split(" ");
  const firstPart = titleParts.slice(0, 1).join(" "); // "The"
  const middlePart = titleParts.slice(1, 2).join(" "); // "Journey"
  const lastPart = titleParts.slice(2).join(" "); // "to Joining"

  return (
    <section className="w-full bg-black py-12 lg:py-16 px-6 lg:px-16 overflow-hidden rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="w-full mx-auto flex flex-col items-center lg:gap-20">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-20 text-center tracking-tight">
          {firstPart}{" "}
          <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
            {middlePart}
          </span>{" "}
          {lastPart}
        </h2>

        {/* Steps Container */}
        <div className="relative w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
          {data.cards?.map((step: any, index: number) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center md:w-1/4 px-4"
            >
              <div className="w-24 h-24 bg-[#1A1A1A] border border-white/5 rounded-[24px] flex items-center justify-center mb-8 shadow-xl transition-transform duration-300">
                {step.icon?.url && (
                  <div className="relative w-10 h-10">
                    <Image
                      src={getImageUrl(step.icon.url)}
                      alt={step.title}
                      fill
                      className="object-contain "
                    />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-white text-sm lg:text-xs leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
