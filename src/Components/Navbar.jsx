"use client";
import React, { useState, useContext, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../src/styles/navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import { LanguageContext } from "../Components/LanguageContext";

const translations = {
  ar: require('../Components/json/Navbar/ar.json'),
  de: require('../Components/json/Navbar/de.json'),
  en: require('../Components/json/Navbar/en.json'),
  es: require('../Components/json/Navbar/es.json'),
  fr: require('../Components/json/Navbar/fr.json'),
  gu: require('../Components/json/Navbar/gu.json'),
  hi: require('../Components/json/Navbar/hi.json'),
  ja: require('../Components/json/Navbar/ja.json'),
  kn: require('../Components/json/Navbar/kn.json'),
  ko: require('../Components/json/Navbar/ko.json'),
  ml: require('../Components/json/Navbar/ml.json'),
  ru: require('../Components/json/Navbar/ru.json'),
  ta: require('../Components/json/Navbar/ta.json'),
  tel: require('../Components/json/Navbar/tel.json'),
  zh: require('../Components/json/Navbar/zh.json'),
};

const languageNames = {
  en: "English",
  kn: "ಕನ್ನಡ (Kannada)",
  ta: "தமிழ் (Tamil)",
  hi: "हिंदी (Hindi)",
  tel: "తెలుగు (Telugu)",
  fr: "française (French)",
  ja: "日本語 (Japanese)",
  es: "Española (Spanish)",
  zh: "中國人 (Chinese)",
  ar: "عربي (Arabic)",
  ko: "한국인 (Korean)",
  gu: "ગુજરાતી (Gujarati)",
  ru: "русский (Russian)",
  de: "Deutsch (German)",
  ml: "മലയാളം (Malayalam)"
};

const Navbar = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown
  };

  const handleLogoClick = () => {
    navigate(`/home`);
  };


  const handleLogInClick = () => {
    navigate(`/userSignIn`);
  };

  const handleccontactsClick = () => {
    navigate(`/contactus`);
  };

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".search-box") === null) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNavigation = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsSubmenuOpen(false);
    setIsSearchActive(false);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const handleMouseEnter = () => {
    setIsSearchActive(true);
  };

  const handleMouseLeave = () => {
    setIsSearchActive(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (slug) => {
    console.log(`Selected: ${slug}`);
    navigate(`/insights/${slug}`);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const search = e.target.value;
    setSearchInput(search);

    if (search.trim() === "") {
      setData([]);
      setShowSearchResults(false);
      return;
    }

    try {
      const response = await fetch(
        `https://www.aarnalaw.com/wp-json/wp/v2/posts?_embed&search=${search}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const results = await response.json();
      setData(results);
      setShowSearchResults(true);

      if (results.length === 0) {
        console.log("No search results found");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchClick = () => {
    if (searchInput.trim() !== "") {
      window.location.href = `/search-result?q=${encodeURIComponent(
        searchInput
      )}`;
    }
  };

  return (
    <div
      className="w-full relative flex justify-center"
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute z-50 flex justify-end space-x-5 my-5 w-11/12 md:w-11/12">
        <button className="bg-white text-custom-blue hover:text-white hover:bg-red-700 px-10 py-2 shadow-2xl "  onClick={handleLogInClick}>
          {translations[selectedLanguage].Log_in}
        </button>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full shadow-2xl px-4 py-3 bg-white text-custom-blue hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleDropdown}
            >
              {languageNames[selectedLanguage]}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.9l3.71-3.67a.75.75 0 111.04 1.08l-4.25 4.21a.75.75 0 01-1.04 0L5.21 8.3a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {Object.keys(languageNames).map((lang) => (
                  <button
                    key={lang}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-700 w-full text-left"
                    role="menuitem"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className="absolute bg-white dark:bg-gray-900 w-11/12 md:w-11/12 z-20 my-20 border-b border-gray-200 dark:border-gray-600 shadow-2xl">
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={handleLogoClick}>
            <img
              src={logo}
              height={60}
              width={200}
              alt="aarnalaw-logo"
              className="w-32 md:w-48 cursor-pointer"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse me-0 pe-0">
            <button
              type="button"
              className="border border-custom-red text-custom-red hover:bg-custom-red hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleccontactsClick} >
              {translations[selectedLanguage].contact_us}
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between text-center  w-full md:flex md:w-auto md:order-1 relative ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${
                isSearchActive ? "hidden" : ""
              }`}
            >
              <li className="z-10">
                <Link
                  to="/aboutus"
                  className="block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {translations[selectedLanguage].about_us}
                </Link>
              </li>
              <li className="z-10">
                <Link
                  to="/practice-area"
                  className="block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {translations[selectedLanguage].practice_area}
                </Link>
              </li>
              <li className="z-10">
                <Link
                  to="/industries"
                  className="block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {translations[selectedLanguage].industries}
                </Link>
              </li>
              <li className="relative">
                <div
                  className="block py-2 px-3 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  onClick={toggleSubmenu}
                >
                   {translations[selectedLanguage].news_insight}
                  <svg
                    className="w-4 h-4 ml-1 inline-block text-gray-500 group-hover:text-custom-red"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm1.5 0a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm5.5-4.5a1 1 0 00-.707.293l-3 3a1 1 0 001.414 1.414L9 8.414V14a1 1 0 102 0V8.414l2.293 2.293a1 1 0 001.414-1.414l-3-3A1 1 0 0010 5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {isSubmenuOpen && (
                  <ul className="flex flex-col mt-2 md:absolute md:-ml-6 bg-white md:bg-transparent md:shadow-none shadow-lg rounded-md">
                    <li>
                      <Link
                        to="/insights"
                        className="block py-2 px-4 text-custom-blue hover:bg-gray-100 hover:text-custom-red dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNavigation}
                      >
                         {translations[selectedLanguage].insights}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aarnaNews"
                        className="block py-2 px-4 text-custom-blue hover:bg-gray-100 hover:text-custom-red dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNavigation}
                      >
                         {translations[selectedLanguage].arnaNews}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/publications"
                        className="block py-2 px-4 text-custom-blue hover:bg-gray-100 hover:text-custom-red dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNavigation}
                      >
                        {translations[selectedLanguage].publication}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/podcast"
                        className="block py-2 px-4 text-custom-blue hover:bg-gray-100 hover:text-custom-red dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNavigation}
                      >
                         {translations[selectedLanguage].podcast}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="z-10">
              <Link
                  to="/careers"
                  className="block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {translations[selectedLanguage].careers}
                </Link>
                
              </li>
            </ul>
            <ul className="">
              <li className="relative lg:order-1 lg:ps-4">
                <div className="search-box z-40 text-end flex-col justify-center items-center">
                  <div className="relative">
                    <button
                      className="btn-search "
                      onClick={handleSearchClick}
                    >
                      <i className="text-custom-blue bi bi-search "></i>
                    </button>
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Type to Search..."
                      onChange={handleSearch}
                      value={searchInput}
                      onFocus={() => setShowSearchResults(true)}
                    />
                    {showSearchResults && data.length > 0 && (
                      <div className="absolute top-full mt-2 max-h-80 overflow-y-auto no-scrollbar bg-white p-2 text-start">
                        {data.map((item, index) => (
                          <div
                            key={index}
                            className="search-result-item"
                            onClick={() => handleOptionClick(item.slug)}
                          >
                            <div className="lg:flex hover:bg-blue-950 hover:text-white p-2 border-b cursor-pointer items-center">
                              {item._embedded &&
                                item._embedded["wp:featuredmedia"] && (
                                  <div
                                    className="mr-2"
                                    style={{ width: "100px" }}
                                  >
                                    <img
                                      src={
                                        item._embedded["wp:featuredmedia"][0]
                                          .source_url
                                      }
                                      alt={item.title.rendered}
                                      className="w-full h-auto hidden md:flex"
                                      width="100"
                                      height="100"
                                    />
                                  </div>
                                )}
                              <div className="lg:flex-1 lg:ps-3">
                                {item.title.rendered}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
