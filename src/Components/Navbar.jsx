"use client";
import React, { useState, useContext, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../src/styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import { LanguageContext } from "../Components/LanguageContext";
import { FaArrowCircleUp } from "react-icons/fa";
import Search from "./search";

const Navbar = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".search-box") === null) {
        setIsSearchActive(false);
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

  const handleMouseLeave = () => {
    setIsSearchActive(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleOptionClick = (slug) => {
    navigate(`/insights/${slug}`);
  };

  return (
    <div
      className="w-full relative flex justify-center"
      onMouseLeave={handleMouseLeave}
    >
      <nav
        className="absolute bg-white dark:bg-gray-900 md:w-11/12 w-full z-20 md:mt-20 mt-5 border-b border-gray-200 dark:border-gray-600 shadow-2xl"
        onMouseLeave={() => setIsSubmenuOpen(false)}
      >
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={logo}
              height={60}
              width={200}
              alt="aarnalaw-logo"
              className="w-32 md:w-48 cursor-pointer"
            />
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse me-0 pe-0">
            <Link
              type="button"
              className="border border-custom-red text-custom-red hover:bg-custom-red hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              to="contactus"
            >
              Contact Us
            </Link>
            <Link
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
            </Link>
          </div>

          <div
            className={`items-center justify-between text-center w-full md:flex md:w-auto md:order-1 relative ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="z-10">
                <Link
                  to="/aboutus"
                  className="block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li className="z-10">
                <Link
                  to="/practice-area"
                  className="block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Practice Area
                </Link>
              </li>
              <li className="z-10">
                <Link
                  to="/industries"
                  className="block py-2 px-1 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Industries
                </Link>
              </li>

              <li className="relative group">
                <div
                  className="block py-2 px-3 text-custom-blue rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-custom-red md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  onMouseEnter={() => setIsSubmenuOpen(true)}
                >
                  News & Insight
                  <FaArrowCircleUp
                    className={`w-4 h-4 ml-2 inline-block text-custom-blue transition-transform duration-300 group-hover:text-custom-red ${
                      isSubmenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {isSubmenuOpen && (
                  <ul
                    className="flex flex-col mt-2 md:absolute bg-white rounded-md shadow-lg"
                    onMouseEnter={() => setIsSubmenuOpen(true)}
                    onMouseLeave={() => setIsSubmenuOpen(false)}
                  >
                    <li>
                      <Link
                        to="/insights"
                        className="block py-2 px-4 text-custom-blue hover:bg-gray-100 hover:text-custom-red dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNavigation}
                      >
                        Insights
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aarna-news"
                        className="block py-2 px-4 text-custom-blue hover:bg-gray-100 hover:text-custom-red dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNavigation}
                      >
                        Arna News
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/publications"
                        className="block py-2 px-4 text-custom-blue hover:bg-gray-100 hover:text-custom-red dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNavigation}
                      >
                        Publication
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/podcast"
                        className="block py-2 px-4 text-custom-blue hover:bg-gray-100 hover:text-custom-red dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNavigation}
                      >
                        Podcast
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <div className={`flex-col ${isSearchActive ? "hidden" : ""}`}>
            <Search
              handleSearchClick={handleSearchClick}
              handleOptionClick={handleOptionClick}
            />
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
