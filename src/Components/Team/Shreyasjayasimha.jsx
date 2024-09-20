import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from '../../Components/LanguageContext';
import ContactForm from "../practice-area/ContactForm";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Profile.css';

function Shreyasjayasimha() {
  // Language context for handling translations
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Translation files for different languages
  const translations = {
    ar: require('../../Components/json/team/ar.json'),
    de: require('../../Components/json/team/de.json'),
    en: require('../../Components/json/team/en.json'),
    es: require('../../Components/json/team/es.json'),
    fr: require('../../Components/json/team/fr.json'),
    gu: require('../../Components/json/team/gu.json'),
    hi: require('../../Components/json/team/hi.json'),
    ja: require('../../Components/json/team/ja.json'),
    kn: require('../../Components/json/team/kn.json'),
    ko: require('../../Components/json/team/ko.json'),
    ml: require('../../Components/json/team/ml.json'),
    ru: require('../../Components/json/team/ru.json'),
    ta: require('../../Components/json/team/ta.json'),
    tel: require('../../Components/json/team/tel.json'),
    zh: require('../../Components/json/team/zh.json'),
  };

  // Scroll to top on path change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  // Set language based on URL parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const langParam = queryParams.get("lang");
    if (langParam && Object.keys(translations).includes(langParam)) {
      setSelectedLanguage(langParam);
    }
  }, [location.search, setSelectedLanguage]);

  // Handle contact form visibility
  const handleContactClick = () => setShowContactForm(true);
  const handleCloseContactForm = () => setShowContactForm(false);
  
  // Navigation to team page
  const handleBackToTeam = () => navigate('/aboutus', { state: { scrollTo: 'partners' } });

  return (
    <div className="profile-container">
      {/* Back to Team Link */}
      <div className="back-link">
        <button onClick={handleBackToTeam} className="back-button">
          <ArrowLeft className="arrow-icon" />
          <span>Back to Team</span>
        </button>
      </div>

      {/* Profile Header */}
      <header className="profile-header">
        <div className="header-content">
          <img 
            src={require("../../images/Shreyas.png")} 
            alt="Shreyas Jayasimha" 
            className="profile-image"
          />
          <div className="profile-title">
            <h1>{translations[selectedLanguage].ShreyasJayasimha}</h1>
            <p>{translations[selectedLanguage].Shreyas_title}</p>
          </div>
          <img 
            src={require("../../images/awardSriyas.png")} 
            alt="Awards" 
            className="awards-image"
          />
        </div>
      </header>

      {/* Main Profile Content */}
      <main className="profile-main">
      <br></br>
        <div className="profile-content">
          {/* Left Column: Practice Area and Recognition */}
          <section className="left-column">
            <div className="practice-area">
              <h2>{translations[selectedLanguage].PracticeAreas}</h2>
              <ul className="practice-areas">
                <li>{translations[selectedLanguage].Litigation}</li>
                <li>{translations[selectedLanguage].DoIntDisResolution}</li>
              </ul>
            </div>
            
            <br></br>
            
            <div className="recognition">
              <h2>{translations[selectedLanguage].Recongition}</h2>
              <ul className="recognition-list">
                <li>{translations[selectedLanguage].Asia_Law2021}</li>
                <li>{translations[selectedLanguage].Listedin_message}</li>
                <li>{translations[selectedLanguage].GlobalDialogue}</li>
                <li>{translations[selectedLanguage].Asia_Law2021}</li>
                <li>{translations[selectedLanguage].Recognisedamongst}</li>
                <li>{translations[selectedLanguage].member_SIAC}</li>
                <li>{translations[selectedLanguage].ICCFraudNete}</li>
                <li>{translations[selectedLanguage].Partners2012}</li>
                <li>{translations[selectedLanguage].memberof}</li>
                <li>{translations[selectedLanguage].Rising_Star_Award}</li>
              </ul>
            </div>

            {/* Contact Button */}
            <button onClick={handleContactClick} className="contact-button">
              {translations[selectedLanguage].Contact}
            </button>
          </section>

          {/* Right Column: Profile Description and Navigation */}
          <section className="right-column">
            <div className="profile-description">
              <p>{translations[selectedLanguage].ProfileDes1}</p>
              <p>{translations[selectedLanguage].ProfileDes2}</p>
              <p>{translations[selectedLanguage].ProfileDes3}</p>
              <p>{translations[selectedLanguage].ProfileDes4}</p>
              <p>{translations[selectedLanguage].ProfileDes5}</p>
              <p>{translations[selectedLanguage].ProfileDes6}</p>
            </div>

            <div className="award-image">
              <img src={require("../../images/Chembersaward23.jpg")} alt="Chambers Award 2023" />
            </div>

            {/* Navigation Links */}
            <hr className="nav-divider" />
            <div className="navigation">
              <a href="/team/kamala-naganand" className="prev">
                <ArrowLeft className="arrow-icon" />
                <span>Kamala Naganand</span>
              </a>
              <a href="/team/apoorva-guruprasad" className="next">
                <span>Apoorva Guruprasad</span>
                <ArrowRight className="arrow-icon" />
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Conditional Contact Form */}
      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default Shreyasjayasimha;
