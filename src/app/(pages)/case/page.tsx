import UiuxHero from "@/components/uiux/UiuxHero";
import CommonCta from "@/components/shared/CommonCta";
import FeaturedCases from "@/components/casestudy/FeaturedCases";
import ShowcaseLeaders from "@/components/casestudy/ShowcaseLeaders";
import MoreCases from "@/components/casestudy/MoreCases";
import { getPageBySlug } from "@/loader/data";

const blockComponents: any = {
    "uiux.hero-section": UiuxHero,
    "casestudy.featured": FeaturedCases,
    "casestudy.showcase": ShowcaseLeaders,
    "casestudy.more-cases": MoreCases,
};

export default async function CaseStudyPage() {
    const response = await getPageBySlug("case");
    const page = response?.data?.[0];

    if (!page) return <div className="py-20 text-center">Case Study Page not found</div>;

    const blocks = page?.blocks || [];

    return (
        <main className="">
            {blocks.map((block: any, index: number) => {
                const Component = blockComponents[block.__component];
                if (!Component) return null;
                return <Component key={index} data={block} />;
            })}
            <CommonCta />
        </main>
    );
}