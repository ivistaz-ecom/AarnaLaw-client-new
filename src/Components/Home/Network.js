import React, { useContext,useState } from "react";
import { LanguageContext } from "../../Components/LanguageContext";
import ContactForm from "../../Components/practice-area/ContactForm"; 

const translations = {
  ar: require("../../Components/json/Home/ar.json"),
  de: require("../../Components/json/Home/de.json"),
  en: require("../../Components/json/Home/en.json"),
  es: require("../../Components/json/Home/es.json"),
  fr: require("../../Components/json/Home/fr.json"),
  gu: require("../../Components/json/Home/gu.json"),
  hi: require("../../Components/json/Home/hi.json"),
  ja: require("../../Components/json/Home/ja.json"),
  kn: require("../../Components/json/Home/kn.json"),
  ko: require("../../Components/json/Home/ko.json"),
  ml: require("../../Components/json/Home/ml.json"),
  ru: require("../../Components/json/Home/ru.json"),
  ta: require("../../Components/json/Home/ta.json"),
  tel: require("../../Components/json/Home/tel.json"),
  zh: require("../../Components/json/Home/zh.json"),
};

const Network = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [showContactForm, setShowContactForm] = useState(false); // State for showing/hiding the contact form
  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <style>
        {`
          .custom-hidden-elements .i4ewOd-pzNkMb-r4nke-LS81yb .i4ewOd-pzNkMb-ornU0b-b0t70b-Bz112c {
            margin-top: 16px;
            opacity: 0 !important;
          }

          .custom-hidden {
            display: none !important;
          }
            .bg-light-black{
            background-color :#2E312F;
            }
        `}
      </style>
      <div className="flex flex-col items-center gap-10 mb-14 lg:p-8 p-2">
        <h1 className="text-custom-blue text-xl md:text-2xl font-semibold">
        {translations[selectedLanguage].Network_Around_Lawyers}
        
        </h1>

        <div className="py-5 bg-light-black text-white w-full">
          <p className="font-semibold p-3">Aarna Law</p>
        <div className="w-full overflow-hidden">
          
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=1VcQJ5rncecjuzGEyGAVCekUkRYoLUpQ&ehbc=2E312F"
            width="100%"
            height="600"
           
            className="border-0 mt-[-61px]"
          >
          </iframe>
        </div>
        </div>
        <div>
          
          <button   onClick={handleContactClick} className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white">
          {translations[selectedLanguage].Contact_Our_Experts}
          </button>
        </div>

       
      {/* Display Contact Form if showContactForm is true */}
      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
      </div>
    </>
  )
}

export default Network

