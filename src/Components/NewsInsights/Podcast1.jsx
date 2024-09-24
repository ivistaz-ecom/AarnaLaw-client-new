import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../images/NewsInsights.jpeg";
import { IoSearch } from "react-icons/io5";
import PodcastCard from "../NewsInsights/PodcastCard";

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const hasFetchedData = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasFetchedData.current) {
      const fetchPodcasts = async () => {
        try {
          const response = await fetch(
            "https://www.aarnalaw.com/wp-json/wp/v2/podcast"
          );
          const data = await response.json();
          const latestPodcasts = data
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 10)
            .map((podcast) => ({
              ...podcast,
              formattedDate: formatDate(podcast.date),
              imageUrl: podcast.episode_player_image,
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

  const handleTabClick = (path) => {
    navigate(path);
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
        <div className="flex justify-center space-x-16 mb-8">
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
      <div className="flex justify-between items-center px-[17%] mb-4">
        <h1 className="text-2xl font-semibold">Podcast</h1>
        <div className="flex items-center gap-2">
          <label htmlFor="keyword" className="hidden">Search by Keyword</label>
          <input
            type="text"
            id="keyword"
            placeholder="Search by Keyword"
            className="px-2 py-1 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoSearch />
        </div>
      </div>

      {/* Displaying Podcasts in Blue Background */}
      <div className="md:px-4 mx-auto max-w-screen-xl flex flex-col gap-10">
        <div className="md:px-4 mx-auto max-w-screen-xl flex flex-col gap-10"
        >
          {podcasts.map((item) => (
            <PodcastCard key={item.id} podcastDetails={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
