import Link from 'next/link';
import Image from 'next/image';
import text from '../config/text.json';

export const Instructors = () => {
  const { instructors } = text;
  return (
    <main className=" bg-shine text-white px-8 py-10 md:py-20 lg:py-30 lg:px-40 justify-between md:items-start">
        <div className="block lg:flex">
          <div className="flex-none w-[445px] h-[889px]">
            <Image
              src="/desktop/instructors.jpg"
              width={500}
              height={889}
              objectFit="cover"
              layout="responsive"
              alt="Latin Shine - instructors - Alyssa and Martin"
              priority="true"
            />
          </div>
          <div className="grow px-4 pt-0 lg:pt-0">
            <h2 className="font-black uppercase font-bigShoulder text-headingS lg:text-headingS md:mb-4">
              Meet your teachers
            </h2>
            <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
            {instructors.first}
            </p>
            <br />
            <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
              {instructors.second}
            </p>
            <br />
            <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
              {instructors.third}
            </p>
          </div>
        </div>
    </main>
  );
};
