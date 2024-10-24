import React, { useEffect, useState } from "react";

const Posts = ({ slug }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.aarnalaw.com/wp-json/wp/v2/publications?_embed&slug=${slug}`
        );
        const data = await response.json();
        console.log("Publication data", data);

        // Ensure that data is an array
        if (Array.isArray(data)) {
          setData(data);
        } else {
          setData([data]); // Wrap the object in an array if it's not already an array
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <style>
        {`
    .wp-block-heading {
      font-size: 26px;
      text-align: center; /* Center the text */
    }

    `}
      </style>
      <div className="container mx-auto">
        {data ? (
          data.map((post) => (
            <div className="flex flex-col pt-64 pb-10" key={post.id}>
              <div className="flex flex-col md:flex-row container mx-auto px-4 text-justify justify-center">
                {/* Left Column: Content */}
                <div className="w-full md:w-11/12 pb-10 md:mr-10">
                  {/* Title inside the left column */}
                  <h1
                    className="text-4xl text-black mb-5 text-center"
                    dangerouslySetInnerHTML={{
                      __html: post.title?.rendered || "Untitled",
                    }}
                  />

                  {/* Description */}
                  <div
                    className=" text-black pt-5 pb-0"
                    dangerouslySetInnerHTML={{
                      __html: post?.content.rendered
                        ? post.content.rendered

                            // Style for paragraphs
                            .replace(
                              /<p>/g,
                              '<p style="padding: 5px; margin: 0;">'
                            )
                        : "No content available",
                    }}
                  />
                </div>

                {/* Right Column: Partner Image */}
              </div>
            </div>
          ))
        ) : (
          <div className="text-black">Loading...</div>
        )}
      </div>
    </>
  );
};

export default Posts;
