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
        const data = await response.json();
        console.log("Fetched aarna-news data:", data);

        // Ensure that data is an array
        if (Array.isArray(data) && data.length > 0) {
          setPost(data[0]); // Set the first post from the array
          const featuredMediaId = data[0].featured_media;

          // Fetch the featured media details if it exists
          if (featuredMediaId) {
            const mediaResponse = await fetch(
              `https://docs.aarnalaw.com/wp-json/wp/v2/media/${featuredMediaId}`
            );
            const mediaData = await mediaResponse.json();
            setMedia(mediaData);
            console.log("Fetched media data:", mediaData); // Check media data
          }
        } else {
          setPost(null); // If no post data found, set post to null
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>; // Show a loading message while the data is being fetched
  }

  if (!post) {
    return <p>Post not found.</p>; // Show a message if no post is found
  }

  // Design layout with post data
  return (
    <div className="container mx-auto md:p-8 px-4 mt-52">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-[28px] md:w-[650px] w-full mb-4 leading-relaxed">
          {post?.title.rendered || "No title available"}
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
            className="w-full h-[500px] object-cover rounded-md"
            alt={post.title.rendered}
          />
        </div>
      )}

      {/* Grid for Post Content on Left and Recent Insights on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Left Column: Post Content */}
        <div className="lg:col-span-2 pb-5 border-b-2 border-b-red-500">
  {post ? (
    <div
      className="text-black leading-relaxed"
      dangerouslySetInnerHTML={{
        __html: post.content.rendered.replace(
          /<p/g,
          '<p style="margin-top: 1.25rem;"'
        ),
      }}
    />
  ) : (
    <p>No content available</p>
  )}
</div>


        {/* Right Column: Recent Insights */}
        <div className="lg:col-span-1 md:pl-14">
            <h2 className="text-lg font-bold mb-6">More Insights</h2> {/* Increased the margin-bottom */}
            <ul className="space-y-6"> {/* Increased spacing between list items */}
              <li className="p-6 shadow-lg bg-white"> {/* Added padding */}
                <a href="#" className="text-lg font-semibold text-black">
                  Google loses landmark antitrust case over
                </a>
                <a href="#" className="text-custom-blue hover:underline block mt-4"> {/* Increased margin-top */}
                  VIEW ARTICLE
                </a>
                <p className="text-gray-500 text-sm mt-4">Tags: <a href="#" className="hover:underline text-gray-500">business law</a>, <a href="#" className="hover:underline text-gray-500">google antitrust</a></p>
              </li>
              <li className="p-6 shadow-lg bg-white"> {/* Added padding */}
                <a href="#" className="text-lg font-semibold text-black">
                  WIPO Unveils New Treaty on Genetic Resources
                </a>
                <a href="#" className="text-custom-blue hover:underline block mt-4"> {/* Increased margin-top */}
                  VIEW ARTICLE
                </a>
                <p className="text-gray-500 text-sm mt-4">Tags: <a href="#" className="hover:underline text-gray-500">intellectual property</a>, <a href="#" className="hover:underline text-gray-500">genetic resources</a></p>
              </li>
              {/* Add more insights as needed */}
            </ul>
            <div className="text-left mt-8"> {/* Increased margin-top */}
              <button className="px-6 py-2 border-2 border-red-500 text-black font-semibold hover:bg-red-500 hover:text-white transition">
                VIEW ALL
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Posts;
