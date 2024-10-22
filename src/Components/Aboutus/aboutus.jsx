import React, { useState, useEffect, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import aboutusheader from "../../images/about-us-banner.jpg";
// import aboutusmobile from "../../images/About.png";
import aboutusmobile from "../../images/about-us-mobile-banner.jpg";
import aboutimg from "../../images/aboutus.jpg";
import whatwedoimg from "../../images/Whatwedo.png";
import Legacyimg from "../../images/OurLegacy.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import JayasimhaFoundationimg from "../../images/Jayasimha-Foundation.png";
import founderoneimg from "../../images/founderone.png";
import quoteimg from "../../images/quote.png";
import PracticeArea from "./practiceArea";
import Pratners from "./Partner";

const translations = {
  ar: require("../../Components/json/Aboutus/ar.json"),
  de: require("../../Components/json/Aboutus/de.json"),
  en: require("../../Components/json/Aboutus/en.json"),
  es: require("../../Components/json/Aboutus/es.json"),
  fr: require("../../Components/json/Aboutus/fr.json"),
  gu: require("../../Components/json/Aboutus/gu.json"),
  hi: require("../../Components/json/Aboutus/hi.json"),
  ja: require("../../Components/json/Aboutus/ja.json"),
  kn: require("../../Components/json/Aboutus/kn.json"),
  ko: require("../../Components/json/Aboutus/ko.json"),
  ml: require("../../Components/json/Aboutus/ml.json"),
  ru: require("../../Components/json/Aboutus/ru.json"),
  ta: require("../../Components/json/Aboutus/ta.json"),
  tel: require("../../Components/json/Aboutus/tel.json"),
  zh: require("../../Components/json/Aboutus/zh.json"),
};

function AboutUs() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleViewCurrentOpenings = () => {
    // Redirect to the career page when button is clicked

    navigate("/Careers");
  };

  const partnersRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.scrollTo === "partners") {
      partnersRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  const handleServiceButtonClick = () => {
    navigate("/practiceArea");
  };

  return (
    <div className="bg-white">
      {/* Desktop Header */}
      <header className="relative hidden md:block">
        <img
          src={aboutusheader}
          className="w-full h-[500px]"
          alt="About Us Area"
        />
        <div className="absolute inset-x-0 top-2/4 text-white text-5xl font-bold text-center">
          About us
        </div>
      </header>

      {/* Mobile Header */}
      <header className="relative block md:hidden">
        <img src={aboutusmobile} className="w-full" alt="About Us Area" />
        <div className="absolute inset-x-0 top-2/4 text-white text-3xl font-bold text-center">
          About us
        </div>
      </header>

      <div className="mx-auto flex flex-col md:flex-row md:mx-1">
        {" "}
        {/* Added margin for both mobile and desktop */}
        {/* What We Do Section */}
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/2  md:ps-5 p-4 md:pe-0 ">
            <img
              src={aboutimg}
              width={683}
              height={456}
              className="w-full"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 md:py-8 md:px-8 p-4 ">
            {/* mobile */}
            <h1 className="text-custom-red text-2xl font-bold text-center md:hidden">
              What We Do
            </h1>

            <div className="flex flex-col justify-between items-start h-full w-full md:w-5/6 pb-">
              {/* Desktop */}
              <h1 className="text-custom-red text-2xl font-bold hidden md:block">
                What We Do
              </h1>

              <h2 className="text-custom-blue text-4xl font-semibold mt-4 md:mt-0 ">
                We are an award-winning advisory with an international
                perspective.
              </h2>
              <p className="text-custom-gray mt-4 md:mt-0 ">
                Our counsel-led, tech-enabled practice envisions justice as an
                essential service in this global economy of international trade
                and fluid borders.
              </p>
              <p className="text-custom-gray mt-2">
                We counsel domestic, foreign, and diasporic clients on a range
                of issues. From minimizing regulatory, financial, and legal risk
                to navigating highly specialized areas of national and
                international law, we advise with uncompromising integrity.
              </p>
              <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white mt-4 mx-auto block md:mx-0">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Practice Area Section start */}
      <PracticeArea />

      <br></br>
      <br></br>
      {/* What LEGACY START Section */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse justify-between">
        {/* Our Legacy Section */}
        <div id="legacy" className="bg-white ">
          <div className="flex flex-col-reverse md:flex-row-reverse justify-between container mx-auto px-4">
            <motion.div
              className="w-full md:w-1/2 mb-4 md:mb-0"
              initial={{ opacity: 0, x: "10vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <img
                src={Legacyimg}
                className="w-full h-auto shadow-lg"
                alt="legacy"
                loading="lazy"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </motion.div>

            <motion.div
              className="w-full md:w-2/5 text-left md:ml-8 mt-10"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <p className="text-custom-blue text-2xl font-bold">
                {translations[selectedLanguage].Our_Legacy}
              </p>
              <br></br>
              <div className="text-custom-red text-3xl font-semibold mt-4 md:mt-0 text-left word-spacing-custom">
                {translations[selectedLanguage].Legacy_Message1}
              </div>
              <br></br>
              <div className="text-custom-gray mt-2 md:mt-0">
                <p>{translations[selectedLanguage].Legacy_sub_Message1}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="mx-auto flex flex-col md:flex-row">
        <div id="what-we-do" className="bg-white w-full">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:w-4/5 container mx-auto md:px-0 px-4">
            <motion.div
              className="w-full md:w-1/2 mb-0"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              // style={{ marginRight: "10px", marginLeft: "60px" }}
            >
              <img
                src={whatwedoimg}
                className="w-full h-auto shadow-lg"
                alt="aboutus"
                loading="lazy"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </motion.div>

            <motion.div
              className="w-full md:w-2/5 text-left md:mr-20"
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <p className="text-custom-red text-2xl font-bold">
                {translations[selectedLanguage].What_we_do}
              </p>
              <br></br>
              <div className="text-custom-gray mt-2 md:mt-0 text-justify">
                <p>{translations[selectedLanguage].Whatwedo_Message1}</p>
                <p>{translations[selectedLanguage].Whatwedo_Message2}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      {/* Partners   Section */}

      <section ref={partnersRef}>
        <Pratners />
      </section>
      {/* Foundation Section end */}

      {/* Our Founder Start Section */}
      <div className="bg-white md:p-8 p-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:w-4/5 container mx-auto">
          {" "}
          {/* Adjusted margin */}
          <motion.div
            className="w-full md:w-1/2 mb-4 md:mb-0"
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            // style={{ marginRight: "10px", marginLeft: "40px" }}
          >
            <img
              src={founderoneimg}
              className="w-full h-auto mx-auto rounded-md shadow-lg"
              alt="aboutus"
              loading="lazy"
              style={{ maxWidth: "100%", maxHeight: "auto" }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-left md:ml-8"
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <br />
            <div>
              <img src={quoteimg} alt="Quote" />
            </div>
            <br></br>
            <h2 className="text-left font-semibold  tracking-wider text-blue-900 md:pl-25 mb-4 font-montserrat">
              {translations[selectedLanguage].Founder_Message}
            </h2>
            <div
              className="text-gray-700 text-base  font-montserrat text-justify"
              style={{ maxWidth: "100%", height: "auto" }}
            >
              <p className="text-justify text-medium md:leading-8">
                {translations[selectedLanguage].Founder_Message1}
              </p>
            </div>
            <br></br>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div className="text-left">
                <p className="font-semibold">Kamala Naganand</p>
                <p className="text-sm">MANAGING PARTNER</p>
              </div>
              <div className="text-left mt-4 md:mt-0">
                <p className="font-semibold">Shreyas Jayasimha</p>
                <p className="text-sm">FOUNDING PARTNER</p>
              </div>
            </div>

            {/* <div className="flex items-center mt-4">
              <button
                onClick={handleServiceButtonClick}
                className="bg-white text-black border-2 border-custom-red px-6 py-2 rounded-full font-semibold hover:bg-custom-red hover:text-white"
              >
                {translations[selectedLanguage].Meet_Our_Team}
              </button>
            </div> */}
          </motion.div>
        </div>
      </div>
      {/* Our Founder end Section */}

      {/* Foundation Section end */}

      <div className="bg-151C4A">
        <div className="flex flex-col text-justify md:flex-row justify-center items-center container mx-auto md:py-20 py-5 md:px-5 ">
          {/* Left Column - Content */}
          <div
            className="flex-1 p-4 md:text-justify text-left"
            // Increased duration for a slower animation
          >
            <h2 className="text-left font-medium tracking-wider text-gray-400 mb-4 font-montserrat">
              JAYASIMHA FOUNDATION
            </h2>
            <p className="text-white mb-4">
              Established in memory of Late Justice R Jayasimha Babu
              (1942-2015), the Jayasimha Foundation carries forward an
              illustrious legacy rooted in the pursuit of excellence through a
              spirit of service.
            </p>
            <p className="text-white mb-4">
              The foundation embodies the guiding principles of integrity,
              courage and discipline that exemplified Justice Jayasimha Babu.
            </p>
            <p className="text-white mb-4">
              Through his distinguished appointments as Judge of the High Court
              of Madras, and earlier of the High Court of Karnataka, Justice
              Jayasimha Babu delivered widely cited judgments on constitutional
              law, company and commercial law, and taxation. Further, his astute
              approach to conflict resolution as an arbitrator in domestic and
              international disputes was widely regarded in high esteem.
            </p>
            <p className="text-white">
              A connoisseur of Carnatic, Hindustani and Western classical music,
              Justice Babu was keen on encouraging and empowering young talents
              in the law.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 p-4 hidden md:block md:ml-12">
            <img
              src={JayasimhaFoundationimg}
              className="mx-auto rounded-md max-w-full h-auto"
              alt="Jayasimha Foundation"
            />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden p-4">
            <img
              src={JayasimhaFoundationimg}
              className="mx-auto rounded-md"
              alt="Jayasimha Foundation"
            />
          </div>
        </div>
      </div>

      {/* Foundation Section END */}
      {/* Opening Section START */}
      <div className="bg-white-200 p-4 grid place-items-center py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="">
            <div className="md:text-start text-center">
              <div className="text-2xl font-semibold text-blue-900 py-5">
                <p className="text-3xl leading-normal font-montserrat">
                  {translations[selectedLanguage].Would_You_Join}
                </p>
              </div>
              <div className="text-gray-700 text-base font-semibold md:w-3/4">
                <p>{translations[selectedLanguage].Openining_message1}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-start">
            <button
              className="bg-white text-black border-2 border-custom-red px-8 py-3 font-bold hover:bg-custom-red hover:text-white transition-colors duration-300 ml-4 md:ml-0 whitespace-nowrap"
              onClick={handleViewCurrentOpenings}
            >
              {translations[selectedLanguage]?.View_Current_Openings ||
                "View Current Openings"}
            </button>
          </div>
        </div>
      </div>

      {/* Opening Section END */}
    </div>
  );
}

export default AboutUs;
