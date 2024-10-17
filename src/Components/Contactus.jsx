import React, { useState, useContext } from "react";
import ContactusImg from "../images/contact-banner.jpg";
import ContactusmobImg from "../images/contact-mobile-banner.jpg";
import { LanguageContext } from "../Components/LanguageContext";

const Contactus = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const translations = {
    ar: require("../Components/json/Aboutus/ar.json"),
    de: require("../Components/json/Aboutus/de.json"),
    en: require("../Components/json/Aboutus/en.json"),
    es: require("../Components/json/Aboutus/es.json"),
    fr: require("../Components/json/Aboutus/fr.json"),
    gu: require("../Components/json/Aboutus/gu.json"),
    hi: require("../Components/json/Aboutus/hi.json"),
    ja: require("../Components/json/Aboutus/ja.json"),
    kn: require("../Components/json/Aboutus/kn.json"),
    ko: require("../Components/json/Aboutus/ko.json"),
    ml: require("../Components/json/Aboutus/ml.json"),
    ru: require("../Components/json/Aboutus/ru.json"),
    ta: require("../Components/json/Aboutus/ta.json"),
    tel: require("../Components/json/Aboutus/tel.json"),
    zh: require("../Components/json/Aboutus/zh.json"),
  };

  const handleGetDirection = (address) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const AddressCard = ({ city, address, phone }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{city}</h3>
      <div className="flex items-start mb-2">
        <span className="text-custom-red mr-2">📍</span>
        <p className="text-gray-600">{address}</p>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-custom-red mr-2">📞</span>
        <p className="text-gray-600">{phone}</p>
      </div>
      <button
        onClick={() => handleGetDirection(address)}
        className="mt-4 text-custom-red hover:text-red-600 transition-colors"
      >
        {translations[selectedLanguage].Get_direction}
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">

    {/* Desktop View */}
<header className="w-full relative hidden md:block">
  <img
    src={ContactusImg}
    className="w-full h-[500px] object-cover"
    alt="Contact Us"
  />
  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
    <p>Contact Us</p>
  </div>
</header>

{/* Mobile View */}
<header className="w-full relative block md:hidden">
  <img
    src={ContactusmobImg}
    className="w-full object-cover"
    alt="Contact Us"
  />
  <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
    <p>Contact Us</p>
  </div>
</header>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
{/* Testimonial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h5 className="text-2xl text-custom-blue font-bold mb-2 text-center">
        Client’s Testimonials
      </h5>

      {/* Card */}
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-10">
        <div className="p-4">
          <h5 className="text-xl text-custom-blue font-bold mb-2">Vinay Bhagwan</h5>
          <h6 className="text-base text-gray-500 mb-2">General Counsel</h6>
          <h6 className="text-base text-gray-500 mb-2">Daimler Trucks India</h6>
          <p className="text-gray-700 mb-4">
            My experience with Aarna Law has been nothing short of exceptional. The firm’s founding partners, Shreyas and Kamala, have managed the firm with remarkable vision and dedication, taking it to greater heights. Their leadership, coupled with their deep commitment to excellence, sets Aarna Law apart in the legal industry.
          </p>
          <button
            onClick={openModal}
            className="text-custom-red hover:text-custom-blue font-semibold"
          >
            Read more
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
          <div className="bg-white rounded-lg shadow-lg max-w-2xl mx-auto p-6 z-50">
            <h5 className="text-xl text-custom-blue font-bold mb-2">Vinay Bhagwan</h5>
            <h6 className="text-base text-gray-500 mb-2">General Counsel</h6>
            <h6 className="text-base text-gray-500 mb-2">Daimler Trucks India</h6>
            <p className="text-gray-700 mb-4">
            <p className="text-gray-700 mb-4"> My experience with Aarna Law has been nothing short of exceptional. The firm’s founding partners, Shreyas and Kamala, have managed the firm with remarkable vision and dedication, taking it to greater heights. Their leadership, coupled with their deep commitment to excellence, sets Aarna Law apart in the legal industry.</p>
            <p className="text-gray-700 mb-4"> As a husband-and-wife team, Shreyas and Kamala bring a unique dynamism to the firm, blending their individual strengths to create a cohesive and highly effective partnership. Their strategic acumen and meticulous attention to detail have been instrumental in guiding us through complex legal challenges.</p>
            <p className="text-gray-700 mb-4"> I am particularly impressed by their appetite for innovation, especially their efforts to integrate cutting-edge technology into their practice. This forward-thinking approach not only enhances efficiency but also ensures that clients receive the most sophisticated and effective legal solutions available.</p>
            <p className="text-gray-700 mb-4"> Beyond their technical proficiency, Shreyas and Kamala are known for their integrity, ethical standards, and genuine care for their clients. They have built a culture of trust and excellence that permeates the entire firm.</p>
            <p className="text-gray-700 mb-4">I wholeheartedly recommend Aarna Law and its outstanding team to anyone seeking top-notch legal representation.</p>
            </p>
            <button
              onClick={closeModal}
              className="text-red-500 hover:text-red-700 font-semibold mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>







        <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-[15px]" >
          {translations[selectedLanguage].Contact_Us}
        </h1>
        <p className="text-left text-[26px] font-semibold tracking-[1.6px] leading-normal border-b-2 border-[#EE3C23] pb-[15px] font-montserrat text-[#1C386A] mb-4">
          {translations[selectedLanguage].Aarna_Law}
        </p>

        <br></br>
        {/* Address cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AddressCard
            city={translations[selectedLanguage].Bengaluru}
            address={`${translations[selectedLanguage].Be_Address1}, ${translations[selectedLanguage].Be_Address2}, ${translations[selectedLanguage].Be_Address3}`}
            phone="+91 80 2356 6792"
          />
          <AddressCard
            city={translations[selectedLanguage].New_Delhi}
            address={`${translations[selectedLanguage].Del_Address1}, ${translations[selectedLanguage].Del_Address2}, ${translations[selectedLanguage].Del_Address3}`}
            phone="+91 11 4350 5878"
          />
          <AddressCard
            city={translations[selectedLanguage].Mumbai}
            address={`${translations[selectedLanguage].Mu_Address1}, ${translations[selectedLanguage].mu_Address2}, ${translations[selectedLanguage].mu_Address3}`}
            phone="+022 4077 9109"
          />
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">{translations[selectedLanguage].Send_us_a_message}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">
                  {translations[selectedLanguage].First_Name}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-red"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">
                  {translations[selectedLanguage].Last_Name}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-red"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                {translations[selectedLanguage].Email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-red"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                {translations[selectedLanguage].Phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-red"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                {translations[selectedLanguage].Message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-red h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-custom-red text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-custom-red focus:ring-offset-2"
            >
              {translations[selectedLanguage].Submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
