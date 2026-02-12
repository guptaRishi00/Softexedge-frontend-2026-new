import Image from "next/image";

export default function AboutHeroSection({ data }: any) {
  const titleParts = data.title.split(" ");
  const titleOne = titleParts.slice(0, 2).join(" ");
  const titleTwo = titleParts.slice(2).join(" ");

  return (
    <section className="w-full flex flex-col md:flex-row lg:min-h-[96.5vh] items-center justify-between p-8 md:p-16 gap-12 bg-white">
      <div className="flex flex-col gap-16 w-full ">
        <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[1.1] font-bold text-[#04034C] max-w-lg">
          {titleOne}{" "}
          <span className="text-[#3445E7] block md:inline">{titleTwo}</span>
        </h1>

        <p className="text-lg md:text-xl text-[#000000] max-w-md leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-xl md:w-auto">
        {data.images?.map((image: any, index: number) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-[20px] shadow-sm"
          >
            <Image
              unoptimized
              src={image.url}
              alt={image.name || "Hero image"}
              width={300}
              height={220}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
