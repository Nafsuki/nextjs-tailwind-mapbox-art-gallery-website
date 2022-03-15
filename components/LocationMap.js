import React, { useState, useRef, useEffect } from 'react';
import ButtonB from './ButtonB';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const center = { lat: 51.628251252028704, lng: -0.7512566406302787 };

const render = (status) => {
  const zoom = 17;
  switch (status) {
    case Status.LOADING:
      // return <Spinner />;
      return <p>Loading</p>;
    case Status.FAILURE:
      return <p>error</p>;
    case Status.SUCCESS:
      return (<MyMapComponent center={center} zoom={zoom}>
        <Marker key={0} position={center} icon={'/icon-location.svg'} />
        {/* <AnyReactComponent
            position={center}
            text="My Marker"
          /> */}
        {/* <CustomMarker key={0} position={center} /> */}
      </MyMapComponent>);
  }
};

const Marker = (options) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

function MyMapComponent({ center, zoom, children }) {
  const ref = useRef();
  const [map, setMap] = useState();


  useEffect(() => {
    if (map) return;
    setMap(new window.google.maps.Map(ref.current, {
      center,
      zoom,
    }));
  }, [ref, map]);

  return (
    <>
      <div ref={ref} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}

export default function LocationMap() {
  return (
    <div className="relative w-screen h-550 md:h-600">
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_MAP_API}
        render={render}>
      </Wrapper>
      <ButtonB path="/" title="Back to Home" />
      <div
        onClick={() => {
          scroll({
            top: 1000,
            left: 0,
            behavior: 'smooth',
          });
        }}
        className="mr-2 md:mr-4 lg:mr-10 absolute top-2 right-0 hover:bg-almostBlack w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gold cursor-pointer transition fill-white stroke-white">
        <svg
          className="w-6 h-6"
          // fill='none'
          // stroke='currentColor'
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
