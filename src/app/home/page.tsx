import AboutUs from "@/components/home/AboutUs";
import Brands from "@/components/home/Brands";
import CaseStudy from "@/components/home/CaseStudy";
import Conversation from "@/components/home/Conversation";
import HeroSectionHome from "@/components/home/HeroSectionHome";
import OurServices from "@/components/home/OurServices";
import Video from "@/components/home/Video";
import WhySoftexedge from "@/components/home/WhySoftexedge";
import Footer from "@/components/layout/Footer";
import { getGlobalData, getHomepageData } from "@/loader/data";

export default async function Home({}: any) {
  const globalResponse = await getGlobalData();

  const headerData = globalResponse.data.blocks.find(
    (block: any) => block.__component === "layouts.header",
  );

  const footerData = globalResponse.data.blocks.find(
    (block: any) => block.__component === "layouts.footer",
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

  const serviceData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.our-services",
  );

  const whySoftexedgeData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.why-softexedge",
  );

  const conversationData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.conversation",
  );

  const caseStudyData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.case-study",
  );

  return (
    <div className="p-3 space-y-5">
      <HeroSectionHome data={heroSectionData} headerData={headerData} />
      <Brands data={brandsData} />
      <AboutUs data={aboutdata} />
      <Video data={videoData} />
      <OurServices data={serviceData} />
      <CaseStudy data={caseStudyData} />
      <WhySoftexedge data={whySoftexedgeData} />
      <Conversation data={conversationData} />
      <Footer data={footerData} />
    </div>
  );
}
