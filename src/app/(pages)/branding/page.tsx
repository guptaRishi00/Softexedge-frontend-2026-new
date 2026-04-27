import BrandingHero from "@/components/branding/BrandingHero";
import SelectedWorks from "@/components/branding/SelectedWorks";
import StrategicDepth from "@/components/branding/StrategicDepth";
import BrandingTestimonial from "@/components/branding/BrandingTestimonial";
import BrandingFaq from "@/components/branding/BrandingFaq";
import CommonCta from "@/components/shared/CommonCta";
import { getPageBySlug } from "@/loader/data";
import Design from "@/components/branding/Design";

const blockComponents: any = {
  "brandingpage.hero-section": BrandingHero,
  "brandingpage.design": Design,
  "brandingpage.selected-works": SelectedWorks,
  "brandingpage.strategic-depth": StrategicDepth,
  "brandingpage.testimonial": BrandingTestimonial,
  "brandingpage.faq": BrandingFaq,
};

export default async function BrandingPage() {
  const response = await getPageBySlug("branding");
  const page = response?.data?.[0];

  if (!page) return <div className="py-20 text-center">Page not found</div>;

  const blocks = page?.blocks || [];

  return (
    <main className="">
      {blocks.map((block: any, index: number) => {
        const Component = blockComponents[block.__component];
        return Component ? <Component key={index} data={block} /> : null;
      })}
      <CommonCta />
    </main>
  );
}
