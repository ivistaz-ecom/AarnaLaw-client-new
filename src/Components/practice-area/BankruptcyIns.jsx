import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import BankruptcyInsimg from "../../images/PracticeArea/Bankruptcy-Restructuring-Insolvency.jpg";
import Shreyasimg from "../../images/Shreyas.png";
import PunthiShahimg from "../../images/Punthi-Shah.png";
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

function BankruptcyIns() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(translations[selectedLanguage].Bankruptcy_Restructuring_and_insolvency);
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isBankruptcyIns = location.search.includes("PracticeAreaparam=bankruptcy");

  useEffect(() => {
    setSelectedPracticeArea(translations[selectedLanguage].Bankruptcy_Restructuring_and_insolvency);
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
          src={BankruptcyInsimg}
          className="w-full h-full object-cover rounded-md"
          alt="Bank"
        />
      </header>
      <div className="practice-area-content">
        <div className="practice-area-main">
          <div className="practice-area-dropdown">
            <PracticeAreaList
              selectPracticeArea={selectPracticeArea}
              defaultItem={isBankruptcyIns ? translations[selectedLanguage].Bankruptcy_Restructuring_and_insolvency : selectedPracticeArea}
            />
          </div>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Who_we_represent}</h2>
            <ul className="practice-area-list">
              <li className="practice-area-text">{translations[selectedLanguage].bank_para1}</li>
              <br></br>
              <li className="practice-area-text">{translations[selectedLanguage].bank_para12}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].What_we_do}</h2>
            <p className="practice-area-text-workexp">{translations[selectedLanguage].Our_experience_includes}</p>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].bank_para21}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].Bank_para22}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].Bank_para23}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].bank_para24}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].Bank_para25}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].Bank_para26}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <p className="practice-area-text practice-area-text-large">{translations[selectedLanguage].Our_Recent_experience_includes}</p>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].Bank_para31}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].Bank_para32}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].Bank_para33}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].Bank_para34}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Why_choose_us}</h2>
            <p className="practice-area-text">{translations[selectedLanguage].Bank_para4}</p>
          </section>
        </div>

        <aside className="practice-area-sidebar">
          
          <div className="practice-area-profile">

          <div className="practice-area-profile">
          <div className="practice-area-profile-image-container">
            <img src={Shreyasimg} alt="Shreyas" className="practice-area-profile-image" />
          </div>
          <p className="practice-area-profile-name">{translations[selectedLanguage].Shreyas_Jayasimha}</p>
          <p className="practice-area-profile-title">{translations[selectedLanguage].Shreyas_Jayasimha_role}</p>
        </div>
        
        <div className="practice-area-profile">
          
            <div className="practice-area-profile-image-container">
              <img src={PunthiShahimg} alt="Kamala" className="practice-area-profile-image" />
            </div>
            <p className="practice-area-profile-name">{translations[selectedLanguage].Punthi_Shah}</p>
            <p className="practice-area-profile-title">{translations[selectedLanguage].Advocate}</p>
          </div>
        
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

export default BankruptcyIns;