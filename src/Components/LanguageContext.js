// LanguageContext.js
import React, { createContext, useContext, useState } from "react";
export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage }} // Include setSelectedLanguage in the context value
    >
      {children}
    </LanguageContext.Provider>
  );
};
