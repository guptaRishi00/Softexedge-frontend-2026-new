import BrandingHero from "@/components/branding/BrandingHero";
import EnterpriseDevelopment from "@/components/software/EnterpriseDevelopment";

import CommonCta from "@/components/shared/CommonCta";
import { getPageBySlug } from "@/loader/data";
import FrameworkStack from "@/components/web/FrameworkStack";
import WebProcess from "./WebProcess";
import WebSolutions from "@/components/web/WebSolutions";

const blockComponents: any = {
    "brandingpage.hero-section": BrandingHero,
    "software.enterprise": WebSolutions,
    "web.framework": FrameworkStack,
    "web.our-process": WebProcess,
};

export default async function WebPage() {
    const response = await getPageBySlug("web");
    const page = response?.data?.[0];

    if (!page) return <div className="py-20 text-center">Web Page not found</div>;

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