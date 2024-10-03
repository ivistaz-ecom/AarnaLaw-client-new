"use client";
import React, { useEffect, useState } from "react";
import ConfigData from "../../config";

const Insights = ({ slug }) => {
  const [data, setData] = useState([]);
  const siteUrl = ConfigData.wpApiUrl;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [siteUrl, slug]);

  return (
    <>
    <style>
        {
            `
            p, li {
                margin-bottom:1rem;
            }
            `
        }
    </style>
    <div className="container mx-auto mt-10 leading-relaxed">
      <h2>Test application</h2>
      {data.map((post) => (
        <div className=" p-6 mb-6 overflow-x-hidden" key={post.id}>
          <h1 className="text-2xl font-semibold pb-10 pt-36">
            {post.title.rendered}
          </h1>
          <div>
            <p className="card-date mb-10 text-gray-500">
              PUBLISHED {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <img
            src={post._embedded["wp:featuredmedia"][0]["source_url"]}
            alt={post.title.rendered}
            className="w-full"
          />
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className="text-black lg:w-3/4 w-full lg:pt-24 pt-5 text-justify"
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default Insights;
