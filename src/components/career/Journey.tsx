import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function Journey({ data }: any) {
  if (!data) return null;

  // Splitting title to highlight the second word dynamically
  const title = data.title || "The Journey to Joining";
  const titleParts = title.split(" ");
  const firstPart = titleParts.slice(0, 1).join(" ");
  const middlePart = titleParts.slice(1, 2).join(" ");
  const lastPart = titleParts.slice(2).join(" ");

  return (
    <section className="p-3">
      {/* Kept parent styles intact */}
      <div className="w-full bg-black py-12 lg:py-15 lg:px-15 px-6 overflow-hidden rounded-[20px]">
        <div className="w-full mx-auto flex flex-col gap-16 lg:gap-20">
          {/* Header - Redesigned to left-aligned editorial style */}
          <div className="text-left lg:text-center w-full max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
              {firstPart}{" "}
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent inline-block">
                {middlePart}
              </span>{" "}
              {lastPart}
            </h2>
            {data.description && (
              <p className="mt-6 text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                {data.description}
              </p>
            )}
          </div>

          {/* Connected Timeline Journey Container */}
          <div className="relative w-full pb-8">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
              {data.cards?.map((step: any, index: number) => (
                <div
                  key={step.id}
                  className="relative group flex flex-col lg:items-center"
                >
                  {/* Glassmorphism Card */}
                  <div className="ml-14 lg:ml-0 lg:mt-10 bg-white/2 group-hover:bg-white/6 border border-white/5 group-hover:border-white/15 backdrop-blur-sm rounded-3xl p-6 md:p-8 w-full flex-1 flex flex-col relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2 ">
                    {/* Large Background Watermark Number */}

                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-white/10 to-transparent p-px mb-6 inline-flex">
                      <div className="w-full h-full bg-zinc-900/80 rounded-2xl flex items-center justify-center backdrop-blur-md">
                        {step.icon?.url && (
                          <div className="relative w-8 h-8">
                            <Image
                              src={getImageUrl(step.icon.url)}
                              alt={step.title}
                              fill
                              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500"
                              unoptimized
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
