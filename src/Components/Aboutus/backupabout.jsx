import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Components/LanguageContext";
import aboutusheader from "../../images/aboutusbanner.png";
import aboutimg from "../../images/aboutus.jpg";
import whatwedoimg from "../../images/Whatwedo.png";
import Legacyimg from "../../images/OurLegacy.png";
import shreyasjayasimhaimg from "../../images/Shreyas.png";
import Kamalaimg from "../../images/Kamala.png";
import Manjushreeimg from "../../images/Manjushree.jpg";
import Spandanaimg from "../../images/Spandana.png";
import PunthiShahimg from "../../images/Punthi-Shah.png";
import Apoorvaimg from "../../images/Apoorva.png";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import JayasimhaFoundationimg from "../../images/Jayasimha-Foundation.png";
import founderoneimg from "../../images/founderone.png";
import quoteimg from "../../images/quote.png";
import PracticeArea from "./practiceArea";


const translations = {
  ar: require("../../Components/json/Aboutus/ar.json"),
  de: require("../../Components/json/Aboutus/de.json"),
  en: require("../../Components/json/Aboutus/en.json"),
  es: require("../../Components/json/Aboutus/es.json"),
  fr: require("../../Components/json/Aboutus/fr.json"),
  gu: require("../../Components/json/Aboutus/gu.json"),
  hi: require("../../Components/json/Aboutus/hi.json"),
  ja: require("../../Components/json/Aboutus/ja.json"),
  kn: require("../../Components/json/Aboutus/kn.json"),
  ko: require("../../Components/json/Aboutus/ko.json"),
  ml: require("../../Components/json/Aboutus/ml.json"),
  ru: require("../../Components/json/Aboutus/ru.json"),
  ta: require("../../Components/json/Aboutus/ta.json"),
  tel: require("../../Components/json/Aboutus/tel.json"),
  zh: require("../../Components/json/Aboutus/zh.json"),
};


