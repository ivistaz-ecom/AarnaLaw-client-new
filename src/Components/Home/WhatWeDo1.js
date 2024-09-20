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
    navigate("/practiceArea");
  };

  return (
    <div className="mx-auto flex flex-col md:flex-row">
      {/* What We Do Section */}
      <div id="2" className="bg-white" style={{ marginLeft: '70px' }}>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:w-4/5 md:ml-10">
          <motion.div
            className="w-full md:w-1/2 mb-0"
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            style={{ marginRight: '10px', marginLeft: '20px' }} // Added marginLeft to move image right
          >
            <img
              src={whatwedoImg}
              className="w-full h-auto mx-auto rounded-md shadow-lg"
              alt="aboutus"
              loading="lazy"
              style={{ maxWidth: "90%", maxHeight: "auto", width: "100%" }}
            />
          </motion.div>

          <motion.div
            className="w-full md:w-2/5 text-left" // Reduced width by 20%
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            style={{ marginLeft: '20px' }}
          >
            <p className="text-custom-red text-2xl font-bold">
              {translations[selectedLanguage].WHAT_WE_DO}
            </p>
            <div className="text-blue-900 font-bold text-3xl">
              <h2 className="text-custom-blue text-4xl font-semibold mt-4 md:mt-0">
                {translations[selectedLanguage].WHAT_WE_DO_HMessage1}
              </h2>
            </div>
            <div>
              <p className="text-custom-gray mt-4 md:mt-0">
                {translations[selectedLanguage].WHAT_WE_DO_Message1}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <button
                onClick={handleServiceButtonClick}
                className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white mt-4 md:mt-0"
              >
                {translations[selectedLanguage].Our_Services}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
