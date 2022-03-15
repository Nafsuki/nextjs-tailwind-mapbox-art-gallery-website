import React, { useEffect, useRef } from 'react';
import ButtonA from "../components/ButtonA";

export default function VideoHero() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <div className="sm:relative lg:flex">
      <video ref={videoRef} width="450" loop muted id="hero-video">
        <source type="video/mp4" src="/promo.mp4" />
      </video>
      <div className="hidden lg:relative lg:block lg:w-[990px] lg:h-[800px] lg:bg-no-repeat lg:bg-right">
        <h2 className="absolute top-[189px] left-[165px] mix-blend-exclusion font-black w-screen text-white font-bigShoulder uppercase text-headingM">
          Salsa & Bachata Classes
          <br />
          In High Wycombe
        </h2>
      </div>
      <div className="hidden lg:block lg:absolute lg:top-[189px] lg:right-0 lg:mr-16 xl:mr-40">
        <p className="p-8 font-outfit text-white bg-red-900 bg-opacity-75 font-light text-bodyM w-[350px] mb-20">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <ButtonA path="/location" title="Our Location" />
      </div>
      
    </div>
  );
}
