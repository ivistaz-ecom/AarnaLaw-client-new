import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../images/insights-banner.png";
import PublicationsCard from "./PublicationsCard";
import { IoSearch } from "react-icons/io5";

const Publications = () => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10; // Number of publications to fetch each time
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after navigating
  };

  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 30) {
      return words.slice(0, 30).join(" ") + "...";
    }
    return content;
  };

  const fetchPublications = async (newOffset) => {
    try {
      const response = await fetch(
        `https://docs.aarnalaw.com/wp-json/wp/v2/publications?_embed`
      );
      const data = await response.json();

      const publicationData = data.map((item) => {
        const embedded = item["_embedded"] || {};
        const media = embedded["wp:featuredmedia"] || [];
        const imageUrl = media[0] ? media[0]["source_url"] : "";

        return {
          ...item,
          title: item["yoast_head_json"]["title"],
          content: truncateContent(item["yoast_head_json"]["og_description"] || ""), // Truncate content
          imageUrl,
          formattedDate: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });

      setPublications((prevPublications) => [...prevPublications, ...publicationData]);
      setOffset(newOffset + limit);
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };

  useEffect(() => {
    fetchPublications(0); // Fetch initial publications
  }, []);

  const handleViewAllClick = () => {
    fetchPublications(offset);
  };

  // Function to handle clicking on publication title
  const handlePublicationClick = (url) => {
    window.open(url, "_blank"); // Open URL in a new tab
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      {/* Header Section */}
      <header className="w-full mb-8">
        <img
          src={NewsInsightsImg}
          className="w-full h-[500px] object-cover rounded-md"
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
          <h1 className="text-2xl font-semibold mt-4"> Publications</h1>
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
          <h1 className="text-2xl font-semibold">Publications</h1>
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


      {/* Displaying Publications in Rows */}
      <div className="md:px-4 mx-auto max-w-screen-xl flex flex-col gap-10">
        {[...Array(Math.ceil(publications.length / 2))].map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row gap-10">
            {[...Array(2)].map((_, colIndex) => {
              const index = rowIndex * 2 + colIndex;
              if (publications[index]) {
                return (
                  <PublicationsCard
                    key={publications[index].id}
                    cardDetails={publications[index]}
                    onTitleClick={() => handlePublicationClick(publications[index].link)}
                  />
                );
              } else {
                return null;
              }
            })}
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

export default Publications;
