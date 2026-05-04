import Image from "next/image";
import Link from "next/link";

export default function About({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full bg-black overflow-hidden lg:py-10 lg:px-10 text-white rounded-[20px]">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content Side */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-18">
            <h2 className="text-4xl lg:text-7xl font-bold">{data.title}</h2>
            <h3 className="text-2xl lg:text-5xl max-w-xl font-medium">
              {data.second_title}
            </h3>
          </div>

          <div className="flex flex-col gap-6 text-xl text-gray-300 max-w-2xl leading-relaxed">
            <p>{data.description_one}</p>
            <p>{data.description_two}</p>
          </div>

          {/* {data.cta && (
            <Link
              href={`/${data.cta.href}`}
              className="w-fit font-medium px-10 py-4 rounded-full bg-white text-black shadow-lg hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:text-white transition-all duration-200 ease-in-out"
            >
              {data.cta.text}
            </Link>
          )} */}
        </div>

        {/* Right Image Side */}
        <div className="w-full aspect-square lg:aspect-auto lg:h-[550px] lg:w-[560px] relative rounded-[20px] overflow-hidden">
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
