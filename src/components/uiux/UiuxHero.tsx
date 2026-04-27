import Link from "next/link";

export default function UiuxHero({ data }: any) {
  if (!data) return null;

  const { title, description, ctas } = data;

  // Split title to position "Attention" on its own line as seen in the image
  const words = title?.split(" ") || [];
  const mainTitle = words.slice(0, 3).join(" "); // "Design That Demands"
  const highlightWord = words.slice(3).join(" "); // "Attention"

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 lg:py-20 overflow-hidden bg-white scale-[0.97] origin-top">
      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center gap-10">
        <h1 className="text-5xl md:text-7xl lg:text-[100px] font-extrabold text-black leading-[1.05] tracking-tighter">
          <span className="block mb-2">{mainTitle}</span>
          <span className="block bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
            {highlightWord}
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 max-w-3xl leading-relaxed font-medium">
          {description}
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
          {ctas?.map((cta: any, index: number) => (
            <Link
              key={cta.id}
              href={`/${cta.href}`}
              className={`px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 ${
                index === 0
                  ? "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white"
                  : "border-2 border-black/10 text-black hover:bg-gray-50"
              }`}
            >
              {cta.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
