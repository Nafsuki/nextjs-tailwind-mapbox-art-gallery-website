import HeroSection from "../components/HeroSection";
// import HeroVideo from "../components/HeroVideo";
import MainSection from "../components/MainSection";
import { Instructors } from "../components/Instructors";
import { CourseInfo } from "../components/CourseInfo";
import Layout from "../components/Layout";
import Signup from "../components/Signup";
import ScrollDownIcon from "../components/ScrollDownIcon";
import { Subscribe } from '../components/subscribe';

export default function Home() {
  return (
    <Layout>
      {/* <HeroVideo /> */}
      <HeroSection />
      {/* <Signup /> */}
      <MainSection />
      <Instructors />
      <CourseInfo />
      <Subscribe />
    </Layout>
  );
}
