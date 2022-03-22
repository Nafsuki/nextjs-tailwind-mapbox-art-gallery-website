import HeroSection from "../components/HeroSection";
// import HeroVideo from "../components/HeroVideo";
import MainSection from "../components/MainSection";
import Layout from "../components/Layout";
import Signup from "../components/Signup";
import ScrollDownIcon from '../components/ScrollDownIcon';

export default function Home() {
  return (
    <Layout>
      {/* <HeroVideo /> */}
      <HeroSection />
      <Signup />
      <MainSection />
    </Layout>
  );
}
