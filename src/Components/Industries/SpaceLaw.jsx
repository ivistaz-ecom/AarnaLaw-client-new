import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import Shippingimg from "../../images/Industries/Shipping-Maritime-Law-banner.jpg";
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

function ShippingMaritime() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedIndustry, setSelectedIndustry] = useState(translations[selectedLanguage].Shipping_Maritime_Law);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isShippingMaritime = location.search.includes("Industryparam=shippingMaritime");

  useEffect(() => {
    setSelectedIndustry(translations[selectedLanguage].Shipping_Maritime_Law);
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
          src={Shippingimg}
          className="industry-header-image"
          alt="Shipping & Maritime Law"
        />
      </header>

      <div className="industry-content">
        <div className="industry-dropdown">
          <IndustryList
            selectIndustry={selectIndustry}
            defaultItem={isShippingMaritime ? translations[selectedLanguage].Shipping_Maritime_Law : selectedIndustry}
          />
        </div>

        <div className="industry-description">
          <p>{translations[selectedLanguage].Shipping_Messpara1}</p>
          <p>{translations[selectedLanguage].Shipping_Messpara2}</p>
          <p>{translations[selectedLanguage].Shipping_Messpara3}</p>
          <p>{translations[selectedLanguage].Shipping_Messpara4}</p>
        </div>

        <div className="industry-list">
          <ul>
            <li>{translations[selectedLanguage].Shipping_MessList1}</li>
            <li>{translations[selectedLanguage].Shipping_MessList2}</li>
            <li>{translations[selectedLanguage].Shipping_MessList3}</li>
            <li>{translations[selectedLanguage].Shipping_MessList4}</li>
            <li>{translations[selectedLanguage].Shipping_MessList5}</li>
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

export default ShippingMaritime;
