import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const PageNotFound = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    const timeout = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  // Tailwind CSS Custom Animations
  const style = `
            @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
            }
            
            @keyframes bounceHorizontal {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-10px); }
            }
            .animate-shake {
            animation: shake 1s ease-in-out infinite;
            }
            .animate-bounce-horizontal {
            animation: bounceHorizontal 1s infinite;
            }
            `;

  // Adding the custom styles dynamically to the document
  const addCustomStyles = () => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);
  };

  addCustomStyles();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* 404 Error with a shake animation */}
      <h1
        className={`text-6xl font-bold text-red-600 mb-4 transform transition-all duration-700 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        404 Error
      </h1>

      {/* Page Not Found text */}
      <h2
        className={`text-3xl text-gray-700 transition-all duration-700 delay-200 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Page Not Found
      </h2>

      {/* Description */}
      <p
        className={`text-lg text-gray-500 mt-4 transition-all duration-700 delay-400 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Arrow link with bounce animation */}
      <a
        href="/"
        className={`mt-6 flex items-center font-semibold text-custom-blue hover:text-custom-gray transition duration-300 ease-in-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <FaArrowLeft className="mr-2 animate-bounce-horizontal" />
        Go Back Home
      </a>
    </div>
  );
};

export default PageNotFound;
