import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import ConstructionImg from "../../images/Industries/Construction.jpg";
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

function Construction() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedIndustry, setSelectedIndustry] = useState(translations[selectedLanguage].Construction_Engineering);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isConstructionIndustry = location.search.includes("Industryparam=construction");

  useEffect(() => {
    setSelectedIndustry(translations[selectedLanguage].Construction_Engineering);
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
          src={ConstructionImg}
          className="industry-header-image"
          alt="Construction Industry"
        />
      </header>

      <div className="industry-content">
        <div className="industry-dropdown">
          <IndustryList
            selectIndustry={selectIndustry}
            defaultItem={isConstructionIndustry ? translations[selectedLanguage].Construction_Engineering : selectedIndustry}
          />
        </div>

        <div className="industry-description">
          <h2 className="industry-subtitle">{translations[selectedLanguage].Who_we_represent}</h2>
          <p>{translations[selectedLanguage].Construction_Messpara1}</p>
          <p>{translations[selectedLanguage].Construction_Messpara2}</p>

          <h2 className="industry-subtitle">{translations[selectedLanguage].What_we_do}</h2>
          <p>{translations[selectedLanguage].We_have_experience}</p>
        </div>

        <div className="industry-list">
          <ul>
            <li>{translations[selectedLanguage].Construction_MessList1}</li>
            <li>{translations[selectedLanguage].Construction_MessList2}</li>
            <li>{translations[selectedLanguage].Construction_MessList3}</li>
            <li>{translations[selectedLanguage].Construction_MessList4}</li>
          </ul>
        </div>

        <div className="industry-description">
          <h2 className="industry-subtitle">{translations[selectedLanguage].Our_work_includes}</h2>
        </div>

        <div className="industry-list">
          <ul>
            <li>{translations[selectedLanguage].Construction_MessList5}</li>
            <li>{translations[selectedLanguage].Construction_MessList6}</li>
            <li>{translations[selectedLanguage].Construction_MessList7}</li>
            <li>{translations[selectedLanguage].Construction_MessList8}</li>
            <li>{translations[selectedLanguage].Construction_MessList9}</li>
          </ul>
        </div>

        <div className="industry-description">
          <h2 className="industry-subtitle">{translations[selectedLanguage].Why_choose_us}</h2>
          <p>{translations[selectedLanguage].Why_Chose_us_desc}</p>
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

export default Construction;