import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsInsightsImg from "../../images/NewsInsights.jpeg";
import PublicationsCard from "./PublicationsCard";
import { IoSearch } from "react-icons/io5";

const Publications1 = () => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10; // Number of publications to fetch each time

  const handleTabClick = (path) => {
    navigate(path);
  };

  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 30) {
      return words.slice(0, 30).join(" ") + "...";
    }
    return content;
  };

  const fetchPublications = async (newOffset) => {
    try {
      const response = await fetch(
        `https://www.aarnalaw.com/wp-json/wp/v2/publications?_embed`
      );
      const data = await response.json();

      const publicationData = data.map((item) => {
        const embedded = item["_embedded"] || {};
        const media = embedded["wp:featuredmedia"] || [];
        const imageUrl = media[0] ? media[0]["source_url"] : "";

        return {
          ...item,
          title: item["yoast_head_json"]["title"],
          content: truncateContent(item["yoast_head_json"]["og_description"] || ""), // Truncate content
          imageUrl,
          formattedDate: new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });

      setPublications((prevPublications) => [...prevPublications, ...publicationData]);
      setOffset(newOffset + limit);
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };

  useEffect(() => {
    fetchPublications(0); // Fetch initial publications
  }, []);

  const handleViewAllClick = () => {
    fetchPublications(offset);
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
        <h1 className="text-2xl font-semibold">Publications</h1>
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

      {/* Displaying Publications in Rows */}
      <div className="md:px-4 mx-auto max-w-screen-xl flex flex-col gap-10">
        {[...Array(Math.ceil(publications.length / 2))].map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row gap-10">
            {[...Array(2)].map((_, colIndex) => {
              const index = rowIndex * 2 + colIndex;
              if (publications[index]) {
                return (
                  <PublicationsCard
                    key={publications[index].id}
                    cardDetails={publications[index]}
                  >
                    <p>{publications[index].content} </p>
                  </PublicationsCard>
                );
              } else {
                return null;
              }
            })}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Publications1;
