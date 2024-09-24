import React from "react";

const PublicationsCard1 = ({ cardDetails }) => {
  const {  title, date, content, formattedDate } = cardDetails;
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
      {/* Left Side (Date and Image) */}
      <div className="flex flex-col items-center justify-center p-4 bg-gray-200 w-[35%]">
            <span className="text-2xl  text-custom-red font-bold">{day}</span>
            <span className="text-xl font-bold">{month}</span>
            <span className="text-lg font-bold">{year}</span>
       </div>

      
      {/* Right Side (Content) */}
      <div className="flex flex-col flex-grow">
       
        <div className="p-5 flex text-gray-800 flex-col items-start flex-grow">
          <h5 className="text-lg md:text-xl text-custom-blue  font-semibold mb-3">
            {title}
          </h5>

          <h5 className="text-md md:text-lg text-custom-blue font-semibold mb-3">
            {content}
          </h5>
          <a href="https://www.aarnalaw.com/publications/the-art-law-review/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read MORE</a>
          
        </div>
      </div>
    </li>
  );
};

export default PublicationsCard1;
