import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../Components/LanguageContext";
import Taxationimg from "../../images/Industries/Taxation-banner.jpg";
import { useLocation } from "react-router-dom";
import IndustryList from "./IndustryList";
import ContactForm from "../practice-area/ContactForm";
import './Industries.css'; // Import the Industries.css for styles

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

function Taxation() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedIndustry, setSelectedIndustry] = useState(translations[selectedLanguage].Direct_Indirect_Taxation);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isTaxationIndustry = location.search.includes("Industryparam=taxation;");

  const selectIndustry = (industry) => {
    setSelectedIndustry(industry);
  };

  useEffect(() => {
    setSelectedIndustry(translations[selectedLanguage].Direct_Indirect_Taxation);
  }, [selectedLanguage]);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="industry-container">
      {/* Aviation industry banner */}
      <header className="industry-header">
        <img
          src={Taxationimg}
          className="industry-header-image"
          alt="Taxation"
        />
      </header>

      <div className="industry-content">
        {/* Dropdown to select different industries */}
        <div className="industry-dropdown">
          <IndustryList
            selectIndustry={selectIndustry}
            defaultItem={isTaxationIndustry ? translations[selectedLanguage].Aviation : selectedIndustry}
          />
        </div>

        {/* Aviation industry description */}
        <div className="industry-description">
          <p>{translations[selectedLanguage].Taxation_Messpara1}</p>
          <p>{translations[selectedLanguage].Taxation_Messpara2}</p>
          
        </div>

        {/* List of services/offerings in the aviation industry */}
        <div className="industry-list">
          <ul>
            <li>{translations[selectedLanguage].Taxation_MessList1}</li>
            <li>{translations[selectedLanguage].Taxation_MessList2}</li>
            <li>{translations[selectedLanguage].Taxation_MessList3}</li>
            <li>{translations[selectedLanguage].Taxation_MessList4}</li>
            <li>{translations[selectedLanguage].Taxation_MessList5}</li>
            <li>{translations[selectedLanguage].Taxation_MessList6}</li>
            <li>{translations[selectedLanguage].Taxation_MessList7}</li>
            <li>{translations[selectedLanguage].Taxation_MessList8}</li>
          </ul>
        </div>

        {/* Button to contact experts */}
        <div className="industry-contact">
          <button onClick={handleContactClick} className="contact-button">
            {translations[selectedLanguage].Contact_Our_Experts}
          </button>
        </div>
      </div>

      {/* Conditionally render the contact form */}
      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default Taxation;
