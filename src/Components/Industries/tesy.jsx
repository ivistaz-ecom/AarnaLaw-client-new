import { React, useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../Components/LanguageContext";
import Shippingimg from "../../images/Industries/Shipping-Maritime-Law-banner.jpg";
import { useLocation } from "react-router-dom";
import IndustryList from "./IndustryList";
import ContactForm from "../practice-area/ContactForm";

const translations = {
  ar: require('../../Components/json/Industries/ar.json'),
  de: require('../../Components/json/Industries/de.json'),
  en: require('../../Components/json/Industries/en.json'),
  es: require('../../Components/json/Industries/es.json'),
  fr: require('../../Components/json/Industries/fr.json'),
  gu: require('../../Components/json/Industries/gu.json'),
  hi: require('../../Components/json/Industries/hi.json'),
  ja: require('../../Components/json/Industries/ja.json'),
  kn: require('../../Components/json/Industries/kn.json'),
  ko: require('../../Components/json/Industries/ko.json'),
  ml: require('../../Components/json/Industries/ml.json'),
  ru: require('../../Components/json/Industries/ru.json'),
  ta: require('../../Components/json/Industries/ta.json'),
  tel: require('../../Components/json/Industries/tel.json'),
  zh: require('../../Components/json/Industries/zh.json'),
};

function ShippingMaritime() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedIndustry, setSelectedIndustry] = useState(translations[selectedLanguage].Shipping_Maritime_Law);
  const [showContactForm, setShowContactForm] = useState(false); // State for showing/hiding the contact form
  const location = useLocation();
  const isShippingMaritime = location.search.includes("Industryparam=shippingMaritime");

  useEffect(() => {
    setSelectedIndustry(translations[selectedLanguage].Shipping_Maritime_Law);
  }, [selectedLanguage]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);


  const selectIndustry = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="w-full h-48 md:h-96 mb-8">
        <img
          src={Shippingimg}
          className="w-full h-full object-cover rounded-md"
          alt="Shipping image"
        />
      </header>

      {/* Main Content Section with equal margins */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white p-8">
          <div className="flex items-center justify-center md:justify-start gap-8">
            <IndustryList
              selectIndustry={selectIndustry}
              defaultItem={isShippingMaritime ? translations[selectedLanguage].Shipping_Maritime_Law : selectedIndustry}
            />
          </div>
        </div>

        {/* What we do Section */}
        <div className="mt-8 text-lg text-justify text-black">
          <ul>
            <li>{translations[selectedLanguage].Shipping_Messpara1}</li>
            <br />
            <li>{translations[selectedLanguage].Shipping_Messpara2}</li>
            <br />
            <li>{translations[selectedLanguage].Shipping_Messpara3}</li>
            <br />
            <li>{translations[selectedLanguage].Shipping_Messpara4}</li>
            <br />
          </ul>
          <ul className="list-disc pl-6 text-black marker:text-red-500">
            <li>{translations[selectedLanguage].Shipping_MessList1}</li>
            <li>{translations[selectedLanguage].Shipping_MessList2}</li>
            <li>{translations[selectedLanguage].Shipping_MessList3}</li>
            <li>{translations[selectedLanguage].Shipping_MessList4}</li>
            <li>{translations[selectedLanguage].Shipping_MessList5}</li>
          </ul>
        </div>

        <div className="mt-8 flex justify-left items-center">
          <button onClick={handleContactClick} className="bg-white text-black border-2 border-red-500 px-6 py-4 rounded-md font-semibold hover:bg-red-500 hover:text-white">
            {translations[selectedLanguage].Contact_Our_Experts}
          </button>
        </div>
        <br />
      </div>

      {/* Display Contact Form if showContactForm is true */}
      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default ShippingMaritime;
