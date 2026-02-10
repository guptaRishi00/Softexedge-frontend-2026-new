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
    <div className="p-3 space-y-5">
      <Header headerData={headerData} />
      {children}
      <Footer data={footerData} />
    </div>
  );
}
