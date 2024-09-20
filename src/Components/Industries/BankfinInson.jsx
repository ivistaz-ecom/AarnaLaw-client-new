import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import Bankfinbannerimg from "../../images/Industries/FinancialServicesimg.jpg";
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

function BankfinInson() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedIndustry, setSelectedIndustry] = useState(translations[selectedLanguage].Financial_Services);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isbankruptcyInbIndustry = location.search.includes("Industryparam=bankfinInson");

  useEffect(() => {
    setSelectedIndustry(translations[selectedLanguage].Financial_Services);
  }, [selectedLanguage]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

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
          src={Bankfinbannerimg}
          className="industry-header-image"
          alt="Bank, Finance & Insolvency Industry"
        />
      </header>

      <div className="industry-content">
        <div className="industry-dropdown">
          <IndustryList
            selectIndustry={selectIndustry}
            defaultItem={isbankruptcyInbIndustry ? translations[selectedLanguage].Financial_Services : selectedIndustry}
          />
        </div>

        <div className="industry-description">
          <p>{translations[selectedLanguage].FS_Messpara1}</p>
          <p>{translations[selectedLanguage].FS_Messpara2}</p>
          <p>{translations[selectedLanguage].FS_Messpara3}</p>
          <p>{translations[selectedLanguage].FS_Messpara4}</p>
          <p>{translations[selectedLanguage].FS_Messpara5}</p>
        </div>

        <div className="industry-list">
          <ul>
            <li>{translations[selectedLanguage].FS_MessList6}</li>
            <li>{translations[selectedLanguage].FS_MessList7}</li>
            <li>{translations[selectedLanguage].FS_MessList8}</li>
            <li>{translations[selectedLanguage].FS_MessList9}</li>
            <li>{translations[selectedLanguage].FS_MessList10}</li>
            <li>{translations[selectedLanguage].FS_MessList11}</li>
            <li>{translations[selectedLanguage].FS_MessList12}</li>
            <li>{translations[selectedLanguage].FS_MessList13}</li>
            <li>{translations[selectedLanguage].FS_MessList14}</li>
            <li>{translations[selectedLanguage].FS_MessList15}</li>
            <li>{translations[selectedLanguage].FS_MessList16}</li>
            <li>{translations[selectedLanguage].FS_MessList17}</li>
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

export default BankfinInson;
