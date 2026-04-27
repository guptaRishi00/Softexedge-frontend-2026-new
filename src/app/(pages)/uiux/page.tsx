import BrandingFaq from "@/components/branding/BrandingFaq";
import BrandingTestimonial from "@/components/branding/BrandingTestimonial";
import StrategicDepth from "@/components/branding/StrategicDepth";
import CommonCta from "@/components/shared/CommonCta";
import KineticProcess from "@/components/uiux/KineticProcess";
import SelectedWorksUiux from "@/components/uiux/SelectedWorksUiux";
import UiuxHero from "@/components/uiux/UiuxHero";
import { getPageBySlug } from "@/loader/data";

const blockComponents: any = {
  "uiux.hero-section": UiuxHero,
  "uiux.kinetic-process": KineticProcess,
  "uiux.selected-works": SelectedWorksUiux,
  "brandingpage.strategic-depth": StrategicDepth,
  "brandingpage.testimonial": BrandingTestimonial,
  "brandingpage.faq": BrandingFaq,
};

export default async function UiuxPage() {
  const response = await getPageBySlug("uiux");
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
