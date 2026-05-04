import Questions from "@/components/contact/Questions";
import Testimonial from "@/components/contact/Testimonial";
import Conversation from "@/components/home/Conversation";
import CommonCta from "@/components/shared/CommonCta";
import HeroSection from "@/components/shared/HeroSection";
import { getHomepageData, getPageBySlug } from "@/loader/data";

export default async function ContactPage() {
  const response = await getPageBySlug("contact");

  const page = response?.data?.[0];
  if (!page) {
    return <div className="text-center py-20 text-xl">Page not found</div>;
  }

  const blocks = page?.blocks || [];

  const heroSectionData = blocks.find(
    (block: any) => block.__component === "shared.hero-section",
  );

  const testimonialData = blocks.find(
    (block: any) => block.__component === "aboutpage.testimonial",
  );

  const questionData = blocks.find(
    (block: any) => block.__component === "contactpage.questions",
  );

  const homepageresponse = await getHomepageData();

  const conversationData = homepageresponse.data.blocks.find(
    (block: any) => block.__component === "homepage.conversation",
  );

  return (
    <div className="space-y-10">
      <HeroSection data={heroSectionData} />
      <div className="p-3">
        <Conversation data={conversationData} />
      </div>
      <Testimonial data={testimonialData} />
      <div className="p-3">
        <Questions data={questionData} />
        <CommonCta />
      </div>
    </div>
  );
}
