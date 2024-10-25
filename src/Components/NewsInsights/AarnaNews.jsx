import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../images/insights-banner.png";
import { IoSearch } from "react-icons/io5";
import NewsInsightsMobImg from "../../images/InsightMobileBanner.jpg";

const AarnaNews = () => {
  const navigate = useNavigate();
  const [aarnaNews, setAarnaNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]); // State for filtered news
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards
  const [loading, setLoading] = useState(true); // Loading state

  const handleTabClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  const catgorie_id = 9;
  const fetchAarnaNews = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(
        `https://docs.aarnalaw.com/wp-json/wp/v2/posts?_embed&categories=${catgorie_id}&per_page=100`
      );
      const data = await response.json();

      const aarnaNewsData = data.map((item) => {
        const imageUrl =
          item._embedded && item._embedded["wp:featuredmedia"]
            ? item._embedded["wp:featuredmedia"][0].source_url
            : ""; // Get image from _embedded data

        return {
          ...item,
          imageUrl,
          title: item.yoast_head_json.title,
          content: item.yoast_head_json.og_description,
          formattedDate: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });

      setAarnaNews(aarnaNewsData);
      setFilteredNews(aarnaNewsData); // Initially set filtered news to all news
    } catch (error) {
      console.error("Error fetching publications:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchAarnaNews();
  }, []);

  // Handle the search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the news based on the search query
    const filtered = aarnaNews.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );

    setFilteredNews(filtered);
  };

  // Function to show more cards
  const handleViewMore = () => {
    setVisibleCards(filteredNews.length); // Show all remaining cards
  };

  return (
    <div>
      {/* Header Section */}
        {/* Desktop Header */}
        <header className="relative hidden md:block">
        <img src={NewsInsightsImg} className="w-full" alt="Aarna News " />
        <div className="absolute inset-x-0 top-2/4 text-white text-5xl font-bold text-center">
          Aarna News
        </div>
      </header>

      {/* Mobile View */}
      <header className="relative block md:hidden">
        <img src={NewsInsightsMobImg} className="w-full" alt="Aarna News " />
        <div className="absolute inset-x-0 top-2/4 text-white text-3xl font-bold text-center">
          Aarna News
        </div>
      </header>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 md:px-0 py-5">
        {/* Mobile Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md w-full text-left"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {["Insights", "Aarna News", "Publications", "Podcast"].map(
                (tab) => (
                  <span
                    key={tab}
                    onClick={() =>
                      handleTabClick(`/${tab.toLowerCase().replace(" ", "")}`)
                    }
                    className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100"
                  >
                    {tab}
                  </span>
                )
              )}
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
        <div className="container mx-auto px-4 md:px-0">
          <div className="hidden md:flex justify-center space-x-16 mb-8">
            <span
              onClick={() => handleTabClick("/insights")}
              className="text-gray-600 cursor-pointer hover:text-custom-red hover:underline transition"
            >
              Insights
            </span>
            <span
              onClick={() => handleTabClick("/aarna-news")}
              className="text-custom-red  cursor-pointer hover:text-custom-red hover:underline transition"
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

      {/* Main Content Section */}
      <div className="px-2 md:px-[17%] mb-4">
      {/* Mobile View: Insights and Search */}
      <div className="md:hidden">
  <div className="flex items-center gap-4 mt-4">
    <h1 className="text-xl font-semibold">Aarna News</h1>
    <div className="flex items-center gap-2">
      <label htmlFor="keyword" className="hidden">
        Search by Keyword
      </label>
      <input
        type="text"
        id="keyword"
        placeholder="Search by Keyword"
        value={searchQuery}
        onChange={handleSearch}
        className="px-2 py-1 border-t-0 border-r-0 border-l-0 border-b-2 border-blue-950 text-lg focus:outline-none focus:border-red-500"
      />
      <IoSearch className="text-custom-red" />
    </div>
  </div>
</div>

        {/* Desktop View: Insights */}
        <div className="hidden md:flex justify-between items-left">
          <h1 className="text-2xl font-semibold">Aarna News</h1>
          <div className="flex items-right gap-2">
            <label htmlFor="keyword" className="hidden">
              Search by Keyword
            </label>
            <input
              type="text"
              id="keyword"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by Keyword"
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
        // Grid Section
        <div className="md:px-2 mx-auto max-w-screen-xl grid md:grid-cols-2 gap-2">
          {filteredNews.length > 0 ? (
            filteredNews.slice(0, visibleCards).map((item, index) => (
              <div key={index} className="p-2">
                <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
                  <img
                    src={item.imageUrl}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    alt={item.title}
                  />
                  <div className="p-4">
                    <h5
                      className="text-lg font-semibold mb-2 text-custom-blue line-clamp-2"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        lineHeight: "1.5rem",
                      }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p
                      className="text-gray-700 text-sm mb-4 line-clamp-2"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        lineHeight: "1.5rem",
                      }}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <p className="text-sm text-gray-500 mb-4">
                      {item.formattedDate}
                    </p>
                    <a
                      href={`/aarna-news/${item.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-red font-semibold hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
             

              </div>
            ))
          ) : (
            <div className="text-center col-span-2">
            <p className="text-red-500 font-semibold items-center md:pt-24 justify-center min-h-[300px]">
              No news found 
              {/* No news found for "{searchQuery}" */}
            </p>
            </div>
            
          )}
        </div>
      )}

      {/* View More Button */}
      {/* View More Button */}
{filteredNews.length > visibleCards && (
  <div className="flex justify-center my-8">
    <button
      onClick={handleViewMore} // Add this to handle the click event
      className="px-4 py-2 text-custom-red transition hover:underline"
          >
            View More
    </button>
  </div>
)}

    </div>
  );
};

export default AarnaNews;
