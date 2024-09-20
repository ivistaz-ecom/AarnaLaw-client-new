"use client";

import React, { useRef } from "react";
// import Image from "next/image";
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

  var setting = {
    speed: 500,
    slidesToShow: 2,
    initialSlide: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
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
    <>
      <div className="container mx-auto relative mb-14">
        <h2 className="text-custom-blue text-2xl font-semibold py-5 block md:hidden text-center">
          Client’s Testimonials
        </h2>

        <div className="flex justify-end mr-10 ">
          <img
            src={quotesImg}
            className="hidden md:block"
            width={276}
            height={215}
            alt=""
          />
        </div>
        <div className="flex justify-between md:-mt-36 mt-2">
          <div className="bg-custom-blue w-[260px] md:w-[559px] md:h-[437px] h-96 lg:ms-12"></div>
          <div className="self-end text-right space-y-6 mr-2 md:mr-28">
            <h2 className="text-custom-blue text-xl md:text-2xl font-semibold p-2 hidden md:block">
              Client’s <br /> Testimonials
            </h2>
            <div className="flex gap-2 justify-end">
              <PrevArrow />
              <NextArrow />
            </div>
          </div>
        </div>

        <div className="absolute w-full md:w-3/4 gap-10 md:bottom-28 bottom-10 md:right-[200px]">
          <InsightSlider ref={sliderRef} {...setting}>
            {testimonials.map((item) => (
              <div key={item.id} className="h-full">
                {" "}
                {/* Added class for height control */}
                <TestimonialsCard testimonialDetails={item} />
              </div>
            ))}
          </InsightSlider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
