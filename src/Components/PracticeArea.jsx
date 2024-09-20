import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../Components/LanguageContext";
import practiceAreasImg from "../images/PracticeArea/PracticeAreas.png";
import artLawImg from "../images/PracticeArea/Art-Law.jpg";
import bankruptcyInsolvencyImg from "../images/Bankruptcyinsolvency.png";
import corporateAdvisoryImg from "../images/Corporate-Advisory.jpg";
import arbitrationsMediationImg from "../images/Domestic-Arbitration.jpg";
import fraudAssetTracingImg from "../images/Fraud-Asset-Tracing.jpg";
import intellectualPropertyImg from "../images/Intellectual-Property.jpg";
import internationalDisputeImg from "../images/InternationalDispute.jpg";
import lowBonoImg from "../images/Low-Bono.jpg";
import privateClientImg from "../images/Private-Client.jpg";
import realEstateImg from "../images/Real-Estate.jpg";
import riskManagementImg from "../images/Riskmgm.jpg";
import trialLitigationImg from "../images/Trial-Litigation.jpg";
import './../Components/practice-area/practiceclass.css';

function PracticeArea() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const langParam = queryParams.get("lang");
    if (langParam && Object.keys(translations).includes(langParam)) {
      setSelectedLanguage(langParam);
    }
  }, [location.search, setSelectedLanguage]);

  const translations = {
    ar: require("../Components/json/Navbar/ar.json"),
    en: require("../Components/json/Navbar/en.json"),
    es: require("../Components/json/Navbar/es.json"),
    fr: require("../Components/json/Navbar/fr.json"),
    gu: require("../Components/json/Navbar/gu.json"),
    hi: require("../Components/json/Navbar/hi.json"),
    ja: require("../Components/json/Navbar/ja.json"),
    kn: require("../Components/json/Navbar/kn.json"),
    ko: require("../Components/json/Navbar/ko.json"),
    ru: require("../Components/json/Navbar/ru.json"),
    ta: require("../Components/json/Navbar/ta.json"),
    tel: require("../Components/json/Navbar/tel.json"),
    zh: require("../Components/json/Navbar/zh.json"),
  };

  const practiceAreas = [
    { imgSrc: artLawImg, to: "/practice-area/art-law", label: translations[selectedLanguage].art_law },
    { imgSrc: bankruptcyInsolvencyImg, to: "/practice-area/bankruptcy-ins", label: translations[selectedLanguage].Bankruptcy_Restructuring_and_insolvency },
    { imgSrc: corporateAdvisoryImg, to: "/practice-area/corporate-advisory", label: translations[selectedLanguage].Corporate_Advisory },
    { imgSrc: arbitrationsMediationImg, to: "/practice-area/arbitrations-mediation", label: translations[selectedLanguage].Domestic_Arbitration_and_Mediation },
    { imgSrc: fraudAssetTracingImg, to: "/practice-area/fraud", label: translations[selectedLanguage].Fraud_asset_tracing_and_enforcement },
    { imgSrc: intellectualPropertyImg, to: "/practice-area/ipr", label: translations[selectedLanguage].Intellectual_Property },
    { imgSrc: internationalDisputeImg, to: "/practice-area/international-disputes", label: translations[selectedLanguage].International_Dispute_Resolution },
    { imgSrc: lowBonoImg, to: "/practice-area/lowbono", label: translations[selectedLanguage].Low_Bono },
    { imgSrc: privateClientImg, to: "/practice-area/private-clients", label: translations[selectedLanguage].Private_Client_Practice },
    { imgSrc: realEstateImg, to: "/practice-area/real-estate", label: translations[selectedLanguage].Real_Estate },
    { imgSrc: riskManagementImg, to: "/practice-area/risk-management", label: translations[selectedLanguage].Risk_Management_and_Compliance },
    { imgSrc: trialLitigationImg, to: "/practice-area/trial-litigation", label: translations[selectedLanguage].Trial_and_Litigation }
  ];

  return (
    <div>
      <header className="relative">
        <img src={practiceAreasImg} className="w-full h-80 object-cover rounded-md" alt="Practice Areas" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold font-montserrat">
          {translations[selectedLanguage]?.practice_area}
        </div>
      </header>

      <div className="bg-gradient-to-br from-white-900 via-blue-800 to-blue-900 p-8">
        <ul className="practice-areas-heading">
          <li>{translations[selectedLanguage]?.practice_area}</li>
          <br />
          <li className="practice-areas-description">{translations[selectedLanguage]?.practice_area_Message1}</li>
          <li className="practice-areas-description">{translations[selectedLanguage]?.practice_area_Message2}</li>
        </ul>
        <br />
        
        {/* Responsive grid layout */}
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area, index) => (
            <div key={index} className="relative flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Link to={area.to} className="block w-full">
                <div className="h-48 w-full overflow-hidden group">
                  <img
                    src={area.imgSrc}
                    alt={area.label}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`bg-blue-900 text-white text-center py-4 text-lg font-bold h-20 flex items-center justify-center`}>
                  <span className="practice-area-title">{area.label}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PracticeArea;
