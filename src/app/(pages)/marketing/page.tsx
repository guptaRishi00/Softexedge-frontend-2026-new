
import SelectedWorks from "@/components/branding/SelectedWorks";
import StrategicDepth from "@/components/branding/StrategicDepth";
import BrandingTestimonial from "@/components/branding/BrandingTestimonial";
import BrandingFaq from "@/components/branding/BrandingFaq";
import CommonCta from "@/components/shared/CommonCta";
import { getPageBySlug } from "@/loader/data";

import MarketingHero from "@/components/marketing/MarketingHero";
import CoreDisciplines from "@/components/marketing/CoreDisciplines";

const blockComponents: any = {
    "brandingpage.hero-section": MarketingHero,
    "brandingpage.selected-works": SelectedWorks,
    "brandingpage.strategic-depth": CoreDisciplines,
    "brandingpage.testimonial": BrandingTestimonial,
    "brandingpage.faq": BrandingFaq,
};

export default async function MarketingPage() {
    const response = await getPageBySlug("digital");
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
