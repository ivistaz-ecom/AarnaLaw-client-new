import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../Components/LanguageContext";
import Industriesimg from "../images/Industries_old.png";
import AutomotiveIndustryImg from "../images/Automotive-Industry.jpg";
import Aviationimg from "../images/Aviation.jpg";
import Constructionimg from "../images/Construction-small.png";
import CorporateLawImg from "../images/Corporate-Law.jpg";
import DirectIndirectTax from "../images/DirectIndirectTax.jpg";
import FinancialServicesimg from "../images/FinancialServicesimg.jpg";
import EnergyOilandGasimg from "../images/Energy-Oil-and-Gas.jpg";
import EnvironmentaLawimg from "../images/Environmental-Law.jpg";
import ForeignInvestmentimg from "../images/Foreign-Investment.jpg";
import Healthcareimg from "../images/Healthcare-Industry.png";
import ITBlockchainimg from "../images/IT-IoT-Blockchain.jpg";
import LifeSciencePharmaimg from "../images/Life-Science-Pharmaceuticals.jpg";
import MediaTelecommunicationsimg from "../images/Media-Telecommunications.jpg";
import Retailimg from "../images/Retail.jpg";
import ShippingMaritimeimg from "../images/Shipping-Maritime-Law.jpg";
import Spaceimg from "../images/Space.png";
import SportsLawimg from "../images/Sports-Law.jpg";

function Industries() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const [langParam, setLangParam] = useState("");

  const translations = {
    ar: require('../Components/json/Industries/ar.json'),
    de: require('../Components/json/Industries/de.json'),
    en: require('../Components/json/Industries/en.json'),
    es: require('../Components/json/Industries/es.json'),
    fr: require('../Components/json/Industries/fr.json'),
    gu: require('../Components/json/Industries/gu.json'),
    hi: require('../Components/json/Industries/hi.json'),
    ja: require('../Components/json/Industries/ja.json'),
    kn: require('../Components/json/Industries/kn.json'),
    ko: require('../Components/json/Industries/ko.json'),
    ml: require('../Components/json/Industries/ml.json'),
    ru: require('../Components/json/Industries/ru.json'),
    ta: require('../Components/json/Industries/ta.json'),
    tel: require('../Components/json/Industries/tel.json'),
    zh: require('../Components/json/Industries/zh.json'),
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const langParam = queryParams.get("lang");
    if (langParam && Object.keys(translations).includes(langParam)) {
      setSelectedLanguage(langParam);
      setLangParam(langParam);
    }
  }, [location.search, translations, setSelectedLanguage]);

  const industries = [
    { imgSrc: AutomotiveIndustryImg, to: "/industries/automotive-industry", label: translations[selectedLanguage]?.Automotive_Industry },
    { imgSrc: Aviationimg, to: "/industries/aviation", label: translations[selectedLanguage]?.Aviation },
    { imgSrc: Constructionimg, to: "/industries/construction", label: translations[selectedLanguage]?.Construction_Engineering },
    { imgSrc: CorporateLawImg, to: "/industries/corporate-law", label: translations[selectedLanguage]?.Corporate_Advisory },
    { imgSrc: DirectIndirectTax, to: "/industries/taxation", label: translations[selectedLanguage]?.Direct_Indirect_Taxation },
    { imgSrc: EnvironmentaLawimg, to: "/industries/environmental-law", label: translations[selectedLanguage]?.Environmenta_Law },
    { imgSrc: EnergyOilandGasimg, to: "/industries/energy-oil-gas", label: translations[selectedLanguage]?.Energy_Oil_gas },
    { imgSrc: FinancialServicesimg, to: "/industries/Financialservices", label: translations[selectedLanguage]?.Financial_Services },
    { imgSrc: ForeignInvestmentimg, to: "/industries/foreign-investment", label: translations[selectedLanguage]?.Foreign_Investment },
    { imgSrc: Healthcareimg, to: "/industries/healthcare", label: translations[selectedLanguage]?.Healthcar_Industry },
    { imgSrc: ITBlockchainimg, to: "/industries/it-iot-blockchain", label: translations[selectedLanguage]?.IT_IOT_and_AI },
    { imgSrc: LifeSciencePharmaimg, to: "/industries/life-science-pharmaceuticals", label: translations[selectedLanguage]?.LifeScience_Pharmaceutical },
    { imgSrc: MediaTelecommunicationsimg, to: "/industries/media-telecommunications", label: translations[selectedLanguage]?.Media_Telecommunications },
    { imgSrc: Retailimg, to: "/industries/retail", label: translations[selectedLanguage]?.Retail },
    { imgSrc: ShippingMaritimeimg, to: "/industries/shipping-maritime", label: translations[selectedLanguage]?.Shipping_Maritime_Law },
    { imgSrc: Spaceimg, to: "/industries/space-law", label: translations[selectedLanguage]?.Space_Law },
    { imgSrc: SportsLawimg, to: "/industries/sports-law", label: translations[selectedLanguage]?.Sports_Law },
  ];

  return (
    <div>
      <header className="relative">
        <img src={Industriesimg} className="w-full h-80 object-cover rounded-md" alt="Industry" />
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold" style={{ fontSize: "50px", textAlign: "center", fontFamily: "Montserrat-semibold" }}>
          {translations[selectedLanguage].Industries}
        </div>
      </header>

      <div className="bg-gradient-to-br from-white-900 via-blue-800 to-blue-900 p-8">
        <div className="text-center font-semibold text-white">
          <ul>
            <li className="text-gray-500 mb-4">{translations[selectedLanguage]?.Industries_Serve}</li>
            <li className="text-center text-3xl font-medium text-black">{translations[selectedLanguage]?.progressive_practice_expert}</li>
            <li className="text-center text-3xl font-medium text-black">{translations[selectedLanguage]?.assistance_to_clients}</li>
          </ul>
        </div>
        <br /><br />

        {/* Responsive grid layout with equal margins and hover animation */}
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div key={index} className="relative flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Link to={industry.to} className="block w-full">
                <div className="h-48 w-full overflow-hidden group">
                  <img
                    src={industry.imgSrc}
                    alt={industry.label}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bg-blue-900 text-white text-center py-4 text-lg font-bold h-20 flex items-center justify-center">
                  <span className="text-center leading-tight">{industry.label}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
