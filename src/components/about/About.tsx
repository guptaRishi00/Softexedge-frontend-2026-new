import Image from "next/image";
import Link from "next/link";

export default function About({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full bg-black overflow-hidden p-8 lg:p-10 text-white rounded-[20px] scale-[0.97] origin-top mt-5">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content Side */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-18">
            <h2 className="text-4xl lg:text-6xl font-bold">{data.title}</h2>
            <h3 className="text-2xl lg:text-3xl font-medium">
              {data.second_title}
            </h3>
          </div>

          <div className="flex flex-col gap-6 text-lg text-gray-300 max-w-xl leading-relaxed">
            <p>{data.description_one}</p>
            <p>{data.description_two}</p>
          </div>

          {data.cta && (
            <Link
              href={`/${data.cta.href}`}
              className="w-fit font-medium px-10 py-4 rounded-full bg-white text-black shadow-lg 
  hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] 
  hover:text-white
  transition-all duration-200 ease-in-out"
            >
              {data.cta.text}
            </Link>
          )}
        </div>

        {/* Right Image Side */}
        <div className="flex-1 w-full aspect-square lg:aspect-auto lg:h-[550px] relative rounded-[32px] overflow-hidden">
          <Image
            src={data.image.url}
            alt={data.image.name || "About SoftEXedge"}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
