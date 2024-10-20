import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../../images/insights-banner.png";
import { IoSearch } from "react-icons/io5";

const PublicationsContent = () => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const [error, setError] = useState(""); // State for error handling

  const handleTabClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 30) {
      return words.slice(0, 30).join(" ") + "...";
    }
    return content;
  };

  const fetchPublications = async (newOffset) => {
    setIsLoading(true); // Start loading
    setError(""); // Reset error state
    try {
      const response = await fetch(
        `https://docs.aarnalaw.com/wp-json/wp/v2/publications?_embed&per_page=100`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch publications");
      }

      const data = await response.json();

      console.log("Publication data=", data);

      const publicationData = data.map((item) => {
        const embedded = item["_embedded"] || {};
        const media = embedded["wp:featuredmedia"] || [];
        const imageUrl = media[0] ? media[0]["source_url"] : "";

        return {
          ...item,
          title: item.title?.rendered || item.yoast_head_json?.og_title,
          content: truncateContent(item["yoast_head_json"]["og_description"] || ""),
          imageUrl,
          date: item.date, // Add date here for later use
          formattedDate: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });

      setPublications((prevPublications) => [
        ...prevPublications,
        ...publicationData,
      ]);
      setFilteredPublications((prevPublications) => [
        ...prevPublications,
        ...publicationData,
      ]);
      setOffset(newOffset + limit);
    } catch (error) {
      console.error("Error fetching publications:", error);
      setError("Error fetching publications. Please try again."); // Set error message
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchPublications(0);
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    setSearchKeyword(keyword);

    const filtered = publications.filter((publication) =>
      publication.title.toLowerCase().includes(keyword)
    );
    setFilteredPublications(filtered);
  };

  const handleViewAllClick = () => {
    fetchPublications(offset);
  };

  const handlePublicationClick = (url) => {
    window.open(url, "_blank");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="w-full mb-8">
        <img
          src={NewsInsightsImg}
          className="w-full h-[500px] object-cover rounded-md"
          alt="News Insights"
        />
      </header>

      <div className="container mx-auto px-4 md:px-0">
        <div className="md:hidden relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md w-full text-left"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <span onClick={() => handleTabClick("/insights")} className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100">
                Insights
              </span>
              <span onClick={() => handleTabClick("/aarna-news")} className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100">
                Aarna News
              </span>
              <span onClick={() => handleTabClick("/publications")} className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100">
                Publications
              </span>
              <span onClick={() => handleTabClick("/podcast")} className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100">
                Podcast
              </span>
            </div>
          )}
        </div>

        <div className="hidden md:flex justify-center space-x-16 mb-8">
          <span onClick={() => handleTabClick("/insights")} className="text-gray-600 cursor-pointer hover:text-custom-red hover:underline transition">Insights</span>
          <span onClick={() => handleTabClick("/aarna-news")} className="text-gray-600 cursor-pointer hover:text-custom-red hover:underline transition">Aarna News</span>
          <span onClick={() => handleTabClick("/publications")} className="text-custom-red cursor-pointer hover:text-custom-red hover:underline transition">Publications</span>
          <span onClick={() => handleTabClick("/podcast")} className="text-gray-600 cursor-pointer hover:text-custom-red hover:underline transition">Podcast</span>
        </div>
      </div>

      <div className="px-[17%] mb-4">
        <div className="md:hidden">
          <h1 className="text-2xl font-semibold mt-4">Publications</h1>
          <div className="flex flex-col items-center gap-2 mt-2">
            <label htmlFor="keyword" className="hidden">Search by Key</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="keyword"
                value={searchKeyword}
                onChange={handleSearch}
                placeholder="Search by Keyword"
                 className="px-2 py-1 border-t-0 border-r-0 border-l-0 border-b-2 border-blue-950 text-lg focus:outline-none focus:border-red-500"
              />
              <IoSearch className="text-custom-blue" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-between items-left">
          <h1 className="text-2xl font-semibold">Publications</h1>
          <div className="flex items-right gap-2">
            <label htmlFor="keyword" className="hidden">Search by Keyword</label>
            <input
              type="text"
              id="keyword"
              value={searchKeyword}
              onChange={handleSearch}
              placeholder="Search by Keyword"
               className="px-2 py-1 border-t-0 border-r-0 border-l-0 border-b-2 border-blue-950 text-lg focus:outline-none focus:border-red-500"
            />
            <IoSearch className="text-custom-blue mt-3" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-4">
        {isLoading && (
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid border-opacity-70"></div>
        )}
        {error && (
          <p className="text-red-500 font-semibold">{error}</p>
        )}
      </div>

      <div className="container md:px-4 mx-auto max-w-screen grid grid-cols-1 md:grid-cols-2 gap-10">
  {filteredPublications.length === 0 && !isLoading ? (
    <div className="text-center col-span-2">
      <p className="text-red-500 font-semibold items-center md:pt-24 justify-center min-h-[300px]">
        No results found.
      </p>
    </div>
  ) : (
    filteredPublications.slice(0, 9).map((publication) => {
      const { title, content, date, formattedDate } = publication; // Destructure values from publication

      // Add a check to ensure 'title' exists
      if (!title) {
        console.error("Publication data is incomplete:", publication);
        return null;
      }

      return (
        <li
          className="flex w-full bg-white border border-gray-200 shadow dark:bg-white dark:border-gray-400 mb-0"
          key={publication.id}
        >
          {/* Conditionally render the left side if date is present */}
          {date && (
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 w-[25%]">
              <span className="text-2xl text-custom-red">
                {new Date(date).getDate()}
              </span>{" "}
              {/* Day */}
              <span className="text-lg font-semibold">
                {new Date(date).toLocaleString("default", { month: "short" })}
              </span>{" "}
              {/* Month */}
              <span className="text-lg font-semibold">
                {new Date(date).getFullYear()}
              </span>{" "}
              {/* Year */}
            </div>
          )}

          {/* Main content */}
          <div
            className={`flex-1 p-4 ${date ? "border-l border-gray-200" : ""}`}
            onClick={() => handlePublicationClick(publication.link)}
          >
            <h2
              className="text-xl font-bold text-black transition line-clamp-2"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <p
              className="text-gray-600 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>

            {/* Read More button */}
            <button
              className="mt-4 text-custom-red py-2 rounded-md hover:underline transition"
              onClick={() => handlePublicationClick(publication.link)}
            >
              Read More
            </button>
          </div>
        </li>
      );
    })
  )}
</div>

{filteredPublications.length > 9 && (
  <div className="text-center mt-8">
    <button
      onClick={handleViewAllClick}
      className="text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
    >
      View All
    </button>
  </div>
)}

    </div>
  );
};

export default PublicationsContent;
