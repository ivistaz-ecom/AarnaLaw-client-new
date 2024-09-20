"use client"
import React, { useContext } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ourcredentials1 from "../Home/Images/our-credentials-1.png";
import ourcredentials2 from "../Home/Images/our-credentials-2.png";
import ourcredentials3 from "../Home/Images/our-credentials-3.png";
import ourcredentials4 from "../Home/Images/our-credentials-4.png";
import ourcredentials5 from "../Home/Images/Chambers_GPG.png";

import { LanguageContext } from "../../Components/LanguageContext";

const translations = {
  ar: require("../../Components/json/Home/ar.json"),
  de: require("../../Components/json/Home/de.json"),
  en: require("../../Components/json/Home/en.json"),
  es: require("../../Components/json/Home/es.json"),
  fr: require("../../Components/json/Home/fr.json"),
  gu: require("../../Components/json/Home/gu.json"),
  hi: require("../../Components/json/Home/hi.json"),
  ja: require("../../Components/json/Home/ja.json"),
  kn: require("../../Components/json/Home/kn.json"),
  ko: require("../../Components/json/Home/ko.json"),
  ml: require("../../Components/json/Home/ml.json"),
  ru: require("../../Components/json/Home/ru.json"),
  ta: require("../../Components/json/Home/ta.json"),
  tel: require("../../Components/json/Home/tel.json"),
  zh: require("../../Components/json/Home/zh.json"),
};


const OurCredentials = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <>
      <div className="space-y-6 p-12 mb-10 text-center bg-[#EFEFEF]">
        <h1 className="text-2xl text-custom-red font-semibold mb-10">
        {translations[selectedLanguage].Our_Credentials}
        </h1>
        <div>
          <Slider {...settings}>
            <div className="flex items-center h-full">
              <div className="flex flex-col items-center space-y-3">
              
              <img
                src={ourcredentials1}
                width={200}
                  height={150}
                  alt=""
              />
              
                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  Who’s Who Legal 2023
                </h1>
                <p className="text-custom-blue text-center text-sm w-10/12">
                  Thought Leaders- India, Asset Recovery and Arbitration
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center space-y-3 mt-14">

              <img
                src={ourcredentials2}
                width={175}
                  height={74}
                  alt=""
              />
                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  ICC Fraudnet
                </h1>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center space-y-3 mt-3">
              <img
                src={ourcredentials3}
                width={120}
                  height={120}
                  alt=""
              />
                
                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  Chamber & Partners
                </h1>
                <p className="text-custom-blue text-center text-sm w-1/2">
                  Dispute Resolution: Arbitration-India
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center space-y-3 mt-3">
              <img
                src={ourcredentials5}
                width={120}
                  height={120}
                  alt=""
              />
                
                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  Chamber & Partners
                </h1>
                <p className="text-custom-blue text-center text-sm w-1/2">
                  Dispute Resolution: Arbitration-India
                </p>
              </div>
            </div>


            <div>
              <div className="flex flex-col items-center mt-3 space-y-3">

              <img
                src={ourcredentials4}
                width={100}
                  height={100}
                  alt=""
              />

                <h1 className="text-custom-blue text-2xl font-semibold text-center">
                  Legal 500 2020
                </h1>
                <p className="text-custom-blue text-center text-sm w-1/2">
                  Aarna Law feature in Legal 500
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default OurCredentials
