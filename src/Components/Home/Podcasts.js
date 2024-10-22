import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PodcastCard from "../../Components/Home/PodcastCard";
import InsightSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { leftArrow, rightArrow } from "../Home/utils/Icon";

const Podcasts = () => {
  const sliderRef = useRef(null);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch podcasts data dynamically
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch(
          "https://www.aarnalaw.com/wp-json/wp/v2/podcast"
        );
        const data = await response.json();

        // Set fetched podcasts
        setPodcasts(
          data.map((podcast) => ({
            ...podcast,
            formattedDate: formatDate(podcast.date),
            imageUrl: podcast.episode_player_image,
          }))
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  // Custom Next Arrow Component
  const NextArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickNext()}
    >
      {rightArrow}
    </div>
  );

  // Custom Prev Arrow Component
  const PrevArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickPrev()}
    >
      {leftArrow}
    </div>
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto relative mb-14 mt-6 md:mt-[720px] flex flex-col items-center overflow-hidden px-4"> {/* Added padding to container */}
      <h1 className="text-custom-blue text-2xl font-semibold text-center mb-8">
        Podcast
      </h1>

      {/* Spinner while loading */}
      {loading ? (
        <div className="flex justify-center items-center h-32 container ">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid border-opacity-70"></div>
        </div>
      ) : (
        <div className="w-full md:w-[1200px] gap-10 overflow-hidden "> {/* Added gap between cards */}
          <InsightSlider
            ref={sliderRef}
            {...settings}
            className="flex gap-6" // Added gap here
          >
            {podcasts.slice(0, 4).map((item) => (
              <div key={item.id} className="h-full"> {/* Ensuring proper height */}
                <PodcastCard podcastDetails={item} />
              </div>
            ))}
          </InsightSlider>
        </div>
      )}

      <div className="flex justify-center mt-10">
        <Link
          to="/podcast"
          className="border border-custom-blue px-6 py-2 text-custom-blue md:hover:bg-custom-blue md:hover:text-white"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default Podcasts;
