import Image from "next/image";
import { getImageUrl } from "@/utils/get-image-url";

export default function WhyWork({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full bg-black rounded-[20px] overflow-hidden mt-10 scale-[0.97] origin-top">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 p-8 lg:p-20">
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-1/2 aspect-[4/3] lg:h-[500px] relative rounded-[32px] overflow-hidden shadow-2xl">
          <Image
            src={data.image?.url || "/images/team-meeting.jpg"}
            alt="Why work with us"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Right Side: Content Container */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-7xl font-bold text-white leading-tight">
              {data.title}
            </h2>
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

          {/* Feature Lists */}
          <div className="flex flex-col gap-6">
            {data.lists?.map((item: any) => (
              <div key={item.id} className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-2.5">
                  {item.icon?.url && (
                    <Image
                      src={getImageUrl(item.icon.url)}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                </div>
                <p className="text-white/80 text-lg leading-snug pt-1 max-w-md">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
