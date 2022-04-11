import React, { useState, useRef, useEffect } from 'react';
import ButtonB from './ButtonB';
import ScrollDownIcon from './ScrollDownIcon';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
const center = { lat: 51.62945971678308, lng: -0.7514637303734821 };

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
      mapTypeControl: false,
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
      {/* <ScrollDownIcon /> */}
      <ButtonB path="/" title="Back to Home" />
      
    </div>
  );
}
