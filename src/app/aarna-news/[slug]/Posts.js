import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Hook to access the URL parameter

const Posts = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null); // Store post data
  const [loading, setLoading] = useState(true); // Loading state
  const [media, setMedia] = useState(null); // Store media data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.aarnalaw.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
        );
        const fetchedData = await response.json();
        if (fetchedData.length > 0) {
          setPost(fetchedData[0]); // Set the first post
          const featuredMediaId = fetchedData[0].featured_media;

          // Fetch the featured media details if it exists
          if (featuredMediaId) {
            const mediaResponse = await fetch(
              `https://docs.aarnalaw.com/wp-json/wp/v2/media/${featuredMediaId}`
            );
            const mediaData = await mediaResponse.json();
            setMedia(mediaData); // Set the media data
          }
        } else {
          setPost(null); // No post found
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchData();
  }, [slug]); // Include slug in the dependency array

  if (loading) {
    return <p>Loading...</p>; // Show a loading message while the data is being fetched
  }

  if (!post) {
    return <p>Post not found.</p>; // Show a message if no post is found
  }

  // Design layout with post data
  return (
    <div className="container mx-auto p-8 mt-52">
    {/* Title */}
    <div className="mb-8">
      <h1 className="text-3xl md:w-2/4 w-full mb-4 leading-relaxed">
        {post.title.rendered}
      </h1>
      <p className="text-gray-500 uppercase">
        PUBLISHED:{" "}
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  
    {/* Check if media is available */}
    {media && (
      <div className="mb-8">
        <img
          src={media.source_url} // Use media.source_url for the featured image
          className="w-full h-full object-cover rounded-md"
          alt={post.title.rendered}
        />
      </div>
    )}
  
    {/* Grid for Post Content on Left and Recent Insights on Right */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
      {/* Left Column: Post Content */}
      <div className="lg:col-span-2">
        {post.acf?.content_all_post ? (
          <p
            className="text-black leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.acf.content_all_post }}
          />
        ) : (
          <p>No content available</p>
        )}
      </div>
  
      {/* Right Column: Recent Insights */}
      <div className="lg:col-span-1">
        <h2 className="text-xl font-bold mb-4">Recent Insights</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Google loses landmark antitrust case over search monopoly
            </a>
            <p className="text-gray-500 text-sm">Tags: business law, google antitrust, monopoly</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              WIPO Unveils New Treaty on Genetic Resources
            </a>
            <p className="text-gray-500 text-sm">Tags: intellectual property, genetic resources</p>
          </li>
          {/* Add more insights as needed */}
        </ul>
      </div>
    </div>
  </div>
  
  );
};

export default Posts;
