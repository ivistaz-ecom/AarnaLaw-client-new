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

  const handleServiceButtonClick = () => {
    navigate("/practiceArea");
  };

  const handleOurFirmButtonClick = () => {
    navigate("/aboutus");
  };

  return (
    <div className="mx-auto flex flex-col-reverse mb-14 md:flex-row">
      <div id="2" className="bg-white" style={{ marginLeft: '130px' }}> {/* Moved content 10 units right */}
     
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between md:w-3/4 md:ml-10 px-5">
          <motion.div
            className="w-full md:w-1/2 mb-4 md:mb-0"
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            style={{ marginRight: '15px', marginLeft: '30px' }}
          >
            <img
              src={legacyImg}
              className="w-full h-auto mx-auto rounded-md shadow-lg"
              alt="legacy"
              loading="lazy"
              style={{ width: "100%", maxHeight: "110%" }}
            />
          </motion.div>

          <motion.div
            className="w-full md:w-2/5 text-left"
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            style={{ marginRight: '30px' }}
          >
            <p className="text-custom-blue text-2xl font-bold">
              {translations[selectedLanguage].Our_Legacy}
            </p>
            <div className="text-custom-red text-4xl font-semibold mt-4 md:mt-0">
              <p>{translations[selectedLanguage].Legacy_HMessage1}</p>
            </div>
            <div className="text-custom-gray mt-4 md:mt-0">
              <p>{translations[selectedLanguage].Legacy_Message1}</p>
            </div>
            <div className="flex items-center mt-4">
              <button
                onClick={handleOurFirmButtonClick}
                className="border border-custom-blue px-4 py-2 text-custom-blue hover:bg-custom-blue hover:text-white mt-4 md:mt-0"
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
