import Image from "next/image";
import Link from "next/link";

export default function Design({ data }: any) {
  if (!data) return null;

  const { title, description, image, cta } = data;

  const words = title?.split(" ") || [];
  const mainTitle = words.slice(0, 2).join(" ");
  const highlightWord = words.slice(2).join(" ");

  return (
    <section className="w-full bg-black rounded-[20px] overflow-hidden p-8 lg:p-20 text-white mt-10 scale-[0.97] origin-top">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 relative w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-[32px] overflow-hidden group">
          {image?.url && (
            <Image
              src={image.url}
              alt={image.name || "Design with Soul"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
          )}

          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-5 lg:p-8 rounded-3xl shadow-2xl flex flex-col items-start gap-1 z-10">
            <span className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              98%
            </span>
            <span className="text-[10px] lg:text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/80">
              Client Success Rate
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8 lg:gap-10">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-[84px] font-bold leading-[1.1]">
              {mainTitle}{" "}
              <span className="block bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                {highlightWord}
              </span>
            </h2>

            <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {cta && (
            <Link
              href={`/${cta.href}`}
              className="w-fit px-12 py-5 rounded-full font-bold text-lg bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white transition-all duration-300"
            >
              {cta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
