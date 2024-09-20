"use client";

import React, { useRef } from "react";
import InsightSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../Home/utils/data";
import TestimonialsCard from "./TestimonialsCard";
import { leftArrow, rightArrow } from "../Home/utils/Icon";
import quotesImg from "../Home/Images/quotes.svg";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const NextArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickNext()}
    >
      {rightArrow}
    </div>
  );

  const PrevArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickPrev()}
    >
      {leftArrow}
    </div>
  );

  const settings = {
    speed: 500,
    slidesToShow: 2,
    initialSlide: 2,
    slidesToScroll: 1,
    fade: false,
    autoplay: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto relative mb-14 px-4 lg:px-0">
      <div className="flex justify-end mb-4 lg:mb-0">
        <img src={quotesImg} width={276} height={215} alt="Quotes" />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:space-x-12 -mt-36">
        <div className="bg-custom-blue w-full h-[437px] lg:w-[559px] lg:ml-[20ch]"></div>
        <div className="self-end text-right space-y-6 mr-2 md:mr-28">
          <h2 className="text-custom-blue text-xl md:text-2xl font-semibold">
            Client’s <br /> Testimonials
          </h2>
          <div className="flex gap-2 justify-end">
            <PrevArrow />
            <NextArrow />
          </div>
        </div>
      </div>
      <div className="absolute w-full md:w-3/4 gap-10 bottom-[calc(35%-5px)] lg:pl-[20ch]">
        <InsightSlider ref={sliderRef} {...settings}>
          {testimonials.map((item) => (
            <TestimonialsCard key={item.id} testimonialDetails={item} />
          ))}
        </InsightSlider>
      </div>
    </div>
  );
};

export default Testimonials;
