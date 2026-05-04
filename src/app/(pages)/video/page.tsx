import VideoHero from "@/components/video/VideoHero";
import VideoBlueprint from "@/components/video/VideoBlueprint";
import GlobalViews from "@/components/video/GlobalViews";
import VideoShowcase from "@/components/video/VideoShowcase";
import CommonCta from "@/components/shared/CommonCta";
import { getPageBySlug } from "@/loader/data";
import BrandingTestimonial from "@/components/branding/BrandingTestimonial";
import BrandingFaq from "@/components/branding/BrandingFaq";

const blockComponents: any = {
  "video.hero-section": VideoHero,
  "video.blueprint": VideoBlueprint,
  "video.global-views": GlobalViews,
  "video.video": VideoShowcase,
  "brandingpage.testimonial": BrandingTestimonial,
  "brandingpage.faq": BrandingFaq,
};

export default async function VideoPage() {
  const response = await getPageBySlug("video");
  const page = response?.data?.[0];

  if (!page)
    return (
      <div className="py-20 text-center text-gray-500">
        Video Page not found
      </div>
    );

  const blocks = page?.blocks || [];

  return (
    <main className="">
      {blocks.map((block: any, index: number) => {
        const Component = blockComponents[block.__component];
        return Component ? <Component key={index} data={block} /> : null;
      })}
      <div className="p-3">
        <CommonCta />
      </div>
    </main>
  );
}
