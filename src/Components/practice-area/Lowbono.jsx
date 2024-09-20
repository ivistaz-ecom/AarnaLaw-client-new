import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import lowbonoimg from "../../images/PracticeArea/Low-Bono-1.jpg";
import Apoorvaimg from "../../images/Apoorva.png";
import { useLocation } from "react-router-dom";
import PracticeAreaList from "./PracticeAreaList";
import ContactForm from "./ContactForm";
import './practiceclass.css';

const translations = {
  ar: require("../json/PracticeArea/ar.json"),
  de: require("../json/PracticeArea/de.json"),
  en: require("../json/PracticeArea/en.json"),
  es: require("../json/PracticeArea/es.json"),
  fr: require("../json/PracticeArea/fr.json"),
  gu: require("../json/PracticeArea/gu.json"),
  hi: require("../json/PracticeArea/hi.json"),
  ja: require("../json/PracticeArea/ja.json"),
  kn: require("../json/PracticeArea/kn.json"),
  ko: require("../json/PracticeArea/ko.json"),
  ml: require("../json/PracticeArea/ml.json"),
  ru: require("../json/PracticeArea/ru.json"),
  ta: require("../json/PracticeArea/ta.json"),
  tel: require("../json/PracticeArea/tel.json"),
  zh: require("../json/PracticeArea/zh.json"),
};

function Lowbono() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(translations[selectedLanguage].Low_Bono);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isLowBono = location.search.includes("PracticeAreaparam=Lowbono");

  useEffect(() => {
    setSelectedPracticeArea(translations[selectedLanguage].Low_Bono);
  }, [selectedLanguage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  const selectPracticeArea = (practiceArea) => {
    setSelectedPracticeArea(practiceArea);
  };

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="practice-area-container">
       <header className="w-full h-48 md:h-96 mb-8">
        <img
          src={lowbonoimg}
          className="w-full h-full object-cover rounded-md"
          alt="low bono"
        />
      </header>

      <div className="practice-area-content">
        <div className="practice-area-main">
          <div className="practice-area-dropdown">
            <PracticeAreaList
              selectPracticeArea={selectPracticeArea}
              defaultItem={isLowBono ? translations[selectedLanguage].Low_Bono : selectedPracticeArea}
            />
          </div>

          <section className="practice-area-section">
            <p className="practice-area-text">{translations[selectedLanguage].PB_para1}</p>
            <p className="practice-area-further-info">{translations[selectedLanguage].further_Information}</p>
          </section>
        </div>

        <aside className="practice-area-sidebar">
        <div className="practice-area-profile">
          <div className="practice-area-profile-image-container">
            <img src={Apoorvaimg} alt="Apoorva Guruprasad" className="practice-area-profile-image" />
          </div>
          <p className="practice-area-profile-name">{translations[selectedLanguage].Apoorva_Guruprasad}</p>
          <p className="practice-area-profile-title">{translations[selectedLanguage].Partner}</p>
        </div>
          <div className="practice-area-contact">
            <button onClick={handleContactClick} className="practice-area-contact-button">
              {translations[selectedLanguage].Contact_partner}
            </button>
          </div>
        </aside>
        <br></br>
      </div>

      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default Lowbono;