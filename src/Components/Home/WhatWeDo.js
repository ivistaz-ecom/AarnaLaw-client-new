// import Image from "next/image";
import React from "react";
import whatwedoImg from "../Home/Images/What_we_do.jpg";


const WhatWeDo = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-1/2  md:ps-5 px-4 md:pe-0 ">
        <img
          src={whatwedoImg}
          width={683}
          height={456}
          className="w-full"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 py-8 md:px-8 px-4" >
        {/* mobile */}
        <h1 className="text-custom-red text-2xl font-bold text-center md:hidden">
          What We Do
        </h1>

        <div className="flex flex-col justify-between items-start h-full w-full md:w-5/6">
          {/* Desktop */}
          <h1 className="text-custom-red text-2xl font-bold hidden md:block">
            What We Do
          </h1>

          <h2 className="text-custom-blue text-4xl font-semibold mt-4 md:mt-0 ">
            We are an award-winning advisory with an international perspective.
          </h2>
          <p className="text-custom-gray mt-4 md:mt-0 ">
            Our counsel-led, tech-enabled practice envisions justice as an
            essential service in this global economy of international trade and
            fluid borders.
          </p>
          <p className="text-custom-gray mt-2">
            We counsel domestic, foreign, and diasporic clients on a range of
            issues. From minimizing regulatory, financial, and legal risk to
            navigating highly specialized areas of national and international
            law, we advise with uncompromising integrity.
          </p>
          <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white mt-4 mx-auto block md:mx-0">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
