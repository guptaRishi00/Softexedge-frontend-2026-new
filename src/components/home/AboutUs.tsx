import Image from "next/image";
import Link from "next/link";

export default function AboutUs({ data }: any) {
  const STRAPI_URL = "http://localhost:1337";
  const imageUrl = data.image.url.startsWith("http")
    ? data.image.url
    : `${STRAPI_URL}${data.image.url}`;

  return (
    <div className="w-full lg:min-h-[96.5vh] h-150 bg-black rounded-[20px] relative overflow-hidden">
      <div className="flex items-center justify-center h-full w-full lg:py-10 lg:px-10 gap-10">
        <div className="flex flex-col items-start justify-between w-full h-full py-8">
          <div className="flex flex-col items-start gap-8">
            <p className="text-white text-5xl font-bold">{data.title}</p>
            <p className="text-white text-lg max-w-xl">{data.description}</p>
            <p className="text-white text-lg max-w-xl">
              {data.second_description}
            </p>
            <Link
              href={`/${data.cta.href}`}
              className="bg-white text-md lg:px-7 lg:py-3 rounded-full hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:text-white transition-colors duration-300"
            >
              {data.cta.text}
            </Link>
          </div>

          <div className="flex items-center w-full gap-18">
            {data.counts.map((count: any, index: number) => (
              <div className="flex flex-col items-start gap-3" key={index}>
                <p className="text-white text-7xl font-medium">
                  {count.number}
                  <span className="text-[#2F85EA] font-medium">+</span>
                </p>
                <p className="text-white text-lg">{count.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full overflow-hidden rounded-[20px]">
          <Image
            src={imageUrl}
            width={800}
            height={800}
            alt={data.title || "About Us Image"}
            unoptimized
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
