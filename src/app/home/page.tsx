import AboutUs from "@/components/home/AboutUs";
import Brands from "@/components/home/Brands";
import HeroSectionHome from "@/components/home/HeroSectionHome";
import Video from "@/components/home/Video";
import { getGlobalData, getHomepageData } from "@/loader/data";

export default async function Home({}: any) {
  const globalResponse = await getGlobalData();

  const headerData = globalResponse.data.blocks.find(
    (block: any) => block.__component === "layouts.header",
  );

  const response = await getHomepageData();

  const heroSectionData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.herosection",
  );

  const brandsData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.brands",
  );

  const aboutdata = response.data.blocks.find(
    (block: any) => block.__component === "homepage.about-us",
  );

  const videoData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.video",
  );

  return (
    <div className="p-3 space-y-5">
      <HeroSectionHome data={heroSectionData} headerData={headerData} />
      <Brands data={brandsData} />
      <AboutUs data={aboutdata} />
      <Video data={videoData} />
    </div>
  );
}
