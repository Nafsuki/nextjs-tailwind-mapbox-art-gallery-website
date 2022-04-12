import FooterB from "../components/FooterB";
import LocationMap from "../components/LocationMap";
import text from "../config/text.json";

const Location = () => {
  const { locationCopy } = text;
  return (
    <div className="">
      <LocationMap />
      {/* <div className='w-screen bg-center bg-no-repeat bg-mobileMap sm:bg-tabletMap md:bg-desktopMap h-550 md:h-600'>
        <ButtonB path='/' title='Back to Home' />
      </div> */}

      <div className="px-4 py-10 bg-almostBlack md:px-8 lg:px-40 md:py-24 md:flex md:space-x-24 lg:justify-between">
        <h2 className="mt-5 mb-12 font-black text-white uppercase font-bigShoulder text-headingM md:text-headingMM lg:text-headingL lg:w-350 md:mt-0">
          {locationCopy.title}
        </h2>
        <div className="space-y-7 lg:w-2/5">
          <h4 className="font-black uppercase font-bigShoulder text-shine text-headingXS">
            {locationCopy.street}
          </h4>
          <div className="space-y-1 font-light text-white font-outfit text-bodyS">
            <div className="my-5">
              <p>{locationCopy.body1}</p>
              <p>{locationCopy.body2}</p>
              <p>{locationCopy.body3}</p>
              <p>{locationCopy.body4}</p>
            </div>
            <p className="my-8">
              {locationCopy.description}
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 bg-white md:px-8 lg:px-40 md:py-24 md:flex md:space-x-24 lg:justify-between">
        <h2 className="mt-5 mb-12 font-black text-almostBlack uppercase font-bigShoulder text-headingM md:text-headingMM lg:text-headingL lg:w-350 md:mt-0">
          {locationCopy.gettingHere}
        </h2>
        <div className="space-y-7 lg:w-2/5">
          <h4 className="font-black uppercase font-bigShoulder text-shine text-headingXS">
            {locationCopy.byCar}
          </h4>
          <div className="space-y-1 font-light text-almostBlack font-outfit text-bodyS">
            <div className="my-5">
              <p>{locationCopy.byCarText}</p>
            </div>
          </div>
          <h4 className="font-black uppercase font-bigShoulder text-shine text-headingXS">
            {locationCopy.byTrain}
          </h4>
          <div className="space-y-1 font-light text-almostBlack font-outfit text-bodyS">
            <div className="my-5">
              <p>{locationCopy.byTrainText}</p>
            </div>
          </div>
        </div>
      </div>
      <FooterB />
    </div>
  );
};

export default Location;
