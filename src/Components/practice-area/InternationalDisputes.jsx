import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import InternationalDisputeimg from "../../images/PracticeArea/International.jpg";
import Shreyasimg from "../../images/Shreyas.png";
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

function InternationalDisputes() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState(translations[selectedLanguage].International_Dispute_Resolution);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const isInternationalDisputes = location.search.includes("PracticeAreaparam=internationalDisputes");

  useEffect(() => {
    setSelectedPracticeArea(translations[selectedLanguage].International_Dispute_Resolution);
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
          src={InternationalDisputeimg}
          className="w-full h-full object-cover rounded-md"
          alt="AInternational Dispute"
        />
      </header>
      <div className="practice-area-content">
        <div className="practice-area-main">
          <div className="practice-area-dropdown">
            <PracticeAreaList
              selectPracticeArea={selectPracticeArea}
              defaultItem={isInternationalDisputes ? translations[selectedLanguage].International_Dispute_Resolution : selectedPracticeArea}
            />
          </div>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Who_we_represent}</h2>
            <p className="practice-area-text">{translations[selectedLanguage].IDP_para1}</p>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].What_we_do}</h2>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para21}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para22}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para23}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para24}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h3 className="practice-area-subtitle-small">{translations[selectedLanguage].This_includes}</h3>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para31}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para32}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para33}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para34}</li>
            </ul>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Our_experience}</h2>
            <p className="practice-area-text">{translations[selectedLanguage].IDP_para41}</p>
            <p className="practice-area-text">{translations[selectedLanguage].IDP_para42}</p>
            
            <div className="practice-area-nested-list">
              <h3 className="practice-area-subtitle-small">1. {translations[selectedLanguage].Sovereign_disputes}</h3>
              <p className="practice-area-text">{translations[selectedLanguage].IDP_para4_10}</p>
              <ol className="practice-area-ordered-list">
                <li>{translations[selectedLanguage].IDP_para4_11}</li>
                <li>{translations[selectedLanguage].IDP_para4_12}</li>
                <li>{translations[selectedLanguage].IDP_para4_13}</li>
              </ol>

              <h3 className="practice-area-subtitle-small">2. {translations[selectedLanguage].International_commercial_arbitration}</h3>
              <ol className="practice-area-ordered-list">
                <li>{translations[selectedLanguage].IDP_para4_21}</li>
                <li>{translations[selectedLanguage].IDP_para4_22}</li>
                <li>{translations[selectedLanguage].IDP_para4_23}</li>
                <li>{translations[selectedLanguage].IDP_para4_24}</li>
                <li>{translations[selectedLanguage].IDP_para4_25}</li>
                <li>{translations[selectedLanguage].IDP_para4_26}</li>
                <li>{translations[selectedLanguage].IDP_para4_27}</li>
              </ol>

              <h3 className="practice-area-subtitle-small">3. {translations[selectedLanguage].Shareholder_disputes}</h3>
              <p className="practice-area-text">{translations[selectedLanguage].IDP_para5}</p>

              <h3 className="practice-area-subtitle-small">4. {translations[selectedLanguage].Construction_and_infrastructure}</h3>
              <p className="practice-area-text">{translations[selectedLanguage].IDP_para6}</p>

              <h3 className="practice-area-subtitle-small">5. {translations[selectedLanguage].Energy}</h3>
              <p className="practice-area-text">{translations[selectedLanguage].IDP_para7}</p>

              <h3 className="practice-area-subtitle-small">6. {translations[selectedLanguage].Negotiated_settlements}</h3>
              <p className="practice-area-text">{translations[selectedLanguage].IDP_para8}</p>
            </div>
          </section>

          <section className="practice-area-section">
            <h2 className="practice-area-subtitle">{translations[selectedLanguage].Why_choose_us}</h2>
            <ul className="practice-area-list">
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para9_1}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para9_2}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para9_3}</li>
              <li className="practice-area-list-item">{translations[selectedLanguage].IDP_para9_4}</li>
            </ul>
            <p className="practice-area-text practice-area-text-large">{translations[selectedLanguage].further_Information}</p>
          </section>
        </div>

        <aside className="practice-area-sidebar">
          
        <div className="practice-area-profile">
          <div className="practice-area-profile-image-container">
            <img src={Shreyasimg} alt="Shreyas" className="practice-area-profile-image" />
          </div>
          <p className="practice-area-profile-name">{translations[selectedLanguage].Shreyas_Jayasimha}</p>
          <p className="practice-area-profile-title">{translations[selectedLanguage].Shreyas_Jayasimha_role}</p>
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

export default InternationalDisputes;