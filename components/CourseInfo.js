import text from "../config/text.json";

export const CourseInfo = () => {
  const { footer } = text;
  return (
    <main className=" bg-shine text-white px-8 py-10 md:py-20 lg:py-30 lg:px-40 justify-between md:items-start">
      <h3
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
        style={{ lineHeight: "1.5rem" }}
      >
        NEW BEGINNERS COURSE STARTING IN MAY 2022!
      </h3>
      <p className="my-4 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        The wait is finally over, on the 4th of May, we are launching Bachata Sensual classes at the High Wycombe Guildhall (High Street). Classes will be taught by two of our instructors Alyssa and Martin to represent Sensual Style dynamics of followers and leaders.
      </p>
      <br/>
      <p className="my-0 l:my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Our first &apos;taster&apos; class (May 4th) will be approximately 2hrs to teach the basics, technique, and an introduction to partner work. 
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Partners are not required!
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Beginners are welcome!
      </p>
      <br />
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Price: £10 per person, (£7 for student with the valid NUS/University card).
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Date: Every Wednesday, starting 4th of May.
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Time: 7pm - 9pm
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Venue: Guildhall (High Street), High Wycombe.
      </p>
      <p className="l:my-12 md:m-0 sm:my-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Follow us on our {' '}
        <a className="underline text-white" href="https://www.facebook.com/LatinShineDance" target="_self">Facebook</a>
        {' '} or {' '}
        <a className="underline text-white" href="https://www.instagram.com/latinshinedance/" target="_self">Instagram</a>
        {' '} for more exciting news and events. 
      </p>
    </main>
  );
}
