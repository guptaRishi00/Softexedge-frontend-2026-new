import { getImageUrl } from "@/utils/get-image-url";

export default function SelectedWorks({ data }: any) {
  if (!data) return null;

  const { title, description, video } = data;

  // Split title: "Selected" (white) and "Works" (blue gradient)
  const words = title?.split(" ") || [];
  const firstPart = words[0] || "Selected";
  const highlightWord = words[1] || "Works";

  return (
    <section className="w-full bg-black overflow-hidden p-8 lg:p-20 text-white rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="w-full mx-auto flex flex-col items-center gap-16">
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-2xl">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight uppercase leading-tight">
            {firstPart}{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              {highlightWord}
            </span>
          </h2>
          <p className="text-white/60 text-lg lg:text-xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="w-full aspect-video relative rounded-[10px] lg:rounded-[20px] overflow-hidden shadow-2xl bg-zinc-900 group">
          {video?.url ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={getImageUrl(video.url)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-700 font-bold uppercase tracking-widest">
              Video Showcase Coming Soon
            </div>
          )}

          {/* Interactive Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>
    </section>
  );
}
