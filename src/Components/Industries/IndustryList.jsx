import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from "../LanguageContext";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const translations = {
  ar: require('../../Components/json/Industries/ar.json'),
  en: require('../../Components/json/Industries/en.json'),
  es: require('../../Components/json/Industries/es.json'),
  fr: require('../../Components/json/Industries/fr.json'),
  hi: require('../../Components/json/Industries/hi.json'),
  ja: require('../../Components/json/Industries/ja.json'),
  kn: require('../../Components/json/Industries/kn.json'),
  ko: require('../../Components/json/Industries/ko.json'),
  ta: require('../../Components/json/Industries/ta.json'),
  tel: require('../../Components/json/Industries/tel.json'),
  zh: require('../../Components/json/Industries/zh.json'),
};

function IndustryList({ selectIndustry = () => {}, defaultItem = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { selectedLanguage } = useContext(LanguageContext);
  const [industriesParam, setIndustriesParam] = useState("");

  const industries = [
    "Automotive_Industry",
    "Aviation",
    "Construction_Engineering",
    "Corporate_Advisory",
    "Direct_Indirect_Taxation",
    "Environmenta_Law",
    "Energy_Oil_gas",
    "Financial_Services",
    "Foreign_Investment",
    "Healthcar_Industry",
    "IT_IOT_and_AI",
    "LifeScience_Pharmaceutical",
    "Media_Telecommunications",
    "Retail",
    "Shipping_Maritime_Law",
    "Space_Law",
    "Sports_Law"
  ].map(key => translations[selectedLanguage][key]);

  useEffect(() => {
    setIndustriesParam(defaultItem || translations[selectedLanguage].industries);
  }, [selectedLanguage, defaultItem]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleIndustriesChange = (industry) => {
    setIndustriesParam(industry);
    selectIndustry(industry);
    toggleDropdown();

    switch (industry) {
      case translations[selectedLanguage].Automotive_Industry:
        navigate("/industries/automotive-industry");
        break;
      case translations[selectedLanguage].Aviation:
        navigate("/industries/aviation");
        break;
      case translations[selectedLanguage].Construction_Engineering:
        navigate("/industries/construction");
        break;
      case translations[selectedLanguage].Corporate_Advisory:
        navigate("/industries/corporate-law");
        break;
      case translations[selectedLanguage].Direct_Indirect_Taxation:
        navigate("/industries/taxation");
        break;
      case translations[selectedLanguage].Environmenta_Law:
        navigate("/industries/environmental-law");
        break;
      case translations[selectedLanguage].Energy_Oil_gas:
        navigate("/industries/energy-oil-gas");
        break;
      case translations[selectedLanguage].Financial_Services:
        navigate("/industries/Financialservices");
        break;
      case translations[selectedLanguage].Foreign_Investment:
        navigate("/industries/foreign-investment");
        break;
      case translations[selectedLanguage].Healthcar_Industry:
        navigate("/industries/healthcare");
        break;
      case translations[selectedLanguage].IT_IOT_and_AI:
        navigate("/industries/it-iot-blockchain");
        break;
      case translations[selectedLanguage].LifeScience_Pharmaceutical:
        navigate("/industries/life-science-pharmaceuticals");
        break;
      case translations[selectedLanguage].Media_Telecommunications:
        navigate("/industries/media-telecommunications");
        break;
      case translations[selectedLanguage].Retail:
        navigate("/industries/retail");
        break;
      case translations[selectedLanguage].Shipping_Maritime_Law:
        navigate("/industries/shipping-maritime");
        break;
      case translations[selectedLanguage].Space_Law:
        navigate("/industries/space-law");
        break;
      case translations[selectedLanguage].Sports_Law:
        navigate("/industries/sports-law");
        break;
      default:
        break;
    }
  };

  return (
    <div className="dropdown inline-block relative w-full" style={{ marginLeft: '-1.5rem' }}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full px-4 py-2 text-lg font-medium text-bg-151C4A border-2 border-custom-red rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-custom-red"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className={`text-lg ${industriesParam ? 'text-blue-900 font-bold text-2xl' : ''}`}>
            {industriesParam || defaultItem || translations[selectedLanguage].industries}
          </span>
          <span className="ml-2">{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white border-2 border-indigo-500 ring-1 ring-black ring-opacity-5 overflow-y-auto max-h-60">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => handleIndustriesChange(industry)}
                className={`block px-4 py-2 text-medium font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-900 w-full text-left ${industriesParam === industry ? 'text-blue-900 font-bold text-2xl' : ''}`}
                role="menuitem"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default IndustryList;
