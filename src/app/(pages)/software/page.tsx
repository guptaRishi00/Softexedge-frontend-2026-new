
import CommonCta from "@/components/shared/CommonCta";
import EnterpriseDevelopment from "@/components/software/EnterpriseDevelopment";
import TechStack from "@/components/software/TechStack";
import SoftwareHero from "@/components/software/SoftwareHero";
import SoftwareBlueprint from "@/components/software/SoftwareBlueprint";
import { getPageBySlug } from "@/loader/data";

const blockComponents: any = {
    "brandingpage.hero-section": SoftwareHero,
    "software.enterprise": EnterpriseDevelopment,
    "software.tech-stack": TechStack,
    "video.blueprint": SoftwareBlueprint,
};

export default async function SoftwarePage() {
    const response = await getPageBySlug("software");
    const page = response?.data?.[0];

    if (!page) return <div className="py-20 text-center text-gray-500">Software Page not found</div>;

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