import React, { useContext } from "react";
import legacyImg from "../Home/Images/Our_legacy.jpg";
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

const OurLegacy = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();


  const handleOurFirmButtonClick = () => {
    navigate("/aboutus");
  };

  return (
    <div className="container mx-auto flex flex-col-reverse mb-14 md:flex-row">
      <div id="2" className="bg-white md:ml-32 md:pl-15"> {/* Adjust margin and padding */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between px-5">
          <motion.div
            className="w-full md:w-1/2 mb-4 md:mb-0 ml-0 md:ml-4" // Adjusted ml-9 for mobile view and md:ml-4 to reset margin in desktop view
            initial={{ opacity: 0, x: '10vw' }} // Keep initial position unchanged
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <img
              src={legacyImg}
              className="w-full h-auto mx-auto rounded-md shadow-lg"
              alt="legacy"
              loading="lazy"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </motion.div>

          <motion.div
            className="w-full md:w-2/5 text-left md:ml-15"
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <p className="text-custom-blue text-2xl font-bold">
              {translations[selectedLanguage].Our_Legacy}
            </p>
            <br></br>
            <div className="text-custom-red text-4xl font-semibold mt-2 md:mt-0">
              <p>{translations[selectedLanguage].Legacy_HMessage1}</p>
            </div>
            <br></br>
            <div className="text-custom-gray mt-2 md:mt-0">
              <p>{translations[selectedLanguage].Legacy_Message1}</p>
            </div>
            <br></br>
            <div className="flex items-center mt-4">
              <button
                onClick={handleOurFirmButtonClick}
                className="border border-custom-blue px-4 py-2 text-custom-blue hover:bg-custom-blue hover:text-white"
              >
                {translations[selectedLanguage].Our_Firm}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurLegacy;
