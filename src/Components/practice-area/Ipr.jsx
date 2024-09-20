import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import iprimg from "../../images/PracticeArea/Intellectual-Propertybanner.jpg";
import Spandanaimg from "../../images/Spandana.png";
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

function Ipr() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(translations[selectedLanguage].Intellectual_Property);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isipr = location.search.includes("PracticeAreaparam=iprn");

  useEffect(() => {
    setSelectedPracticeArea(translations[selectedLanguage].Intellectual_Property);
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
          src={iprimg}
          className="w-full h-full object-cover rounded-md"
          alt="IPR Law"
        />
      </header>

      <div className="practice-area-content">
        <div className="practice-area-main">
          <div className="practice-area-dropdown">
            <PracticeAreaList
              selectPracticeArea={selectPracticeArea}
              defaultItem={isipr ? translations[selectedLanguage].Intellectual_Property : selectedPracticeArea}
            />
          </div>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Who_we_represent}</h2>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para1}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para2}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].What_we_do}</h2>
            <p className="practice-area-text">{translations[selectedLanguage].IPR_para2_1}</p>
          </section>

          <section className="practice-area-section">
            <h3 className="practice-area-subtitle-small">{translations[selectedLanguage].Our_services_include}</h3>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para31}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para32}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para33}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para34}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para35}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para36}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para37}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para38}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h3 className="practice-area-subtitle-small">{translations[selectedLanguage].Recent_experience_includes}</h3>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para41}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para42}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IPR_para43}</li>
            </ul>
          </section>

          <p className="practice-area-further-info">{translations[selectedLanguage].further_Information}</p>
        </div>

        <aside className="practice-area-sidebar">

        <div className="practice-area-profile">
            <div className="practice-area-profile-image-container">
              <img src={Spandanaimg} alt="Spandana" className="practice-area-profile-image" />
            </div>
            <p className="practice-area-profile-name">{translations[selectedLanguage].Spandana_Ashwath}</p>
            <p className="practice-area-profile-title">{translations[selectedLanguage].Advocate}</p>
          </div>

          <div className="practice-area-profile">
            <div className="practice-area-profile-image-container">
              <img src={Kamalaimg} alt="Kamala" className="practice-area-profile-image" />
            </div>
            <p className="practice-area-profile-name">{translations[selectedLanguage].Kamala_Naganand}</p>
            <p className="practice-area-profile-title">{translations[selectedLanguage].Counsel_Mediator}</p>
          </div>
         
          <div className="practice-area-contact">
            <button onClick={handleContactClick} className="practice-area-contact-button">
              {translations[selectedLanguage].Contact_partner}
            </button>
          </div>
        </aside>
      </div>

      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default Ipr;
