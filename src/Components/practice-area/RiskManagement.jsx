import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import RiskManagementimg from "../../images/PracticeArea/RiskManagement.jpg";
import Manjushreeimg from "../../images/Manjushree.jpg";
import Shreyasimg from "../../images/Shreyas.png";
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

function RiskManagement() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(translations[selectedLanguage].Risk_Management_and_Compliance);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isRiskManagement = location.search.includes("PracticeAreaparam=riskManagement");

  useEffect(() => {
    setSelectedPracticeArea(translations[selectedLanguage].Risk_Management_and_Compliance);
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
          src={RiskManagementimg}
          className="w-full h-full object-cover rounded-md"
          alt="Risk Management"
        />
      </header>
      <div className="practice-area-content">
        <div className="practice-area-main">
          <div className="practice-area-dropdown">
            <PracticeAreaList
              selectPracticeArea={selectPracticeArea}
              defaultItem={isRiskManagement ? translations[selectedLanguage].Risk_Management_and_Compliance : selectedPracticeArea}
            />
          </div>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Who_we_represent}</h2>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para1}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para2}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].What_we_do}</h2>
            <h3 className="practice-area-subtitle-small">{translations[selectedLanguage].RMC_para2}</h3>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para21}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para22}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para23}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para24}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para25}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para26}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Why_choose_us}</h2>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para31}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para32}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].RMC_para33}</li>
            </ul>
            <p className="practice-area-further-info">{translations[selectedLanguage].further_Information}</p>
          </section>
        </div>

        <aside className="practice-area-sidebar">
        <div className="practice-area-profile">
            <div className="practice-area-profile-image-container">
              <img src={Shreyasimg} alt="Shreyas Jayasimha" className="practice-area-profile-image" />
            </div>
            <p className="practice-area-profile-name">{translations[selectedLanguage].Shreyas_Jayasimha}</p>
            <p className="practice-area-profile-title">{translations[selectedLanguage].Shreyas_Jayasimha_role}</p>
          </div>

          <div className="practice-area-profile">
            <div className="practice-area-profile-image-container">
              <img src={Manjushreeimg} alt="Manjushree" className="practice-area-profile-image" />
            </div>
            <p className="practice-area-profile-name">{translations[selectedLanguage].Manjushree_Somasundara}</p>
            <p className="practice-area-profile-title">{translations[selectedLanguage].Manjushree_Somasundara_role}</p>
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

export default RiskManagement;
