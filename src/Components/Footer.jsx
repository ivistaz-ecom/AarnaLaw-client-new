import  { useState, useEffect, useContext } from "react";
import { FaLinkedin, FaSpotify } from "react-icons/fa";
import ScrollToTop from "scroll-to-top-react";
import AarnawhiteLogo from "../images/logo-white.svg";
import BacktoTop from "../images/Back_to_top.svg";
import SubscribeNewsletter from "../Components/SubscribeNewsletter"; 
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../Components/LanguageContext";

export const linkedIn = <FaLinkedin />;
export const spotify = <FaSpotify />;


const Footer = () => {
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);
  
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const location = useLocation();

  const translations = {
    ar: require('../Components/json/Navbar/ar.json'),
    de: require('../Components/json/Navbar/de.json'),
    en: require('../Components/json/Navbar/en.json'),
    es: require('../Components/json/Navbar/es.json'),
    fr: require('../Components/json/Navbar/fr.json'),
    gu: require('../Components/json/Navbar/gu.json'),
    hi: require('../Components/json/Navbar/hi.json'),
    ja: require('../Components/json/Navbar/ja.json'),
    kn: require('../Components/json/Navbar/kn.json'),
    ko: require('../Components/json/Navbar/ko.json'),
    ml: require('../Components/json/Navbar/ml.json'),
    ru: require('../Components/json/Navbar/ru.json'),
    ta: require('../Components/json/Navbar/ta.json'),
    tel: require('../Components/json/Navbar/tel.json'),
    zh: require('../Components/json/Navbar/zh.json'),
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const langParam = queryParams.get("lang");
    if (langParam && Object.keys(translations).includes(langParam)) {
      setSelectedLanguage(langParam);
    }
  }, [location.search, translations, setSelectedLanguage]);

  const handleSubscribeClick = () => {
    setShowSubscribeForm(true);
  };

  const handleSubscribeNewsLetter = () => {
    setShowSubscribeForm(false);
  };


  return (
    <>
       <style>
        {`
        .scroll_top.visible {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        .scroll_top {
            position: fixed;
            right: 2rem;
            bottom: 1rem;
            cursor: pointer;
            border-radius: 50px;
            background : #1E396A;
            border: 1px solid #ffffff;
            padding: 0.25rem;
            opacity: 0;
            transform: translateY(100px);
            transition: all 0.5s ease;
            margin: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .scroll_top img {
            width: 50px; 
            height: 50px;
        }
        .scroll_top:hover {
            transform: scale(0.9);
        }
        `}
      </style>
      <ScrollToTop
        displayType={"text"}
        className="scroll_top"
        text={<img src={BacktoTop} alt="Scroll to top" />}
      />


      <div className="bg-custom-blue px-5 md:px-20 py-7">
        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <img
              src={AarnawhiteLogo}
              width={200}
              height={60}
              alt="Aarna Law Logo"
              className="w-24 sm:w-40 md:w-52"
            />
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/aarna-law1/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white text-sm md:text-xl flex items-center"
              >
                <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 mr-2" />
                LinkedIn
              </a>
              <span className="font-bold text-white text-lg md:text-xl">|</span>
              <a
                href="https://open.spotify.com/show/2FYjq2t4nrx3bT9UMwN55h"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white text-sm md:text-xl flex items-center"
              >
                <FaSpotify className="w-8 h-8 md:w-10 md:h-10 mr-2" />
                Spotify
              </a>
            </div>
          </div>
          <div>
            <button onClick={handleSubscribeClick}
            className="border border-custom-red text-xs md:text-base md:px-6 px-2 py-2 ml-4 mt-2 text-white hover:bg-white hover:border-white hover:text-custom-red">
              Subscribe to newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#091F48] md:px-20 py-5">
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="flex gap-2">
            <span className="text-white text-xs md:text-sm flex items-center">
              Privacy Policy
            </span>
            <span className="text-white text-xs md:text-sm font-bold">|</span>
            <span className="text-white text-xs md:text-sm flex items-center">
              Terms & Conditions
            </span>
            <span className="text-white text-xs md:text-sm font-bold">|</span>
            <span className="text-white text-xs md:text-sm flex items-center">
              Disclaimer
            </span>
          </div>
          <span className="text-white text-xs md:text-sm">
            © 2024 Aarna Law. All Rights Reserved
          </span>
        </div>
      </div>
      {showSubscribeForm && <SubscribeNewsletter handleClose={handleSubscribeNewsLetter} />}
    </>
  );
};

export default Footer;
