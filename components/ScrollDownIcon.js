import React from 'react';

const ScrollDownIcon = () => {
  return (
    <div
      onClick={() => {
        scroll({
          top: 1000,
          left: 0,
          behavior: 'smooth',
        });
      }}
      className="z-50 mr-2 md:mr-4 lg:mr-10 absolute top-2 right-0 hover:bg-almostBlack w-[60px] h-[60px] flex justify-center items-center rounded-full bg-shine cursor-pointer transition fill-white stroke-white">
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
  );
};

export default ScrollDownIcon;
