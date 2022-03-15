import Head from "next/head";
import Footer from "./Footer";

export default function Layout({
  title = "Art Gallery Website | coded by Nafsuki",
  children,
}) {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <Footer />
    </div>
  );
}
