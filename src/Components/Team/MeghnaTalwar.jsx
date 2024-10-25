import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import ContactForm from "../practice-area/ContactForm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Profile.css";

function Spandanasshwath() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const translations = {
    ar: require("../json/team/ar.json"),
    de: require("../json/team/de.json"),
    en: require("../json/team/en.json"),
    es: require("../json/team/es.json"),
    fr: require("../json/team/fr.json"),
    gu: require("../json/team/gu.json"),
    hi: require("../json/team/hi.json"),
    ja: require("../json/team/ja.json"),
    kn: require("../json/team/kn.json"),
    ko: require("../json/team/ko.json"),
    ml: require("../json/team/ml.json"),
    ru: require("../json/team/ru.json"),
    ta: require("../json/team/ta.json"),
    tel: require("../json/team/tel.json"),
    zh: require("../json/team/zh.json"),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const langParam = queryParams.get("lang");
    if (langParam && Object.keys(translations).includes(langParam)) {
      setSelectedLanguage(langParam);
    }
  }, [location.search, setSelectedLanguage]);

  const handleContactClick = () => setShowContactForm(true);
  const handleCloseContactForm = () => setShowContactForm(false);
  const handleBackToTeam = () =>
    navigate("/aboutus", { state: { scrollTo: "partners" } });

  return (
    <div className="profile-container">
      {/* Back to Team link */}
      <div className="back-link">
        <button onClick={handleBackToTeam} className="back-button">
          <ArrowLeft className="arrow-icon" />
          <span>Back to Team</span>
        </button>
      </div>

      {/* Header */}
      <header className="profile-header">
        <div className="header-content">
          <img
            src={require("../../images/meghna-square.jpg")}
            alt="Spandana Ashwath"
            className="profile-image"
          />
          <div className="profile-title">
            <h1>Meghna Talwar</h1>
            <p>Partner - Litigation and Securities Law</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="profile-main">
        <div className="profile-content">
          {/* Practice Area Section */}
          <section className="left-column">
            <h2>{translations[selectedLanguage].PracticeAreas}</h2>
            <ul className="practice-areas">
              <li>{translations[selectedLanguage].Banking_Law}</li>
              <li>{translations[selectedLanguage].Regulatory_Compliance}</li>
              <li>{translations[selectedLanguage].Financial_crime}</li>
              <li>{translations[selectedLanguage].Anti_Money_Laundering}</li>
            </ul>
            <button onClick={handleContactClick} className="contact-button">
              {translations[selectedLanguage].Contact}
            </button>
          </section>

          {/* Profile Description */}
          <section className="right-column">
            <div className="profile-description">
              <p>
                {" "}
                Meghna is a partner at Aarna Law and specialises in civil and
                corporate litigation, arbitration and mediation. Her areas of
                practice include securities, consumer, real estate, and
                testamentary. Meghna advises and represents a broad range of
                clients which include conglomerates, multinational companies,
                small and medium-sized enterprises (SMEs) and private
                individuals. She has represented clients in matters before the
                Supreme Court, High Courts, District Courts, Securities
                Appellate Tribunal, SEBI, NCLAT, NCLT and consumer forums.
              </p>
            </div>
            {/* Navigation Links */}
            <hr className="nav-divider" />
            <div className="navigation">
              <a href="/team/srihari-naganand" className="prev">
                <ArrowLeft className="arrow-icon" />
                <span>Srihari Naganand</span>
              </a>
             
            </div>
          </section>
        </div>
      </main>

      {/* Display Contact Form */}
      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default Spandanasshwath;
