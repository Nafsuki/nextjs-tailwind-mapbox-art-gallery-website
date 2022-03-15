import Map, { Marker } from "react-map-gl";
import { useRef, useEffect } from "react";
import ButtonB from "./ButtonB";
import Image from "next/image";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  switch (status) {
    case Status.LOADING:
      // return <Spinner />;
      return <p>Loading</p>;
    case Status.FAILURE:
      return <p>error</p>;
    case Status.SUCCESS:
      return <MyMapComponent center={center} zoom={zoom} />;
  }
};

function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

export default function LocationMap() {
  return (
    <div className="relative w-screen h-550 md:h-600">
      <Wrapper apiKey={""} render={render} />
      <ButtonB path="/" title="Back to Home" />
      {/* <Marker longitude={-71.31041} latitude={41.48131} anchor="center">
          <div className="cursor-pointer animate-bounce">
            <Image
              src="/icon-location.svg"
              width={66}
              height={88}
              alt="location icon"
            />
          </div>
        </Marker> */}
      <div
        onClick={() => {
          scroll({
            top: 1000,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="mr-2 md:mr-4 lg:mr-10 absolute top-2 right-0 hover:bg-almostBlack w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gold cursor-pointer transition fill-white stroke-white"
      >
        <svg
          className="w-6 h-6"
          // fill='none'
          // stroke='currentColor'
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  );
}
