import React, { useState , useContext,useEffect} from "react";
import { LanguageContext } from "../LanguageContext";
import RealEstateimg from "../../images/PracticeArea/Real-Estate.jpg";
import Shreyasimg from "../../images/Shreyas.png";
import Apoorvaimg from "../../images/Apoorva.png";
import { useNavigate, useLocation } from "react-router-dom";
import PracticeAreaList from "./PracticeAreaList";
import ContactForm from "./ContactForm"; // Import the ContactForm component

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


function RealEstate() {

    const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
    const [selectedPracticeArea, setSelectedPracticeArea] = useState(translations[selectedLanguage].Real_Estate);
    const [showContactForm, setShowContactForm] = useState(false); // State for showing/hiding the contact form
    const navigate = useNavigate();
    const location = useLocation();
    const isrealestate = location.search.includes("PracticeAreaparam=realEstat");
    const selectPracticeArea = (practiceArea) => {
      setSelectedPracticeArea(practiceArea);
    };
  

     
    useEffect(() => {
      setSelectedPracticeArea(translations[selectedLanguage].Real_Estate);
    }, [selectedLanguage]);

    
  // New useEffect to scroll to top when component mounts or URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

    
    const handleContactClick = () => {
      setShowContactForm(true);
    };
  
    const handleCloseContactForm = () => {
      setShowContactForm(false);
    };
  return (
    <div>
      <header className="w-full h-48 md:h-96 mb-8">
        <img
          src={RealEstateimg}
          className="w-full h-full object-cover rounded-md"
          alt="Real Estate"
        />
      </header>

      {/* Main Content Section */}
      <div className="grid grid-cols-5 gap-3">
      <div className="md:col-span-1"></div>
        {/* Large Screen: Practice Area on top */}
        <div className="col-span-5 lg:col-span-2 pl-3 md:pl-0"> {/* Added left padding for mobile view */}
       <div className="bg-white p-1 md:p-1 rounded-md shadow-md">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
      <PracticeAreaList
        selectPracticeArea={selectPracticeArea}
        defaultItem={isrealestate ? translations[selectedLanguage].Real_Estate : selectedPracticeArea}
      />
    </div>
  </div>

           {/* Who we represent Section */}
           <div className="mt-8">
                <h2 className="text-2xl md:text-3xl font-semibold font-montserrat leading-tight mb-4 ml-4 md:ml-0 md:mr-0">
                    {translations[selectedLanguage].Who_we_represent}
                </h2>
                <ul className="space-y-5 pl-3 pr-3 md:pl-0 md:pr-0 text-justify">
                    <li className="text-lg md:text-lg font-inter leading-normal ml-2 mr-4 md:ml-0 md:mr-4">
                      {translations[selectedLanguage].RE_para1}
                    </li>
                   
                </ul>
              
          </div>

          {/* What we do Section */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold font-montserrat leading-tight mb-4 ml-4 md:ml-0 md:mr-0">
                {translations[selectedLanguage].What_we_do}
            </h2>

        
            <ul className="list-disc pl-7 pr-7 md:pl-5 md:pr-5">
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para21}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para22}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para23}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para24}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para25}
            </li>
            
          
          </ul>



          </div>

           {/* Recent Experience Section */}
           <div className="mt-8">
            <p className="text-base md:text-lg font-montserrat font-semibold leading-tight mb-4 ml-6 md:ml-0 md:mr-2  text-gray-500">
              {translations[selectedLanguage].Recent_experience_includes}
            </p>
          
            <ul className="list-disc pl-7 pr-7 md:pl-5 md:pr-5">
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para31}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para32}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para33}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para34}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para35}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para36}
            </li>
            <li className="text-lg font-inter leading-normal marker:text-red-500 ml-2 mr-2 md:ml-0 md:mr-0 text-justify mb-2">
              {translations[selectedLanguage].RE_para37}
            </li>
          </ul>
          </div>

         {/* Why Choose Us end Section */}

         <div className="mt-8">
             
              <div className="mt-8">
              <h2 className="text-2xl md:text-3xl font-semibold font-montserrat leading-tight mb-4 ml-4 md:ml-0">
                {translations[selectedLanguage].Why_choose_us}
              </h2>
              <ul className="space-y-5 pl-3 pr-3 md:pl-0 md:pr-0 text-justify">
                <li className="text-lg font-inter leading-normal ml-2 mr-5 md:ml-0 md:mr-5">
                  {translations[selectedLanguage].RE_para41}
                </li>
              <br></br>
                <li className="text-lg font-inter leading-normal ml-2 mr-5 md:ml-0 md:mr-5">
                  {translations[selectedLanguage].RE_para42}
                </li>
              <br></br>
                <li className="practice-area-further-info">
                  {translations[selectedLanguage].further_Information}
                </li>

                <br></br>
                <hr className="border-red-500 border-t-2 my-4 mx-3 md:mx-0" /> {/* Centered with space on mobile */}
              </ul>
                
              <br></br>
        </div>

   </div>


          {/* Why Choose Us end Section */}

      </div>


        {/* Large Screen: Practice Area on top */}
        <div className="hidden lg:block lg:col-span-1">
        <div className="bg-white p-4 rounded-md">
            <img
              src={Shreyasimg}
              alt="Kamala"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full mt-4"
              style={{ backgroundColor: "#0E1333" }}
            />
            <p className="text-center text-red-600 text-lg font-medium tracking-wider font-montserrat mt-2">
              {translations[selectedLanguage].Shreyas_Jayasimha}
            </p>
            <p className="text-center text-black">
              {translations[selectedLanguage].Shreyas_Jayasimha_role}
            </p>
          </div>

          <div className="bg-white p-4 rounded-md">
            <img
              src={Apoorvaimg  }
              alt="Apoorva Guruprasad "
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full mt-4"
              style={{ backgroundColor: "#0E1333" }}
            />
            <p className="text-center text-red-600 text-lg font-medium tracking-wider font-montserrat mt-2">
              {translations[selectedLanguage].Apoorva_Guruprasad}
            </p>
            <p className="text-center text-black">
              {translations[selectedLanguage].Partner}
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleContactClick}
              className="bg-white text-black border-2 border-red-500 px-6 py-2 rounded-md font-semibold hover:bg-red-500 hover:text-white"
            >
              {translations[selectedLanguage].Contact_partner}
            </button>
          </div>
        
        </div>
      </div>

      {/* Mobile: Practice Area at the bottom */}
      <div className="lg:hidden">
      <div className="bg-white p-4 rounded-md">
            <img
              src={Shreyasimg }
              alt="Shreyas"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full mt-4"
              style={{ backgroundColor: "#0E1333" }}
            />
            <p className="text-center text-red-600 text-lg font-medium tracking-wider font-montserrat mt-2">
              {translations[selectedLanguage].Shreyas_Jayasimha}
            </p>
            <p className="text-center text-black">
              {translations[selectedLanguage].Shreyas_Jayasimha_role}
            </p>
          </div>

          <div className="bg-white p-4 rounded-md">
            <img
              src={Apoorvaimg  }
              alt="Apoorva Guruprasad"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full mt-4"
              style={{ backgroundColor: "#0E1333" }}
            />
            <p className="text-center text-red-600 text-lg font-medium tracking-wider font-montserrat mt-2">
              {translations[selectedLanguage].Apoorva_Guruprasad}
            </p>
            <p className="text-center text-black">
              {translations[selectedLanguage].Partner}
            </p>
          </div>

          <div className="mt-4 flex justify-center">
          <button
              onClick={handleContactClick}
              className="bg-white text-black border-2 border-red-500 px-6 py-5 rounded-md font-semibold hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
            >
              {translations[selectedLanguage].Contact_partner}
          </button>

          </div>
        <br></br>
      </div>

      {/* Display Contact Form if showContactForm is true */}
      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default RealEstate;
