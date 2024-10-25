import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../../images/insights-banner.png";
import NewsInsightsMobImg from "../../../images/InsightMobileBanner.jpg";
import { IoSearch } from "react-icons/io5";

const PublicationComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleTabClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after navigating
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [data, setData] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.aarnalaw.com/wp-json/wp/v2/publications?_embed&per_page=100`
        );
        const result = await response.json();

        if (Array.isArray(result)) {
          const sortedData = result.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setData(sortedData);
        } else {
          console.error("Expected an array but got:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date
      .toLocaleString("default", { month: "short" })
      .toUpperCase();
    const year = date.getFullYear();
    return { day, month, year };
  };

  const filteredData = searchKeyword
    ? data.filter(
        (post) =>
          post.title.rendered
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) ||
          (post.yoast_head_json?.og_description || "")
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
      )
    : data;

  const handleViewMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  return (
    <div className="">
      {/* Desktop Header */}
      <header className="relative hidden md:block">
        <img src={NewsInsightsImg} className="w-full" alt="Publications " />
        <div className="absolute inset-x-0 top-2/4 text-white text-5xl font-bold text-center">
          Publications
        </div>
      </header>

      {/* Mobile View */}
      <header className="relative block md:hidden">
        <img src={NewsInsightsMobImg} className="w-full" alt="Publications " />
        <div className="absolute inset-x-0 top-2/4 text-white text-3xl font-bold text-center">
          Publications
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-0 py-5">
        <div className="md:hidden relative">
          {/* <button
            onClick={toggleDropdown}
            className="bg-gray-50 font-bold text-black border-b border-blue-900 px-4 py-2 rounded-md w-full text-left"
          >
            Menu
          </button> */}
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
        <div className="hidden md:flex justify-center space-x-16 mb-8">
          <span
            onClick={() => handleTabClick("/insights")}
            className="text-gray-600 cursor-pointer hover:text-custom-red hover:underline transition"
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
            className="text-custom-red cursor-pointer hover:text-custom-red hover:underline transition"
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

      {/* Mobile View: Insights and Search */}
      <div className="md:px-[17%] px-2 mb-4">
        <div className="md:hidden ">
          <div className="flex items-center gap-1 mt-2">
            <h1 className="text-xl font-semibold">Publications</h1>
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
                className="px-2 py-1 w-44 border-t-0 border-r-0 border-l-0 border-b-2 border-blue-950 text-lg focus:outline-none focus:border-red-500"
              />
              <IoSearch className="text-custom-red" />
            </div>
          </div>
        </div>

        {/* Desktop View: Insights */}
        <div className="hidden md:flex justify-between items-left">
          <h1 className="text-2xl font-semibold">Publication</h1>
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
            <IoSearch className="text-custom-red mt-3 " />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white-900 via-blue-800 to-blue-900 md:p-8 p-4">
        {data.length === 0 ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid border-opacity-70"></div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {filteredData.length > 0 ? (
                filteredData.slice(0, visiblePosts).map((post) => {
                  const { day, month, year } = formatDate(post.date);
                  return (
                    <div
                      key={post.id}
                      className="relative flex bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="flex w-full">
                        <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
                          <div className="text-2xl text-custom-red">{day}</div>
                          <div className="text-lg font-medium text-black">
                            {month}
                          </div>
                          <div className="text-md font-medium text-black">
                            {year}
                          </div>
                        </div>

                        <div className="ml-4 flex flex-col justify-center p-4">
                          <h2
                            className="text-xl text-black line-clamp-2"
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          />
                          <p
                            className="text-gray-700 mt-2 line-clamp-2"
                            dangerouslySetInnerHTML={{
                              __html:
                                post.yoast_head_json?.og_description || "",
                            }}
                          />
                          <a
                            href={`/publications/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-custom-red hover:underline mt-4"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center col-span-2">
                  <p className="text-red-500 font-semibold items-center md:pt-24 justify-center min-h-[300px]">
                    No results found.
                  </p>
                </div>
              )}
            </div>

            {visiblePosts < filteredData.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleViewMore}
                  className="px-4 py-2 text-custom-red transition hover:underline"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationComponent;
