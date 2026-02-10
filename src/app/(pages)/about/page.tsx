import About from "@/components/about/About";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import Impact from "@/components/about/Impact";
import { getPageBySlug } from "@/loader/data";

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
  return (
    <div>
      <AboutHeroSection data={heroSectionData} />
      <About data={aboutData} />
      <Impact data={impactData} />
    </div>
  );
}
