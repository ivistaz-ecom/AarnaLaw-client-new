import { numbers } from "../Home/utils/data"
import NumbersSpeakItem from "./NumbersSpeakItem"
import React, { useContext } from "react";
import { LanguageContext } from "../../Components/LanguageContext";

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

const NumbersSpeak = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center gap-10 mb-14">
      <h1 className="text-custom-red text-2xl font-semibold px-4">
      {translations[selectedLanguage].Numbers_Speaks}
      </h1>
      <ul className="flex justify-center flex-wrap gap-6 p-2">
        {numbers.map((item) => (
          <NumbersSpeakItem key={item.id} numberDetails={item} />
        ))}
      </ul>
    </div>
  )
}

export default NumbersSpeak
