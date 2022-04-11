import text from "../config/text.json";

export const CourseInfo = () => {
  const { footer } = text;
  return (
    <main className=" bg-shine text-white px-8 py-10 md:py-20 lg:py-30 lg:px-40 justify-between md:items-start">
      <h3
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
        style={{ lineHeight: "1.5rem" }}
      >
        New Beginners Course Starting in May 2022!
      </h3>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        The wait is finaly over, on the 4th of May, we are launching a brand new evening Bachata Sensual classes at Guildhall (High Street), High Wycombe. Classes will be tought by two of our instructors Alyssa and Martin to represent Sensual dynamics of followers as well as leaders. Contact us for more info and follow our social media for more exciting annoucements.
      </p>
      <br />
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Price: £10 for two classes (£7 for student with the valid NUS card).
      </p>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Date: Every Wednesday, starting 4th of May.
      </p>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Time: 7pm - 9pm
      </p>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        Venue: Guildhall (High Street), High Wycombe.
      </p>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-100">
        More info:
        {' '}
        <a className="underline text-white" href="https://www.facebook.com/LatinShineDance" target="_self">Latin Shine - Official Facebook Page</a>
      </p>
    </main>
  );
}
