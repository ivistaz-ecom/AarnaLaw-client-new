import React, { useState, useRef, useEffect } from "react";
import InsightSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { leftArrow, rightArrow } from "../Home/utils/Icon";
import { Link } from "react-router-dom";

function HomeBanner() {
  const [insightsData, setInsightsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const fetchInsights = async (page = 1, perPage = 10) => {
    try {
      setLoading(true); // Show loader while fetching data
      const response = await fetch(
        `https://docs.aarnalaw.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`
      );
      const data = await response.json();

      const newInsights = data.map((item) => {
        const imageUrl =
          item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
        return {
          ...item,
          imageUrl,
          title: item["yoast_head_json"]["title"],
          desc: item["yoast_head_json"]["og_description"],
          formattedDate: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          link: item.link,
          slug: item.slug, // Ensure the slug is used for links
        };
      });

      setInsightsData((prev) => [...prev, ...newInsights]); // Append new data to the existing data
    } catch (error) {
      console.error("Error fetching insights:", error);
    } finally {
      setLoading(false); // Hide loader after data is fetched
    }
  };

  useEffect(() => {
    fetchInsights(); // Fetch the first batch of posts on component mount
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
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row bg-white md:absolute md:left-0 md:right-0 items-center gap-0 md:-mt-24 md:ml-24 md:pt-10">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-2xl md:text-[80px] text-custom-red md:writing-mode-vertical-rl transform md:rotate-180 font-bold m-0 md:p-0 py-5">
          Insights
        </h1>
        <div className="gap-2 justify-end pb-5 hidden md:flex">
          <PrevArrow />
          <NextArrow />
        </div>
      </div>

      <div className="px-4 mx-auto max-w-screen-xl text-center overflow-hidden w-full md:w-auto">
        {loading && insightsData.length === 0 ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid border-opacity-70"></div>
          </div>
        ) : (
          <InsightSlider ref={sliderRef} {...settings} className="z-0 gap-4">
            {insightsData.map((item, index) => (
              <div key={index}>
                <div className="lg:p-4">
                  <div className="w-full h-[450px] my-auto lg:h-[620px] lg:w-[500px] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 lg:flex flex-col group transition-colors duration-300 relative md:hover:bg-custom-red md:hover:text-white">
                    <img
                      src={item.imageUrl}
                      className="w-full h-[200px] md:h-[280px] object-cover"
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="p-5 flex flex-col items-start flex-grow text-black md:group-hover:text-white transition-colors duration-300">
                      <h5
                        className="text-lg md:text-2xl text-custom-blue font-semibold mb-3 md:group-hover:text-white transition-colors duration-300 overflow-hidden line-clamp-2 min-h-[3rem] max-h-[4.5rem]"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      {item.desc && (
                        <p
                          className="mb-5 font-normal text-custom-gray text-sm md:text-base md:group-hover:text-white transition-colors duration-300 overflow-hidden line-clamp-3 justify-center text-center lg:mt-10"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      )}
                      <a
                        href={`/insights/${item.slug}`}
                        className="border border-custom-red text-custom-red px-2 md:px-6 py-2 md:group-hover:bg-white md:group-hover:text-black hover:bg-white hover:text-black transition-colors duration-300 absolute bottom-0 md:left-5 left-32 m-5 mx-auto block md:mx-0"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </InsightSlider>
          
        )}
        <div className="flex justify-center my-10">
        <Link
          to="/insights"
          className="border border-custom-red px-6 py-2 text-custom-red md:hover:bg-custom-red md:hover:text-white mr-20"
        >
          View all
        </Link>
      </div>

        <div className="flex gap-2 justify-center py-5 md:hidden ">
          <PrevArrow />
          <NextArrow />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
