import React, { useState, useContext, useEffect } from "react"; 
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import Aviationbannerimg from "../../images/Industries/Aviation-banner.jpg";
import IndustryList from "./IndustryList";
import ContactForm from "../practice-area/ContactForm";
import './Industries.css';

// Importing translations for multiple languages
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

function Aviation() {
  // Accessing the selected language from LanguageContext
  const { selectedLanguage } = useContext(LanguageContext);

  // State to store selected industry details
  const [selectedIndustry, setSelectedIndustry] = useState(translations[selectedLanguage].Aviation);

  // State to control the visibility of the contact form
  const [showContactForm, setShowContactForm] = useState(false);

  // Get the location object to access URL parameters
  const location = useLocation();

  // Boolean to check if the current industry is aviation
  const isAviationIndustry = location.search.includes("Industryparam=aviation");

  // Scroll to top on location change (pathname or search)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  // Update the selected industry when language changes
  useEffect(() => {
    setSelectedIndustry(translations[selectedLanguage].Aviation);
  }, [selectedLanguage]);

  // Function to update selected industry
  const selectIndustry = (industry) => {
    setSelectedIndustry(industry);
  };

  // Show the contact form on button click
  const handleContactClick = () => {
    setShowContactForm(true);
  };

  // Close the contact form
  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="industry-container">
      {/* Aviation industry banner */}
      <header className="industry-header">
        <img
          src={Aviationbannerimg}
          className="industry-header-image"
          alt="Aviation"
        />
      </header>

      <div className="industry-content">
        {/* Dropdown to select different industries */}
        <div className="industry-dropdown">
          <IndustryList
            selectIndustry={selectIndustry}
            defaultItem={isAviationIndustry ? translations[selectedLanguage].Aviation : selectedIndustry}
          />
        </div>

        {/* Aviation industry description */}
        <div className="industry-description">
          <p>{translations[selectedLanguage].Aviation_In__Messpara1}</p>
          <p>{translations[selectedLanguage].Aviation_Ind_Messpara2}</p>
          <p>{translations[selectedLanguage].Aviation_Ind_Messpara3}</p>
          <p>{translations[selectedLanguage].Aviation_Ind_Messpara4}</p>
          <p>{translations[selectedLanguage].Aviation_Ind_Messpara5}</p>
        </div>

        {/* List of services/offerings in the aviation industry */}
        <div className="industry-list">
          <ul>
            <li>{translations[selectedLanguage].Aviation_Ind_MessList1}</li>
            <li>{translations[selectedLanguage].Aviation_Ind_MessList2}</li>
            <li>{translations[selectedLanguage].Aviation_Ind_MessList3}</li>
            <li>{translations[selectedLanguage].Aviation_Ind_MessList4}</li>
            <li>{translations[selectedLanguage].Aviation_Ind_MessList5}</li>
            <li>{translations[selectedLanguage].Aviation_Ind_MessList6}</li>
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

export default Aviation;