function AboutUs() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  


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

  
  const handleViewCurrentOpenings = () => {
    // Redirect to the career page when button is clicked
   
    navigate('/Careers');

  };

  
  const [displayedPartners, setDisplayedPartners] = useState([]);

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

  const handleServiceButtonClick = () => {
    navigate("/practiceArea");
  };

  return (
    <div className="bg-white">
      <header className="relative">
        <img src={aboutusheader} className="w-full" alt="About Us Area" />
        <div className="absolute inset-x-0 top-2/4 text-white text-5xl font-bold text-center">
          {translations[selectedLanguage].About_Us}
        </div>
      </header>
        <br></br>
        <br></br>
        <div className="mx-auto flex flex-col md:flex-row md:mx-1"> {/* Added margin for both mobile and desktop */}
      {/* What We Do Section */}
      <div className="bg-white w-full">
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-4/5 md:ml-10">
    <motion.div
      className="w-full md:w-1/2 mb-0"
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      style={{ marginRight: '10px', marginLeft: '60px' }}
    >
      <img
        src={aboutimg}
        className="w-full h-auto mx-auto rounded-md shadow-lg"
        alt="aboutus"
        loading="lazy"
        style={{ maxWidth: '94%', maxHeight: '100%' }}
      />
      <br />
      <br />
    </motion.div>

    <motion.div
      className="w-full md:w-2/5 md:ml-15 ml-3"
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <br />
      
      <p className="text-custom-red text-2xl font-bold ml-3 text-left">
        {translations[selectedLanguage].What_we_do}
      </p>
      <br />
      
      <div className="text-custom-blue text-3xl font-semibold mt-4 md:mt-0 text-left ml-3 word-spacing-custom">
        {translations[selectedLanguage].What_we_do_messageH1}
      </div>
      <br />
      <div className="text-custom-gray mt-2 md:mt-0 text-left ml-3">
        <p>{translations[selectedLanguage].What_we_do_message1}</p>
      </div>
      <br />
      <br className="block md:hidden" />
    </motion.div>
  </div>
</div>

    </div>

        {/* New Practice Area Section start */}
              <PracticeArea />
           
        <br></br>
        <br></br>
        {/* What LEGACY START Section */}
        <div className="mx-auto flex flex-col-reverse md:flex-row">
  {/* Our Legacy Section */}
  <div id="legacy" className="bg-white md:ml-32 md:pl-15">
    <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between md:w-4/5 px-5">
      <motion.div
        className="w-full md:w-1/2 mb-4 md:mb-0 ml-9 md:ml-4"
        initial={{ opacity: 0, x: '10vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <img
          src={Legacyimg}
          className="w-full h-auto mx-auto rounded-md shadow-lg"
          alt="legacy"
          loading="lazy"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </motion.div>

      <motion.div
        className="w-full md:w-2/5 text-left md:ml-15"
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="text-custom-blue text-2xl font-bold">
          {translations[selectedLanguage].Our_Legacy}
        </p>
        <br></br>
        <div className="text-custom-red text-3xl font-semibold mt-4 md:mt-0 text-left word-spacing-custom">
          {translations[selectedLanguage].Legacy_Message1}
        </div>
        <br></br>
        <div className="text-custom-gray mt-2 md:mt-0">
          <p>{translations[selectedLanguage].Legacy_sub_Message1}</p>
        </div>
      </motion.div>
    </div>
  </div>
</div>

{/* What We Do Section */}
<div className="mx-auto flex flex-col md:flex-row md:mx-1">
  <div id="what-we-do" className="bg-white w-full">
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-4/5 md:ml-10">
      <motion.div
        className="w-full md:w-1/2 mb-0"
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        style={{ marginRight: '10px', marginLeft: '60px' }}
      ><br></br>
        <img
          src={whatwedoimg}
          className="w-full h-auto mx-auto rounded-md shadow-lg"
          alt="aboutus"
          loading="lazy"
          style={{ maxWidth: "94%", maxHeight: "100%" }}
          
        />
        <br></br>
      </motion.div>

      <motion.div
        className="w-full md:w-2/5 text-left md:ml-15 ml-3"
        initial={{ opacity: 0, x: '100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="text-custom-red text-2xl font-bold ml-3">
          {translations[selectedLanguage].What_we_do}
        </p>
        <br></br>
        <div className="text-custom-gray mt-2 md:mt-0 text-justify ml-3">
          <p>{translations[selectedLanguage].Whatwedo_Message1}</p>
          <p>{translations[selectedLanguage].Whatwedo_Message2}</p>
        </div>
        
      </motion.div>
      
    </div>
  </div>
</div>


<br></br>
        <br></br>
  {/* Partners   Section */}

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
                <p className="text-gray-700 text-base text-justify">
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

      
    {/* Foundation Section end */}

    
{/* Our Founder Start Section */}
<div className="bg-white p-8">
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:w-4/5 md:ml-10"> {/* Adjusted margin */}
    <motion.div
      className="w-full md:w-1/2 mb-4 md:mb-0"
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      style={{ marginRight: '10px', marginLeft: '40px' }}
    >
      <img
        src={founderoneimg}
        className="w-full h-auto mx-auto rounded-md shadow-lg"
        alt="aboutus"
        loading="lazy"
        style={{ maxWidth: "80%", maxHeight: "auto" }}
      />
    </motion.div>

    <motion.div
      className="w-full md:w-1/2 text-left"
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      style={{ marginLeft: '30px' }}
    >
      <br />
      <div>
        <img src={quoteimg} alt="Quote" />
      </div>
      <br></br>
      <h2 className="text-left font-semibold  tracking-wider text-blue-900 pl-25 mb-4 font-montserrat" >
        {translations[selectedLanguage].Founder_Message}
      </h2>
      <div className="text-gray-700 text-lg  font-montserrat text-justify" style={{ maxWidth: '100%', height: 'auto' }}>
        <p className="text-justify text-medium leading-8">
          {translations[selectedLanguage].Founder_Message1}
        </p>
      </div>
      <br></br>
      <div className="flex justify-between">
        <div className="mb-4 font-semibold">
          <p>{translations[selectedLanguage].Kamala_Naganand}</p>
        </div>
        <div className="mb-4 font-semibold">
          <p>{translations[selectedLanguage].Shreyas_Jayasimha} </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="mb-4 font-semibold">
          <p>{translations[selectedLanguage].Managing_Partner}</p>
        </div>
        <div className="mb-4 font-semibold">
          <p>{translations[selectedLanguage].Founding_Partner}</p>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <button
          onClick={handleServiceButtonClick}
          className="bg-white text-black border-2 border-red-500 px-6 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white"
        >
          {translations[selectedLanguage].Meet_Our_Team}
        </button>
      </div>
    </motion.div>
  </div>
</div>
{/* Our Founder end Section */}



{/* Foundation Section end */}

<div class="bg-151C4A sm:mt-0 pt-1 flex flex-col md:flex-row justify-center items-center h-screen/2">
  <motion.div
    className="grid grid-cols-1 md:w-1/3"
    initial={{ opacity: 0, x: '-100vw' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2 }} // Increased duration for a slower animation
  >
    <div className="col-span-6">
      <div className="md:hidden">
        <img
          src={JayasimhaFoundationimg}
          className="mx-auto rounded-md sm:ml-12"
          alt="Jayasimha Foundation"
        />
      </div>
      <br />
      <h2 className="text-left pl-5 sm:ml-12 md:-ml-40 font-medium tracking-wider text-gray-400 mb-4 font-montserrat">
        {translations[selectedLanguage].JAYASIMHA_FOUNDATION}
      </h2>
      <p className="text-left pl-5 text-white sm:ml-12 md:-ml-40">
        {translations[selectedLanguage].JayaFoundation_Mesage1}
      </p>
      <br />
      <p className="text-left pl-5 text-white sm:ml-12 md:-ml-40">
        {translations[selectedLanguage].JayaFoundation_Mesage2}
      </p>
      <br />
      <p className="text-left pl-5 text-white sm:ml-12 md:-ml-40">
        {translations[selectedLanguage].JayaFoundation_Mesage3}
      </p>
      <br />
      <p className="text-left pl-5 text-white sm:ml-12 md:-ml-40">
        {translations[selectedLanguage].JayaFoundation_Mesage4}
      </p>
      <br /><br />
    </div>
  </motion.div>
  <motion.div
    className="w-full md:w-1/3 p-4 mt-4 md:mt-0"
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2 }} // Increased duration for a slower animation
  >
    <div className="hidden md:block">
      <img
        src={JayasimhaFoundationimg}
        className="mx-auto rounded-md md:ml-12"
        alt="Jayasimha Foundation"
      />
    </div>
  </motion.div>
</div>
{/* Foundation Section END */}
{/* Opening Section START */}
<div className="bg-white-200 p-6">
  <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
    <div className="md:w-2/4 md:ml-40">
      <div className="text-left">
        <div className="text-2xl font-semibold text-blue-900 pl-25">
          <p className="text-3xl leading-normal font-montserrat">
            {translations[selectedLanguage].Would_You_Join}
          </p>
        </div>
        <div className="text-gray-700 text-lg font-semibold pl-25 md:w-3/4">
          <p>{translations[selectedLanguage].Openining_message1}</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-start"> {/* Adjusted justify-center to center button in mobile view */}
      <button
        className="bg-white text-black border-2 border-red-500 px-8 py-3 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-colors duration-300 ml-4 md:ml-0"
        onClick={handleViewCurrentOpenings}
      >
        {translations[selectedLanguage]?.View_Current_Openings || 'View Current Openings'}
      </button>
    </div>
    <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-end md:justify-start">
      {/* Add additional elements if needed */}
    </div>
    <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-end md:justify-start">
      {/* Add additional elements if needed */}
    </div>
  </div>
</div>
{/* Opening Section END */}
    </div>
  );
}

export default AboutUs;
