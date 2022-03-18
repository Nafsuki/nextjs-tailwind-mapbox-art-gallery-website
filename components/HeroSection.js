import Image from "next/image";
import ButtonA from "../components/ButtonA";
import text from "../config/text.json";

export default function HeroSection() {
  const { hero } = text;
  return (
    <div className="sm:relative lg:flex bg-stone-900">
      <div className="hidden lg:relative lg:block lg:bg-almostBlack lg:w-[990px] lg:h-[800px] lg:bg-desktopHero lg:bg-no-repeat lg:bg-right">
        {/* <h1 className="absolute top-[189px] left-[165px] mix-blend-exclusion font-black w-screen text-white font-bigShoulder uppercase text-headingL"> */}
        <h1 className="absolute top-[289px] left-[165px] font-black w-screen text-white font-bigShoulder uppercase text-headingM">
         {hero.heading.split('_').map((item, id) => {
           return (<p key={`item-${id}`} className="drop-shadow-md">{item}</p>);
         })}
        </h1>
        
      </div>
      <div className="hidden lg:block lg:absolute lg:top-[189px] lg:right-0 lg:mr-6 xl:mr-10">
        <div className="p-[0px] border-2 border-white">
          <div className="ml-[30px] mt-[40px]">
          <Image
            src="/desktop/logo.png"
            width={500}
            height={170}
            // layout="responsive"
            alt="Latin Shine Dance Company Logo"
            priority="true"
            />
            </div>
            <p className='ml-[76px] text-white font-light text-bodyM mb-20'>
              {hero.logoText}
            </p>
        </div>
        <p className="font-outfit text-white font-light text-bodyM w-[550px] mb-10">
          {hero.description}
        </p>
        <ButtonA path="/location" title="Our Location" />
      </div>

      <div className="sm:hidden">
        <Image
          src="/mobile/image-hero.jpg"
          width={375}
          height={240}
          layout="responsive"
          alt="hero image mobile"
          priority="true"
        />
      </div>
      <div className="hidden sm:block sm:w-3/5 lg:hidden">
        <Image
          src="/tablet/image-hero.jpg"
          width={437}
          height={700}
          layout="responsive"
          alt="hero image tablet"
          priority="true"
        />
      </div>
      <div className="px-4 py-10 sm:absolute sm:top-[145px] sm:left-1/2 lg:static lg:hidden">
        <h1 className="font-black w-screen text-almostBlack font-bigShoulder uppercase text-headingXM md:text-headingL">
          {hero.heading}
        </h1>
        <p className="font-outfit text-darkGray font-light text-bodyS py-8 sm:py-12 sm:w-[280px] md:w-[340px]">
          {hero.description}
        </p>
        <ButtonA path="/location" title="Our Location" />
        
        {/* <br />
        <ButtonA path="/classes" title="Our Classes" />
        <br />
        <ButtonA path="/promotions" title="Promotions" /> */}
      </div>
    </div>
  );
}
