import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../LanguageContext";
import ArtLawimg from "../../images/PracticeArea/Art-Law.jpg";
import Kamalaimg from "../../images/Kamala.png";
import { useNavigate, useLocation } from "react-router-dom";
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

function ArtLaw() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(translations[selectedLanguage].art_law);
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isArtLaw = location.search.includes("PracticeAreaparam=artLaw");

  useEffect(() => {
    setSelectedPracticeArea(translations[selectedLanguage].art_law);
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
          src={ArtLawimg}
          className="w-full h-full object-cover rounded-md"
          alt="Art Law"
        />
      </header>

      <div className="practice-area-content">
        <div className="practice-area-main">
          <div className="practice-area-dropdown">
            <PracticeAreaList
              selectPracticeArea={selectPracticeArea}
              defaultItem={isArtLaw ? translations[selectedLanguage].art_law : selectedPracticeArea}
            />
          </div>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Who_we_represent}</h2>
            <p className="practice-area-text">
              {translations[selectedLanguage].Art_para1}
            </p>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].What_we_do}</h2>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">
                {translations[selectedLanguage].Art_para2_1}
              </li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Recent_experience_includes}</h2>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">
                {translations[selectedLanguage].Art_para3_1}
              </li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Why_choose_us}</h2>
            <p className="practice-area-text">
              {translations[selectedLanguage].Art_para4_1}
            </p>
            <p className="practice-area-further-info">
              {translations[selectedLanguage].further_Information}
            </p>
          </section>
        </div>

        <aside className="practice-area-sidebar">
          
          <div className="practice-area-profile">
            <div className="practice-area-profile-image-container">
              <img src={Kamalaimg} alt="Kamala" className="practice-area-profile-image" />
            </div>
            <p className="practice-area-profile-name">{translations[selectedLanguage].Kamala_Naganand}</p>
            <p className="practice-area-profile-title">{translations[selectedLanguage].Counsel_Mediator}</p>
          </div>
          
        
          <div className="practice-area-contact">
            <button
              onClick={handleContactClick}
              className="practice-area-contact-button"
            >
              {translations[selectedLanguage].Contact_partner}
            </button>
          </div>
        </aside>
      </div>

      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default ArtLaw;