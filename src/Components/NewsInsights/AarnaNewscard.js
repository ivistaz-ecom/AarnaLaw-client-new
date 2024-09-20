import React from "react";

const AarnaNewscard = ({ cardDetails, onTitleClick }) => {
  const { title, date, content } = cardDetails;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
    const year = date.getFullYear();
    return { day, month, year };
  };

  const { day, month, year } = formatDate(date);

  return (
    <li className="flex w-full md:w-[710px] bg-white border border-gray-200 shadow dark:bg-white dark:border-gray-400 mb-10">
      {/* Left Side (Date) */}
      <div className="flex flex-col items-center justify-center p-4 bg-gray-200 w-[35%]">
        <span className="text-2xl text-red-800 font-bold">{day}</span>
        <span className="text-xl font-bold">{month}</span>
        <span className="text-lg font-bold">{year}</span>
      </div>

      {/* Right Side (Content) */}
      <div className="flex flex-col flex-grow">
        <div className="p-5 flex text-gray-800 flex-col items-start flex-grow">
          <h5
            className="text-lg md:text-xl text-custom-blue font-semibold mb-3 cursor-pointer"
            onClick={onTitleClick}
          >
            {title}
          </h5>

          <p className="text-md md:text-lg text-custom-blue font-semibold mb-3">
            {content}
          </p>
        </div>
      </div>
    </li>
  );
};

export default AarnaNewscard;
