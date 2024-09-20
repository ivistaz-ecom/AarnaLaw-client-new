import React, { useContext } from "react";
import whatwedoImg from "../Home/Images/What_we_do.jpg";
import { motion } from "framer-motion";
import { LanguageContext } from '../LanguageContext';
import { useNavigate } from 'react-router-dom';

const translations = {
  ar: require('../json/Home/ar.json'),
  de: require('../json/Home/de.json'),
  en: require('../json/Home/en.json'),
  es: require('../json/Home/es.json'),
  fr: require('../json/Home/fr.json'),
  gu: require('../json/Home/gu.json'),
  hi: require('../json/Home/hi.json'),
  ja: require('../json/Home/ja.json'),
  kn: require('../json/Home/kn.json'),
  ko: require('../json/Home/ko.json'),
  ml: require('../json/Home/ml.json'),
  ru: require('../json/Home/ru.json'),
  ta: require('../json/Home/ta.json'),
  tel: require('../json/Home/tel.json'),
  zh: require('../json/Home/zh.json'),
};

const WhatWeDo = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleServiceButtonClick = () => {
    navigate("/practice-area");
  };

  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row"> {/* Added margin for both mobile and desktop */}
      {/* What We Do Section */}
      <div id="2" className="bg-white w-full">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-5">
          <motion.div
            className="w-full md:w-1/2 mb-0 mx-auto"
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            style={{  }} // Moved image 10 more spaces right
          >
            <img
              src={whatwedoImg}
              className="w-full h-auto mx-auto rounded-md shadow-lg"
              alt="aboutus"
              loading="lazy"
              style={{ maxWidth: "94%", maxHeight: "100%" }}
            />    

          </motion.div>

          <motion.div
            className="w-full md:w-2/5 text-left md:ml-15 ml-0" // Added margin-left for mobile view
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <br></br>
            <p className="text-custom-red text-2xl font-bold ml-3">
              {translations[selectedLanguage].WHAT_WE_DO}
            </p>
            <br></br>
            <div className="text-custom-blue text-4xl font-semibold mt-4 md:mt-0  ml-3"> {/* Added text-justify */}
              <p>{translations[selectedLanguage].WHAT_WE_DO_HMessage1}</p>
            </div>
            <br></br>
            <div className="text-custom-gray mt-2 md:mt-0 text-justify ml-3"> {/* Added text-justify */}
              <p>{translations[selectedLanguage].WHAT_WE_DO_Message1}</p>
            </div>
            <br></br>
            <div className="flex items-center mt-2 ml-3">
              <button
                onClick={handleServiceButtonClick}
                className="border border-custom-red px-4 py-2 text-custom-red hover:bg-custom-red hover:text-white"
              >
                {translations[selectedLanguage].Our_Services}
              </button>
              
            </div>
            <br className="block md:hidden" /> {/* Added line break for mobile view */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
