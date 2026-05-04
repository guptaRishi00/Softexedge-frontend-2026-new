import Culture from "@/components/career/Culture";
import FindCareer from "@/components/career/FindCareer";
import Herosection from "@/components/career/Herosection";
import Journey from "@/components/career/Journey";
import WhyWork from "@/components/career/WhyWork";
import CommonCta from "@/components/shared/CommonCta";
import { getPageBySlug } from "@/loader/data";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const response = await getPageBySlug("career");

  const page = response?.data?.[0];
  if (!page) {
    return <div className="text-center py-20 text-xl">Page not found</div>;
  }

  const blocks = page?.blocks || [];

  const heroSectionData = blocks.find(
    (block: any) => block.__component === "careerpage.hero-section",
  );
  const whyWorkData = blocks.find(
    (block: any) => block.__component === "careerpage.why-work",
  );
  const findCareerData = blocks.find(
    (block: any) => block.__component === "careerpage.find-career",
  );
  const journeyData = blocks.find(
    (block: any) => block.__component === "careerpage.journey",
  );
  const cultureData = blocks.find(
    (block: any) => block.__component === "careerpage.culture",
  );

  return (
    <div className="">
      <Herosection data={heroSectionData} />
      <WhyWork data={whyWorkData} />
      <FindCareer data={findCareerData} />
      <Journey data={journeyData} />
      <Culture data={cultureData} />
      <div className="p-3 mb-14">
        <CommonCta />
      </div>
    </div>
  );
}
