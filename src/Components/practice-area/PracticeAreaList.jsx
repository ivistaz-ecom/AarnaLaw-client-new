import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import './practiceclass.css';

const translations = {
  ar: require('../json/PracticeArea/ar.json'),
  de: require('../json/PracticeArea/de.json'),
  en: require('../json/PracticeArea/en.json'),
  es: require('../json/PracticeArea/es.json'),
  fr: require('../json/PracticeArea/fr.json'),
  gu: require('../json/PracticeArea/gu.json'),
  hi: require('../json/PracticeArea/hi.json'),
  ja: require('../json/PracticeArea/ja.json'),
  kn: require('../json/PracticeArea/kn.json'),
  ko: require('../json/PracticeArea/ko.json'),
  ml: require('../json/PracticeArea/ml.json'),
  ru: require('../json/PracticeArea/ru.json'),
  ta: require('../json/PracticeArea/ta.json'),
  tel: require('../json/PracticeArea/tel.json'),
  zh: require('../json/PracticeArea/zh.json'),
};

function PracticeAreaList({ selectPracticeArea = () => {}, defaultItem = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [practiceAreaParam, setPracticeAreaParam] = useState("");
  const navigate = useNavigate();
  const { selectedLanguage } = useContext(LanguageContext);

  const practiceAreaKeys = [
    "art_law",
    "Bankruptcy_Restructuring_and_insolvency",
    "Corporate_Advisory",
    "Domestic_Arbitration_and_Mediation",
    "Fraud_asset_tracing_and_enforcement",
    "Intellectual_Property",
    "International_Dispute_Resolution",
    "Low_Bono",
    "Private_Client_Practice",
    "Real_Estate",
    "Risk_Management_and_Compliance",
    "Trial_and_Litigation",
  ];

  const practiceAreas = practiceAreaKeys.map(key => translations[selectedLanguage][key]);

  useEffect(() => {
    setPracticeAreaParam(defaultItem || translations[selectedLanguage]?.Practice_Areas);
  }, [selectedLanguage, defaultItem]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePracticeAreaChange = (practiceArea) => {
    setPracticeAreaParam(practiceArea);
    selectPracticeArea(practiceArea);
    toggleDropdown();

    const routeMap = {
      [translations[selectedLanguage].art_law]: "/practice-area/art-law",
      [translations[selectedLanguage].Bankruptcy_Restructuring_and_insolvency]: "/practice-area/bankruptcy-ins",
      [translations[selectedLanguage].Corporate_Advisory]: "/practice-area/corporate-advisory",
      [translations[selectedLanguage].Domestic_Arbitration_and_Mediation]: "/practice-area/arbitrations-mediation",
      [translations[selectedLanguage].Fraud_asset_tracing_and_enforcement]: "/practice-area/fraud",
      [translations[selectedLanguage].Intellectual_Property]: "/practice-area/ipr",
      [translations[selectedLanguage].International_Dispute_Resolution]: "/practice-area/international-disputes",
      [translations[selectedLanguage].Low_Bono]: "/practice-area/lowbono",
      [translations[selectedLanguage].Private_Client_Practice]: "/practice-area/private-clients",
      [translations[selectedLanguage].Real_Estate]: "/practice-area/real-estate",
      [translations[selectedLanguage].Risk_Management_and_Compliance]: "/practice-area/risk-management",
      [translations[selectedLanguage].Trial_and_Litigation]: "/practice-area/trial-litigation",
    };

    navigate(routeMap[practiceArea]);
  };

  return (
    <div className="practice-area-dropdown">
      <button
        type="button"
        className="practice-area-dropdown-button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className={`practice-area-dropdown-text ${practiceAreaParam ? 'practice-area-dropdown-text-selected' : ''}`}>
          {practiceAreaParam || defaultItem || translations[selectedLanguage]?.Practice_Areas}
        </span>
        <span className="practice-area-dropdown-arrow">{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
      </button>
      {isOpen && (
        <div className="practice-area-dropdown-menu">
          {practiceAreas.map((practiceArea, index) => (
            <button
              key={index}
              onClick={() => handlePracticeAreaChange(practiceArea)}
              className={`practice-area-dropdown-item ${practiceAreaParam === practiceArea ? 'practice-area-dropdown-item-selected' : ''}`}
            >
              {practiceArea}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PracticeAreaList;