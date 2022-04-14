import HeroSection from "../components/HeroSection";
// import HeroVideo from "../components/HeroVideo";
import MainSection from "../components/MainSection";
import { Instructors } from "../components/Instructors";
import { CourseInfo } from "../components/CourseInfo";
import Layout from "../components/Layout";
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <Layout>
      {/* <HeroVideo /> */}
      <HeroSection />
      <CourseInfo />
      {/* <Signup /> */}
      <MainSection />
      <Instructors />
      {/* <ImageGallery /> */}
    </Layout>
  );
}
