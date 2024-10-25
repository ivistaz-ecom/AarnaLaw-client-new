import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import ContactForm from "../practice-area/ContactForm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Profile.css";

function Spandanasshwath() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const translations = {
    ar: require("../../Components/json/team/ar.json"),
    de: require("../../Components/json/team/de.json"),
    en: require("../../Components/json/team/en.json"),
    es: require("../../Components/json/team/es.json"),
    fr: require("../../Components/json/team/fr.json"),
    gu: require("../../Components/json/team/gu.json"),
    hi: require("../../Components/json/team/hi.json"),
    ja: require("../../Components/json/team/ja.json"),
    kn: require("../../Components/json/team/kn.json"),
    ko: require("../../Components/json/team/ko.json"),
    ml: require("../../Components/json/team/ml.json"),
    ru: require("../../Components/json/team/ru.json"),
    ta: require("../../Components/json/team/ta.json"),
    tel: require("../../Components/json/team/tel.json"),
    zh: require("../../Components/json/team/zh.json"),
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
            src={require("../../images/srihari-square.jpg")}
            alt="Spandana Ashwath"
            className="profile-image"
          />
          <div className="profile-title">
            <h1>Srihari Saranathan</h1>
            <p>Partner - Litigation, Insolvency & Bankruptcy</p>
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
                Srihari has considerable experience in various fields of law
                including commercial litigation, banking, insolvency,
                intellectual property, corporate law and indirect taxation. He
                has a B.L.S. LL.B. degree from the Government Law College at
                Mumbai, and is a member of the Bar Council of Maharashtra & Goa.
                In the course of his career, he has worked with leading law
                firms like Khaitan & Co. and Lakshmikumaran & Sridharan. Srihari
                represents a multitude of clients ranging from leading banks and
                corporate houses to small businesses and individuals. Owing to a
                thorough understanding of the law and the needs of the business
                community, Srihari offers high-quality advice to each of his
                clients. Clients have generously appreciated his meticulousness
                and his ability to offer pragmatic and innovative solutions to
                complex legal problems. Outside of the law, Srihari is a scholar
                in Sanskrit and is extremely well-read on various subjects,
                particularly Indian philosophy. His exposure to philosophy has
                not only enriched him personally, but also significantly
                contributed to sharpening his legal acumen.
              </p>
            </div>
            {/* Navigation Links */}
            <hr className="nav-divider" />
            <div className="navigation">
              <a href="/team/manjushree" className="prev">
                <ArrowLeft className="arrow-icon" />
                <span>Manjushree</span>
              </a>
              <a href="/team/meghna-talwar" className="next">
                <span>Meghna Talwar</span>
                <ArrowRight className="arrow-icon" />
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
