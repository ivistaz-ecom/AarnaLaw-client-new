import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../images/insights-banner.png";
import { IoSearch } from "react-icons/io5";
import PodcastCard from "../NewsInsights/PodcastCard";

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(""); // State for search keyword
  const hasFetchedData = useRef(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to fetch insights from the API
  const handleTabClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after navigating
  };

  useEffect(() => {
    if (!hasFetchedData.current) {
      const fetchPodcasts = async () => {
        try {
          const response = await fetch(
            "https://docs.aarnalaw.com/wp-json/wp/v2/podcast"
          );
          const data = await response.json();
          const latestPodcasts = data
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 10)
            .map((podcast) => ({
              ...podcast,
              formattedDate: formatDate(podcast.date),
              imageUrl: podcast.episode_featured_image,
              podcastexcerpt: podcast.excerpt.rendered,
            }));

          setPodcasts(latestPodcasts);
        } catch (error) {
          console.log(error);
        }
      };

      fetchPodcasts();
      hasFetchedData.current = true;
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Filtered podcasts based on search keyword
  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.rendered.toLowerCase().includes(searchKeyword.toLowerCase())
  );

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
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)} // Update searchKeyword on input change
                className="px-2 py-1 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <IoSearch className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Desktop View: Insights */}
        <div className="hidden md:flex justify-between items-left">
          <h1 className="text-2xl font-semibold">Podcast</h1>
          <div className="flex items-right gap-2">
            <label htmlFor="keyword" className="hidden">
              Search by Keyword
            </label>
            <input
              type="text"
              id="keyword"
              placeholder="Search by Keyword"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)} // Update searchKeyword on input change
              className="px-2 py-1 border-t-0 border-r-0 border-l-0 border-b-2 border-blue-950 text-lg focus:outline-none focus:border-red-500"
            />
            <IoSearch className="text-custom-blue mt-3 " />
          </div>
        </div>
      </div>

      {/* Displaying Podcasts in Blue Background */}
      <div className="md:px-4 mx-auto max-w-screen-xl flex flex-col gap-10">
        <div className="md:px-4 mx-auto max-w-screen-xl flex flex-col gap-10">
          {filteredPodcasts.length > 0 ? (
            filteredPodcasts.map((item) => (
              <PodcastCard key={item.id} podcastDetails={item} />
            ))
          ) : (
            <div className="text-center col-span-2">
            <p className="text-red-500 font-semibold items-center md:pt-24 justify-center min-h-[300px]">No results found.</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
