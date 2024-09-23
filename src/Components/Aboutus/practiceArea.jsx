import React, { useContext } from "react";
import { LanguageContext } from "../../Components/LanguageContext";
import { useNavigate } from "react-router-dom";

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

const PracticeArea = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handlePracticeAreaClick = (path) => {
    navigate(path);
  };

  const practiceAreas = [
    { key: "Art_Law", path: "/practice-area/art-law" },
    { key: "Corporate_Advisor", path: "/practice-area/corporate-advisory" },
    { key: "Domestic_AM", path: "/practice-area/arbitrations-mediation" },
    { key: "Int_DesResolution", path: "/practice-area/international-disputes" },
    { key: "Bank_ResIns", path: "/practice-area/bankruptcy-ins" },
    { key: "Farud_Assets_Enforcement", path: "/practice-area/fraud" },
    { key: "Low_bano", path: "/practice-area/lowbono" },
    {
      key: "Risk_Management_and_Compliance",
      path: "/practice-area/risk-management",
    },
    { key: "Intelectual_Property", path: "/practice-area/ipr" },
    { key: "Private_Clinet_Prctice", path: "/practice-area/private-clients" },
    { key: "Trail_Litigation", path: "/practice-area/trial-litigation" },
    { key: "REAL_ESTATE", path: "/practice-area/real-estate" },
  ];

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const columns = chunkArray(
    practiceAreas,
    Math.ceil(practiceAreas.length / 3)
  );

  return (
    <div className="bg-[#151C4A] py-16 px-4 sm:px-6 lg:px-8 mx-auto  justify-center items-center ">
      <div className="max-w-7xl mx-auto pl-0 md:pl-20">
        <h2 className="text-center text-white text-3xl font-bold mb-12 font-Montserrat">
          {translations[selectedLanguage].Practice_Areas}
        </h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {columns.map((column, columnIndex) => (
            <React.Fragment key={columnIndex}>
              <div className="flex-1">
                <div className="space-y-4">
                  {column.map((area) => (
                    <p
                      key={area.key}
                      onClick={() => handlePracticeAreaClick(area.path)}
                      className="text-white text-sm font-semibold cursor-pointer hover:text-blue-400 transition-colors duration-200 uppercase"
                    >
                      {translations[selectedLanguage][area.key]}
                    </p>
                  ))}
                </div>
              </div>
              {columnIndex < 2 && (
                <>
                  {/* Horizontal line for mobile */}
                  <div className="block md:hidden w-full h-px bg-red-500 my-4"></div>
                  {/* Vertical line for medium and larger screens */}
                  <div className="hidden md:block w-px bg-red-500 self-stretch"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
