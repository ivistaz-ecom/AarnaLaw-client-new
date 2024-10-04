"use client";
import React, { useState, useRef, useEffect } from "react";
import BannerSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar";
import { Button } from "flowbite-react";
import banner1Img from "../Home/Images/desktop_home_banner_1.jpg";
import banner2Img from "../Home/Images/desktop_home_banner_2.jpg";
import banner3Img from "../Home/Images/desktop_home_banner_3.jpg";
import mobilebanner1Img from "../Home/Images/mobile_home_banner_1.jpg";
import mobilebanner2Img from "../Home/Images/mobile_home_banner_2.jpg";
import mobilebanner3Img from "../Home/Images/mobile_home_banner_3.jpg";
import { useNavigate } from "react-router-dom";

function HomeBanner() {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    initialSlide: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    arrow: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const navigate = useNavigate();
  const handleContactusClick = () => {
    navigate("/contactus");
  };
  return (
    <>
      <section className="relative w-full mx-auto md:overflow-hidden md:h-screen text-center">
        <Navbar />
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative">
            <BannerSlider {...settings} className="z-0">
              <div className="relative md:overflow-hidden">
                <img
                  src={banner1Img}
                  className="w-full h-auto z-0"
                  width={800}
                  height={150}
                  alt="Home Banner 1"
                />
                <div className="absolute inset-0 flex md:items-center justify-center text-center z-10 pb-8 md:pb-0">
                  <p className="text-white font-bold text-6xl">
                    Unlocking Abundance
                  </p>
                </div>
              </div>

              <div className="relative md:overflow-hidden">
                <img
                  src={banner2Img}
                  className="w-full h-auto z-0"
                  width={800}
                  height={150}
                  alt="Home Banner 3"
                />
                <div className="absolute inset-0 flex flex-col md:items-center justify-end md:justify-center text-center z-10 pb-8 md:pb-0">
                  <p className="text-white font-bold text-6xl">
                    Client-Centric Problem Solving
                  </p>
                  <p className="mt-4 text-white text-1xl lg:text-2xl">
                    We are a counsel-led Indian legal advisory firm,
                    representing India and people across the world in diverse
                    areas of expertise.
                  </p>
                </div>
              </div>

              <div className="relative md:overflow-hidden">
                <img
                  src={banner3Img}
                  className="w-full h-auto z-0"
                  width={800}
                  height={150}
                  alt="Home Banner 2"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 pb-8 md:pb-0 md:justify-center">
                  <p className="text-white font-bold text-6xl">
                    Rooted in India,
                  </p>
                  <p className="mt-4 text-white font-bold text-6xl">
                    Global in Practice.
                  </p>
                </div>
              </div>
            </BannerSlider>
          </div>
        </div>

        {/* Mobile View */}
        {/* Mobile View */}
<div className="block md:hidden">
  <div className="relative overflow-hidden"> {/* Add overflow-hidden here */}
    <BannerSlider {...settings} className="z-0">
      <div className="relative md:overflow-hidden">
        <img
          src={mobilebanner1Img}
          className="w-full h-[450px] lg:h-auto z-0"
          width={800}
          height={150}
          alt="Home Banner 1"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 pb-36 md:pb-0 md:justify-center">
          <p className="text-white font-bold text-3xl lg:text-6xl">
            Unlocking Abundance
          </p>
        </div>
      </div>

      <div className="relative md:overflow-hidden">
        <img
          src={mobilebanner2Img}
          className="w-full h-[450px] lg:h-auto z-0"
          width={800}
          height={150}
          alt="Home Banner 3"
        />
        <div className="absolute inset-0 flex flex-col justify-end text-center z-10 pb-8 md:pb-0">
          <p className="text-white font-bold text-3xl lg:text-6xl">
            Client-Centric Problem Solving
          </p>
          <p className="mt-4 text-white text-1xl lg:text-2xl">
            We are a counsel-led Indian legal advisory firm,
            representing India and people across the world in diverse
            areas of expertise.
          </p>
        </div>
      </div>

      <div className="relative md:md:overflow-hidden">
        <img
          src={mobilebanner3Img}
          className="w-full h-[450px] lg:h-auto z-0"
          width={800}
          height={150}
          alt="Home Banner 2"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center z-10 pb-28 md:pb-0 md:justify-center">
          <p className="text-white font-bold text-3xl lg:text-6xl">
            Rooted in India,
          </p>
          <p className="text-white font-bold text-3xl lg:text-6xl">
            Global in Practice.
          </p>
        </div>
      </div>
    </BannerSlider>
  </div>
</div>

      </section>
    </>
  );
}

export default HomeBanner;
