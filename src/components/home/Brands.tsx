import LogoLoop, { LogoItem } from "./LogoLoop";

export default function Brands({ data }: any) {
  const formattedLogos: LogoItem[] = data.logos.map((logo: any) => ({
    src: `${logo.url}`,
    alt: logo.name || "Brand logo",
  }));

  return (
    <div className="py-20 bg-background space-y-20">
      <p className="text-3xl text-center text-[#111212] font-medium">
        {data.title}
      </p>

      <LogoLoop
        logos={formattedLogos}
        speed={50}
        gap={80}
        logoHeight={40}
        fadeOut={true}
        pauseOnHover={true}
      />
    </div>
  );
}
