import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import Demosticarbimg from "../../images/PracticeArea/Domestic-Arbitration.jpg";
import Shreyasimg from "../../images/Shreyas.png";
import Apoorvaimg from "../../images/Apoorva.png";
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

function ArbitrationsMediation() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(translations[selectedLanguage].Domestic_Arbitration_and_Mediation);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isarbitrationsMediation = location.search.includes("PracticeAreaparam=arbitrationsMediation");

  useEffect(() => {
    setSelectedPracticeArea(translations[selectedLanguage].Domestic_Arbitration_and_Mediation);
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
          src={Demosticarbimg}
          className="w-full h-full object-cover rounded-md"
          alt="Arbitration"
        />
      </header>
      <div className="practice-area-content">
        <div className="practice-area-main">
          <div className="practice-area-dropdown">
            <PracticeAreaList
              selectPracticeArea={selectPracticeArea}
              defaultItem={isarbitrationsMediation ? translations[selectedLanguage].Domestic_Arbitration_and_Mediation : selectedPracticeArea}
            />
          </div>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Who_we_represent}</h2>
            <p className="practice-area-text">{translations[selectedLanguage].DAM_para1}</p>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].What_we_do}</h2>
            <p className="practice-area-text">{translations[selectedLanguage].DAM_para21}</p>
            <p className="practice-area-text">{translations[selectedLanguage].DAM_para22}</p>
            <p className="practice-area-text">{translations[selectedLanguage].DAM_para23}</p>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Our_experience_includes}</h2>
            <p className="practice-area-text practice-area-text-large">{translations[selectedLanguage].Arbitration}</p>
            <ol className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_Arb_para1}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_Arb_para2}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_Arb_para3}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_Arb_para4}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_Arb_para5}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_Arb_para6}</li>
            </ol>

            <p className="practice-area-text practice-area-text-large">{translations[selectedLanguage].Mediation}</p>
            <ol className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_Med_para1}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_med_para2}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_med_para3}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].DAM_Med_para4}</li>
            </ol>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Why_choose_us}</h2>
            <p className="practice-area-text">{translations[selectedLanguage].DAM_para5}</p>
            <p className="practice-area-further-info">{translations[selectedLanguage].further_Information}</p>
          </section>
        </div>

        <aside className="practice-area-sidebar">
        <div className="practice-area-profile">
          <div className="practice-area-profile-image-container">
            <img src={Shreyasimg} alt="Kamala" className="practice-area-profile-image" />
          </div>
          <p className="practice-area-profile-name">{translations[selectedLanguage].Shreyas_Jayasimha}</p>
          <p className="practice-area-profile-title">{translations[selectedLanguage].Shreyas_Jayasimha_role}</p>
        </div>

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
      </div>

      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default ArbitrationsMediation;
