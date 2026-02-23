import Image from "next/image";

export default function Impact({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full my-10 bg-white">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 px-6">
        {data.title}
      </h2>

      {/* Stats Section */}
      <div className="flex items-center gap-80 mb-20 px-24 w-full justify-center">
        {data.counts?.map((count: any) => (
          <div key={count.id} className="flex flex-col items-start">
            <div className="flex items-end gap-2">
              <span className="text-7xl md:text-9xl font-bold text-black">
                {count.number}
              </span>
              <span className="font-medium md:text-7xl bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                +
              </span>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mt-4 font-medium">
              {count.title}
            </p>
          </div>
        ))}
      </div>

      {/* Cards Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.cards?.map((card: any) => (
          <div
            key={card.id}
            className="relative h-[400px] md:h-[450px] rounded-[20px] overflow-hidden group shadow-lg"
          >
            {/* Background Image with Overlay */}
            <Image
              src={card.background.url}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Card Content */}
            <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-between items-start">
              {/* Icon Container */}
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="relative w-8 h-8">
                  <Image
                    src={card.icon.url}
                    alt={`${card.title} icon`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Text Information */}
              <div className="max-w-md">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
