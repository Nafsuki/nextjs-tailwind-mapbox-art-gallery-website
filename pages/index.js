import HeroSection from "../components/HeroSection";
import HeroVideo from "../components/HeroVideo";
import MainSection from "../components/MainSection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroVideo />
      <HeroSection />
      <MainSection />
    </Layout>
  );
}
