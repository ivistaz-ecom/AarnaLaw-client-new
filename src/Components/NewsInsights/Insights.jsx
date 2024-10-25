import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../images/insights-banner.png";
import NewsInsightsMobImg from "../../images/InsightMobileBanner.jpg";
import { IoSearch } from "react-icons/io5";

const Insights = () => {
  const navigate = useNavigate();
  const [insights, setInsights] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(""); // State for search input
  const [visibleCount, setVisibleCount] = useState(4); // State for managing visible insights
  const [loading, setLoading] = useState(true); // State for loading
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after navigating
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fetchInsights = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const response = await fetch(
        `https://docs.aarnalaw.com/wp-json/wp/v2/posts?_embed&per_page=100`
      );
      const data = await response.json();

      const newInsights = data.map((item) => {
        const imageUrl =
          item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
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

      setInsights(newInsights);
    } catch (error) {
      console.error("Error fetching insights:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength - 3) + "...";
  };

  useEffect(() => {
    fetchInsights(); // Fetch all insights
  }, []);

  // Function to filter insights based on search input
  const filteredInsights = insights.filter(
    (item) =>
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Increase the visible count by 4
  };

  return (
    <div>
      {/* Header Section */}
      {/* Desktop Header */}
      <header className="relative hidden md:block">
        <img src={NewsInsightsImg} className="w-full" alt="Insights " />
        <div className="absolute inset-x-0 top-2/4 text-white text-5xl font-bold text-center">
          Insights
        </div>
      </header>

      {/* Mobile View */}
      <header className="relative block md:hidden">
        <img src={NewsInsightsMobImg} className="w-full" alt="Insights " />
        <div className="absolute inset-x-0 top-2/4 text-white text-3xl font-bold text-center">
          Insights
        </div>
      </header>

      {/* Mobile Dropdown */}
      <div className="container mx-auto px-4 md:px-0 py-5">
        <div className="md:hidden relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-50 text-gray-600 px-4 py-2 rounded-md w-full text-left"
          >
            Insights
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

        {/* Tabs Section */}
        <div className="container mx-auto px-4 md:px-0">
          <div className="hidden md:flex justify-center space-x-16 mb-8">
            <span
              onClick={() => handleTabClick("/insights")}
              className="text-custom-red cursor-pointer hover:text-custom-red hover:underline transition"
            >
              Insights
            </span>
            <span
              onClick={() => handleTabClick("/aarna-news")}
              className="text-gray-600 cursor-pointer hover:text-custom-red hover:underline transition"
            >
              Aarna News
            </span>
            <span
              onClick={() => handleTabClick("/publications")}
              className="text-gray-600 cursor-pointer hover:text-custom-red hover:underline transition"
            >
              Publications
            </span>
            <span
              onClick={() => handleTabClick("/podcast")}
              className="text-gray-600 cursor-pointer hover:text-custom-red hover:underline transition"
            >
              Podcast
            </span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="px-2 md:px-[17%] mb-4">
        {/* Mobile View: Insights and Search */}
        <div className="md:hidden">
          <div className="flex items-center gap-4 mt-4">
            <h1 className="text-xl font-semibold">Insights</h1>
            <div className="flex items-center gap-2">
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
              <IoSearch className="text-custom-red" />
            </div>
          </div>
        </div>

        {/* desktop view */}
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
              value={searchKeyword} // Bind search input value
              onChange={(e) => setSearchKeyword(e.target.value)} // Update state on change
              className="px-2 py-1 border-t-0 border-r-0 border-l-0 border-b-2 border-blue-950 text-lg focus:outline-none focus:border-red-500"
            />
            <IoSearch className="text-custom-red mt-3" />
          </div>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center mb-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid border-opacity-70"></div>
        </div>
      ) : (
        // Displaying Insights
        <div className="md:px-2 mx-auto max-w-screen-xl grid md:grid-cols-2 gap-2">
          {searchKeyword === "" ? (
            // Show limited insights when search is empty
            insights.slice(0, visibleCount).map((item) => (
              <div key={item.id} className="p-2">
                <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2 h-14 overflow-hidden">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-2 line-clamp-2">{item.desc}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    {item.formattedDate}
                  </p>
                  <a
                    href={`/insights/${item.slug}`}
                    className="text-custom-red font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : filteredInsights.length > 0 ? (
            // Display filtered insights when search input is not empty
            filteredInsights.slice(0, visibleCount).map((item) => (
              <div key={item.id} className="p-2">
                <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    {item.formattedDate}
                  </p>
                  <a
                    href={`/insights/${item.slug}`}
                    className="text-custom-red font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            // Show no results found
            <div className="text-center col-span-2">
              <p className="text-red-500 font-semibold items-center md:pt-24 justify-center min-h-[300px]">
                No results found.
              </p>
            </div>
          )}
        </div>
      )}

      {/* View More Button */}
      {visibleCount < insights.length && searchKeyword === "" && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-4 py-2 text-custom-red transition hover:underline"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Insights;
