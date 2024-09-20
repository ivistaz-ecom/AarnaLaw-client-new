import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import AutomobileIndustryimg from "../../images/Industries/Automotive-Industry-banner.jpg";
import IndustryList from "./IndustryList";
import ContactForm from "../practice-area/ContactForm";
import './Industries.css';

const translations = {
  ar: require('../../Components/json/Industries/ar.json'),
  de: require('../../Components/json/Industries/de.json'),
  en: require('../../Components/json/Industries/en.json'),
  es: require('../../Components/json/Industries/es.json'),
  fr: require('../../Components/json/Industries/fr.json'),
  gu: require('../../Components/json/Industries/gu.json'),
  hi: require('../../Components/json/Industries/hi.json'),
  ja: require('../../Components/json/Industries/ja.json'),
  kn: require('../../Components/json/Industries/kn.json'),
  ko: require('../../Components/json/Industries/ko.json'),
  ml: require('../../Components/json/Industries/ml.json'),
  ru: require('../../Components/json/Industries/ru.json'),
  ta: require('../../Components/json/Industries/ta.json'),
  tel: require('../../Components/json/Industries/tel.json'),
  zh: require('../../Components/json/Industries/zh.json'),
};

function AutomobileIndustry() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedIndustry, setSelectedIndustry] = useState(translations[selectedLanguage].Automotive_Industry);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isAutomobileIndustry = location.search.includes("Industryparam=automotiveIndustry");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  useEffect(() => {
    setSelectedIndustry(translations[selectedLanguage].Automotive_Industry);
  }, [selectedLanguage]);

  const selectIndustry = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="industry-container">
      <header className="industry-header">
        <img
          src={AutomobileIndustryimg}
          className="industry-header-image"
          alt="Automobile Industry"
        />
      </header>

      <div className="industry-content">
        <div className="industry-dropdown">
          <IndustryList
            selectIndustry={selectIndustry}
            defaultItem={isAutomobileIndustry ? translations[selectedLanguage].Automotive_Industry : selectedIndustry}
          />
        </div>

        <div className="industry-description">
          <p>{translations[selectedLanguage].Automotive_Ind_Messpara1}</p>
          <p>{translations[selectedLanguage].Automotive_Ind_Messpara2}</p>
          <p>{translations[selectedLanguage].Automotive_Ind_Messpara3}</p>
          <p>{translations[selectedLanguage].Automotive_Ind_Messpara4}</p>
        </div>

        <div className="industry-list">
          <p>{translations[selectedLanguage].Automotive_Ind_MessListTitle}</p>
          <ul>
            <li>{translations[selectedLanguage].Automotive_Ind_MessList1}</li>
          </ul>
        </div>

        <div className="industry-contact">
          <button onClick={handleContactClick} className="contact-button">
            {translations[selectedLanguage].Contact_Our_Experts}
          </button>
        </div>
      </div>

      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default AutomobileIndustry;
