import BrandingHero from "@/components/branding/BrandingHero";
import EnterpriseDevelopment from "@/components/software/EnterpriseDevelopment";

import CommonCta from "@/components/shared/CommonCta";
import { getPageBySlug } from "@/loader/data";
import AppStack from "@/components/app/AppStack";
import OurDevelopment from "@/components/app/OurDevelopment";
import WebSolutions from "@/components/web/WebSolutions";

const blockComponents: any = {
    "brandingpage.hero-section": BrandingHero,
    "software.enterprise": WebSolutions,
    "app.app-stack": AppStack,
    "app.our-development": OurDevelopment,
};

export default async function AppPage() {
    const response = await getPageBySlug("app");
    const page = response?.data?.[0];

    if (!page) return <div className="py-20 text-center">App Page not found</div>;

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