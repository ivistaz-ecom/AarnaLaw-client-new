import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import shreyasjayasimhaimg from "../../images/Shreyas.png";
import Kamalaimg from "../../images/Kamala.png";
import Manjushreeimg from "../../images/Manjushree.jpg";
import Spandanaimg from "../../images/Spandana.png";
import PunthiShahimg from "../../images/Punthi-Shah.png";
import Apoorvaimg from "../../images/Apoorva.png";
import { motion } from "framer-motion";

const translations = {
    ar: require("../json/Aboutus/ar.json"),
    de: require("../json/Aboutus/de.json"),
    en: require("../json/Aboutus/en.json"),
    es: require("../json/Aboutus/es.json"),
    fr: require("../json/Aboutus/fr.json"),
    gu: require("../json/Aboutus/gu.json"),
    hi: require("../json/Aboutus/hi.json"),
    ja: require("../json/Aboutus/ja.json"),
    kn: require("../json/Aboutus/kn.json"),
    ko: require("../json/Aboutus/ko.json"),
    ml: require("../json/Aboutus/ml.json"),
    ru: require("../json/Aboutus/ru.json"),
    ta: require("../json/Aboutus/ta.json"),
    tel: require("../json/Aboutus/tel.json"),
    zh: require("../json/Aboutus/zh.json"),
};



const Partner = () => {
    const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const [displayedPartners, setDisplayedPartners] = useState([]);

    
const teamData = [
    {
      image: Manjushreeimg,
      profileName: "team/manjushree",
      name: translations[selectedLanguage].Manjushree_Somasundara,
      position: translations[selectedLanguage].Manjushree_Role,
      workExperience: translations[selectedLanguage].Manjushree_exp,
      ReadMore: translations[selectedLanguage].Read_More,
    },
    
    {
      image: Spandanaimg,
      profileName: "team/spandan-asshwath",
      name: translations[selectedLanguage].Spandana_Ashwath,
      position: translations[selectedLanguage].Spandana_Role,
      workExperience: translations[selectedLanguage].Spandana_exp,
      ReadMore: translations[selectedLanguage].Read_More,
    },
    {
      image: PunthiShahimg,
      profileName: "team/punthi-shah",
      name: translations[selectedLanguage].Punthi_Shah,
      position: translations[selectedLanguage].Punthi_Role,
      workExperience: translations[selectedLanguage].Punthi_exp,
      ReadMore: translations[selectedLanguage].Read_More,
    },
    {
      image: Apoorvaimg,
      profileName: "team/apoorva-guruprasad",
      name: translations[selectedLanguage].Apoorva_Guruprasad,
      position: translations[selectedLanguage].Apoorva_Role,
      workExperience: translations[selectedLanguage].Apoorva_exp,
      ReadMore: translations[selectedLanguage].Read_More,
    },
    {
      image: shreyasjayasimhaimg,
      profileName: "team/shreyas-jayasimha",
      name: translations[selectedLanguage].Shreyas_Jayasimha,
      position: translations[selectedLanguage].Shreyas_Role,
      workExperience: translations[selectedLanguage].Shreyas_exp,
      ReadMore: translations[selectedLanguage].Read_More,
    },
    {
      image: Kamalaimg,
      profileName: "team/kamala-naganand",
      name: translations[selectedLanguage].Kamala_Naganand,
      position: translations[selectedLanguage].Kamala_Role,
      workExperience: translations[selectedLanguage].Kamala_exp,
      ReadMore: translations[selectedLanguage].Read_More,
    },
  ];


    useEffect(() => {
      const partnersToDisplay = getDisplayedPartners(currentIndex);
      setDisplayedPartners(partnersToDisplay);
  
      // Automatically change the radio button index after 4 seconds
      const interval = setInterval(() => {
        const newIndex = (currentIndex + 1) % teamData.length;
        setCurrentIndex(newIndex);
      }, 4000);
  
      return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);
  
    const getDisplayedPartners = (index) => {
      const partners = [];
      for (let i = 0; i < 4; i++) {
        const partnerIndex = (index + i) % teamData.length;
        partners.push(teamData[partnerIndex]);
      }
      return partners;
    };
  
    const handleRadioChange = (index) => {
      setCurrentIndex(index);
    };

    return (
        
          
      <div className="bg-bgDark3 p-4">
            <div className="text-center">
              <br></br>
              <p className="tracking-wider text-red-700 mb-4 font-bold text-2xl font-montserrat">
                {translations[selectedLanguage].Partners}
              </p>
              <br></br>
            </div>
            <div className="text-center text-2xl font-semibold text-white-800">
          <p className="text-center text-3xl leading-normal text-white font-montserrat mb-6">
            {translations[selectedLanguage].Partners_Message1}
          </p>
          <p className="text-center text-3xl leading-normal text-white font-montserrat mb-6">
            {translations[selectedLanguage].Partners_Message2}
          </p>
        </div>
            <div className="relative">
              <div className="flex flex-wrap justify-center">
                {displayedPartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    className="max-w-xs m-4 p-4 bg-white rounded-lg shadow-lg border border-gray-300"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={partner.image}
                      className="w-48 h-48 mx-auto mb-4 rounded-full transition-transform duration-300 transform hover:scale-125"
                      alt="team member"
                      loading="lazy"
                      style={{ backgroundColor: "#0E1333" }}
                    />
                    <h2 className="text-lg font-semibold text-blue-900">{partner.name}</h2>
                    <p className="text-black">{partner.position}</p>
                    <p className="text-gray-700 text-base">
                      {partner.workExperience}
                    </p>
                    <Link to={`/${partner.profileName}`} className="mt-2 inline-block bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800">
                        {partner.ReadMore}
                      </Link>
                  </motion.div>
                ))}
              </div>
              <br></br>
              <br></br>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {teamData.map((_, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="carousel-radio"
                      checked={index === currentIndex}
                      onChange={() => handleRadioChange(index)}
                      className="sr-only"
                    />
                    <span
                      className={`w-3 h-3 inline-block rounded-full ${index === currentIndex ? 'bg-red-700' : 'bg-gray-300'}`}
                    ></span>
                  </label>
                ))}
              </div>
            </div>
          </div>
       
    );
};

export default Partner;
