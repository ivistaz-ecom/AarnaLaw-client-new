import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import InsightSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsInsightsImg from "../../images/NewsInsights.jpeg";
import AarnaNewscard from "./AarnaNewscard";
import { IoSearch } from "react-icons/io5";
import { leftArrow, rightArrow } from "../Home/utils/Icon";

const AarnaNews = () => {
  const navigate = useNavigate();
  const [aarnaNews, setAarnaNews] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleTabClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  const fetchAarnaNews = async () => {
    try {
      const response = await fetch("https://www.aarnalaw.com/wp-json/wp/v2/posts?_embed&cat=13");
      const data = await response.json();

      const fetchMedia = async (mediaId) => {
        const mediaResponse = await fetch(`https://www.aarnalaw.com/wp-json/wp/v2/media/${mediaId}`);
        const mediaData = await mediaResponse.json();
        return mediaData.source_url;
      };

      const aarnaNewsData = await Promise.all(
        data.map(async (item) => {
          const imageUrl = await fetchMedia(item.featured_media);
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
        })
      );

      setAarnaNews(aarnaNewsData);
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };

  useEffect(() => {
    fetchAarnaNews();
  }, []);

  const NextArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickNext()}
    >
      {rightArrow}
    </div>
  );

  const PrevArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickPrev()}
    >
      {leftArrow}
    </div>
  );

  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
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
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md w-full text-left"
          >
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {["Insights", "Aarna News", "Publications", "Podcast"].map((tab) => (
                <span
                  key={tab}
                  onClick={() => handleTabClick(`/${tab.toLowerCase().replace(" ", "")}`)}
                  className="block px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-100"
                >
                  {tab}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center space-x-16 mb-8">
          {["Insights", "Aarna News", "Publications", "Podcast"].map((tab) => (
            <span
              key={tab}
              onClick={() => handleTabClick(`/${tab.toLowerCase().replace(" ", "")}`)}
              className="text-gray-600 cursor-pointer hover:text-blue-500 transition"
            >
              {tab} 
            </span>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-[17%] mb-4">
        {/* Mobile View: Insights and Search */}
        <div className="md:hidden">
          <h1 className="text-2xl font-semibold mt-4">Aarna News</h1>
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

      {/* Slider Section */}
      <div className="px-4 mx-auto max-w-screen-xl text-center overflow-hidden w-full md:w-auto">
        <InsightSlider ref={sliderRef} {...settings} className="z-0 gap-4">
          {aarnaNews.length > 0 ? (
            aarnaNews.map((item, index) => (
              <div key={index}>
                <div className="lg:p-4">
                  <div className="w-full h-[540px] my-auto lg:h-[620px] lg:w-[500px] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-red-700 lg:flex flex-col group transition-colors duration-300 relative">
                    <img
                      src={item.imageUrl}
                      className="w-full h-[200px] md:h-[280px] object-cover"
                      alt=""
                    />
                    <div className="p-5 flex flex-col items-start flex-grow text-black group-hover:text-white transition-colors duration-300">
                      <h5
                        className="text-lg md:text-2xl text-custom-blue font-semibold mb-3 group-hover:text-white transition-colors duration-300 overflow-hidden line-clamp-2 min-h-[3rem] max-h-[4.5rem]"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      {item.content && (
                        <p
                          className="mb-5 font-normal text-custom-gray text-sm md:text-base group-hover:text-white transition-colors duration-300 overflow-hidden line-clamp-3 justify-center text-center lg:mt-10"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      )}
                      <a
                        href={`/insights/${item.slug}`}
                        className="border border-custom-red text-custom-red px-2 md:px-6 py-2 group-hover:bg-white group-hover:text-custom-red transition-colors duration-300 absolute bottom-0 left-0 m-5"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </InsightSlider>
      </div>

      {/* View All Section */}
      <div className="flex justify-center my-8">
        <button
          onClick={() => fetchAarnaNews()}
          className="text-custom-blue text-lg font-semibold hover:text-custom-red transition"
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default AarnaNews;
