import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import MediaTelecommunicationsimg from "../../images/Industries/Media-Telecommunications-banner.jpg";
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

function MediaTelecommunications() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedIndustry, setSelectedIndustry] = useState(translations[selectedLanguage].Media_Telecommunications);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isMediaTelecommunications = location.search.includes("Industryparam=mediaTelecommunications");

  useEffect(() => {
    setSelectedIndustry(translations[selectedLanguage].Media_Telecommunications);
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
          src={MediaTelecommunicationsimg}
          className="industry-header-image"
          alt="Media & Telecommunications Industry"
        />
      </header>

      <div className="industry-content">
        <div className="industry-dropdown">
          <IndustryList
            selectIndustry={selectIndustry}
            defaultItem={isMediaTelecommunications ? translations[selectedLanguage].Media_Telecommunications : selectedIndustry}
          />
        </div>

        <div className="industry-description">
          <p>{translations[selectedLanguage].Media_tel__Messpara1}</p>
          <p>{translations[selectedLanguage].Media_tel__Messpara2}</p>
          <p>{translations[selectedLanguage].Media_tel__Messpara3}</p>
        </div>

        <div className="industry-list">
          <ul>
            <li>{translations[selectedLanguage].Media_tel_MessList1}</li>
            <li>{translations[selectedLanguage].Media_tel_MessList2}</li>
            <li>{translations[selectedLanguage].Media_tel_MessList3}</li>
            <li>{translations[selectedLanguage].Media_tel_MessList4}</li>
            <li>{translations[selectedLanguage].Media_tel_MessList5}</li>
            <li>{translations[selectedLanguage].Media_tel_MessList6}</li>
            <li>{translations[selectedLanguage].Media_tel_MessList7}</li>
            <li>{translations[selectedLanguage].Media_tel_MessList8}</li>
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

export default MediaTelecommunications;
