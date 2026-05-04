import About from "@/components/about/About";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import Impact from "@/components/about/Impact";
import OurTeam from "@/components/about/OurTeam";
import WhySoftexedge from "@/components/about/WhySoftexedge";
import Brands from "@/components/home/Brands";
import CommonCta from "@/components/shared/CommonCta";
import { getHomepageData, getPageBySlug } from "@/loader/data";

export default async function AboutPage() {
  const response = await getPageBySlug("about");

  const page = response?.data?.[0];
  if (!page) {
    return <div className="text-center py-20 text-xl">Page not found</div>;
  }

  const blocks = page?.blocks || [];

  const heroSectionData = blocks.find(
    (block: any) => block.__component === "shared.hero-section",
  );

  const aboutData = blocks.find(
    (block: any) => block.__component === "aboutpage.about",
  );

  const impactData = blocks.find(
    (block: any) => block.__component === "aboutpage.impact",
  );

  const whySoftexedgeData = blocks.find(
    (block: any) => block.__component === "aboutpage.why-softexedge",
  );

  const ourTeamData = blocks.find(
    (block: any) => block.__component === "aboutpage.our-team",
  );

  const homePageResponse = await getHomepageData();

  const brandsData = homePageResponse.data.blocks.find(
    (block: any) => block.__component === "homepage.brands",
  );
  return (
    <div className="p-3">
      <AboutHeroSection data={heroSectionData} />
      <About data={aboutData} />
      <Impact data={impactData} />
      <WhySoftexedge data={whySoftexedgeData} />
      <OurTeam data={ourTeamData} />
      <div className="">
        <Brands data={brandsData} />
        <CommonCta />
      </div>
    </div>
  );
}
