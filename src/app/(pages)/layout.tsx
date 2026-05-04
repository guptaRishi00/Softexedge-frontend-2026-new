import Footer from "@/components/layout/Footer";
import Header from "@/components/page/Header";
import { getGlobalData } from "@/loader/data";

export default async function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalResponse = await getGlobalData();

  const headerData = globalResponse.data.blocks.find(
    (block: any) => block.__component === "layouts.header",
  );

  const footerData = globalResponse.data.blocks.find(
    (block: any) => block.__component === "layouts.footer",
  );

  return (
    <div className="">
      <div className="relative z-50">
        <Header headerData={headerData} />
      </div>
      {children}
      <div className="p-3">
        <Footer data={footerData} />
      </div>
    </div>
  );
}
