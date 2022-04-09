import Link from "next/link";
import text from "../config/text.json";

export const CourseInfo = () => {
  const { footer } = text;
  return (
    <main className=" bg-white text-almostBlack px-8 py-10 md:py-20 lg:py-30 lg:px-40 justify-between md:items-start">
      <h3
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
        style={{ lineHeight: "1.5rem" }}
      >
        New Beginners Course Starting in May 2022!
      </h3>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-2/5">
        We are staring a new course for beginners starting in May 2022. Contact us for more info.
      </p>
    </main>
  );
}
