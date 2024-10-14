import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../images/NewsInsights.jpeg";
import { IoSearch } from "react-icons/io5";

const Insights = () => {
  const navigate = useNavigate();
  const [insights, setInsights] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10; // Number of insights to fetch each time
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to fetch insights from the API
  const handleTabClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after navigating
  };

  const fetchInsights = async (newOffset) => {
    try {
      const response = await fetch(
        `https://docs.aarnalaw.com/wp-json/wp/v2/posts?_embed&offset=${newOffset}&per_page=${limit}`
      );
      const data = await response.json();

      console.log("Insights data:", data);

      const newInsights = data.map((item) => {
        const imageUrl = item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
        return {
          ...item,
          imageUrl: imageUrl,
          title: item["yoast_head_json"]["title"],
          desc: truncateText(item["yoast_head_json"]["og_description"], 150), // Truncate description to two lines
          formattedDate: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          link: item.link, // Add link to each insight
        };
      });

      setInsights((prevInsights) => [...prevInsights, ...newInsights]);
      setOffset(newOffset + limit);
    } catch (error) {
      console.error("Error fetching insights:", error);
    }
  };

  // Function to truncate text to a specified length
  const truncateText = (text, maxLength) => {
    if (!text) return ""; // Check for undefined or null text
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength - 3) + "...";
  };

  useEffect(() => {
    fetchInsights(0); // Fetch initial insights
  }, []);

  // Function to handle "View All" button click
  const handleViewAllClick = () => {
    fetchInsights(offset);
  };

  // Function to handle view article button click
  const handleViewArticleClick = (url) => {
    window.location.href = url;
  };

  // Function to toggle mobile dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="w-full h-48 md:h-96 mb-8">
        <img
          src={NewsInsightsImg}
          className="w-full h-full object-cover rounded-md"
          alt="NewsInsights"
        />
      </header>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 md:px-0">
        {/* Mobile Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md w-full text-left"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <span
                onClick={() => handleTabClick("/insights")}
                className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100"
              >
                Insights
              </span>
              <span
                onClick={() => handleTabClick("/aarna-news")}
                className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100"
              >
                Aarna News
              </span>
              <span
                onClick={() => handleTabClick("/publications")}
                className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100"
              >
                Publications
              </span>
              <span
                onClick={() => handleTabClick("/podcast")}
                className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100"
              >
                Podcast
              </span>
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center space-x-16 mb-8">
          <span
            onClick={() => handleTabClick("/insights")}
            className="text-gray-600 cursor-pointer hover:text-blue-500 transition"
          >
            Insights
          </span>
          <span
            onClick={() => handleTabClick("/aarna-news")}
            className="text-gray-600 cursor-pointer hover:text-blue-700 transition"
          >
            Aarna News
          </span>
          <span
            onClick={() => handleTabClick("/publications")}
            className="text-gray-600 cursor-pointer hover:text-blue-700 transition"
          >
            Publications
          </span>
          <span
            onClick={() => handleTabClick("/podcast")}
            className="text-gray-600 cursor-pointer hover:text-blue-700 transition"
          >
            Podcast
          </span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-[17%] mb-4">
        {/* Mobile View: Insights and Search */}
        <div className="md:hidden">
          <h1 className="text-2xl font-semibold mt-4">Insights</h1>
          <div className="flex flex-col items-center gap-2 mt-2">
            <label htmlFor="keyword" className="hidden">
              Search by Keyword
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="keyword"
                placeholder="Search by Keyword"
                className="px-2 py-1 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <IoSearch className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Desktop View: Insights */}
        <div className="hidden md:flex justify-between items-left">
          <h1 className="text-2xl font-semibold">Insights</h1>
          <div className="flex items-right gap-2">
            <label htmlFor="keyword" className="hidden">
              Search by Keyword
            </label>
            <input
              type="text"
              id="keyword"
              placeholder="Search by Keyword"
              className="px-2 py-1 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <IoSearch className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Displaying Insights in Rows */}
      <div className="md:px-2 mx-auto max-w-screen-xl grid md:grid-cols-2 gap-2">
        {insights.map((item) => (
          <div key={item.id} className="p-2">
            <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.desc}</p>
              <p className="text-gray-500 text-sm mb-4">{item.formattedDate}</p>
              <a
                href={item.link}
                className="text-custom-red font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Section */}
      <div className="flex justify-center my-8">
        <button
          onClick={handleViewAllClick}
          className="text-custom-blue text-lg font-semibold hover:text-custom-red transition"
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Insights;
