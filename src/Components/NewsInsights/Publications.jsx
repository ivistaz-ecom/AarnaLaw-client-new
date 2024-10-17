import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../images/insights-banner.png";
import PublicationsCard from "./PublicationsCard";
import { IoSearch } from "react-icons/io5";

const Publications = () => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading

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
          content: truncateContent(item["yoast_head_json"]["og_description"] || ""),
          imageUrl,
          formattedDate: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });

      setPublications((prevPublications) => [...prevPublications, ...publicationData]);
      setFilteredPublications((prevPublications) => [...prevPublications, ...publicationData]);
      setOffset(newOffset + limit);
    } catch (error) {
      console.error("Error fetching publications:", error);
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
          alt="NewsInsights"
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
          <span onClick={() => handleTabClick("/insights")} className="text-gray-600 cursor-pointer hover:text-blue-500 transition">Insights</span>
          <span onClick={() => handleTabClick("/aarna-news")} className="text-gray-600 cursor-pointer hover:text-blue-700 transition">Aarna News</span>
          <span onClick={() => handleTabClick("/publications")} className="text-gray-600 cursor-pointer hover:text-blue-700 transition">Publications</span>
          <span onClick={() => handleTabClick("/podcast")} className="text-gray-600 cursor-pointer hover:text-blue-700 transition">Podcast</span>
        </div>
      </div>

      <div className="px-[17%] mb-4">
        <div className="md:hidden">
          <h1 className="text-2xl font-semibold mt-4"> Publications</h1>
          <div className="flex flex-col items-center gap-2 mt-2">
            <label htmlFor="keyword" className="hidden">Search by Key</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="keyword"
                value={searchKeyword}
                onChange={handleSearch}
                placeholder="Search by Keyword"
                className="px-2 py-1 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <IoSearch className="text-gray-400" />
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
              className="px-2 py-1 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <IoSearch className="text-gray-400 mt-3" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-4">
        {isLoading && (
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid border-opacity-70"></div>
        )}
      </div>

      <div className="container md:px-4 mx-auto max-w-screen grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPublications.length === 0 && !isLoading ? (
          <div className="text-center col-span-2">
            <p className="text-red-500 font-semibold items-center md:pt-24 justify-center min-h-[300px]">
              No results found.
            </p>
          </div>
        ) : (
          filteredPublications.slice(0, 9).map((publication) => (
            <PublicationsCard
              key={publication.id}
              cardDetails={publication}
              onTitleClick={() => handlePublicationClick(publication.link)}
            />
          ))
        )}
      </div>

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
