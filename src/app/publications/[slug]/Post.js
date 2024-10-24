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
        console.log("Publication data",data);

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
    /* Styling for top-level <li> with red bullet points */
.card-text ul {
  list-style-type: disc; /* Bullet points */
  list-style-position: inside;
}

.card-text li {
  padding: 5px;
  color: black; /* Black text for all list items */
}

/* Red bullet points for top-level <li> */
.card-text ul li::marker {
  color: #E2041C; /* Red bullet points */
}

/* Target nested lists for numbered items */
.card-text ul li ul {
  list-style-type: decimal; /* Switch to numbers for nested lists */
  padding-left: 20px;
}

/* Nested <li> inside another <li> will show as numbered */
.card-text ul li ul li::marker {
  color: black; /* Black marker for numbered nested lists */
}


        `}
      </style>

      <div className="">
        <div className="">
          {data ? (
            data.map((post) => (
              <div className="flex flex-col pt-64 pb-10" key={post.id}>
                
                <div className="flex flex-col md:flex-row container mx-auto px-4 text-justify justify-center">
                  {/* Left Column: Content */}
                  <div className="w-full md:w-2/3 pb-10 md:mr-10">
                    {/* Title inside the left column */}
                    <h1
                      className="text-3xl font-bold text-black mb-5 text-center"
                      dangerouslySetInnerHTML={{
                        __html: post.title?.rendered || "Untitled",
                      }}
                    />

                    {/* Description */}
                    <div
                      className="card-text para-text text-black pt-5 pb-0"
                      dangerouslySetInnerHTML={{
                        __html: post?.content.rendered
                          ? post.content.rendered
                              // Style for <h2> elements
                              .replace(
                                /<h2>/g,
                                '<h2 style="font-weight: bold; font-size: 30px !important; color: black; padding-top: 20px; padding-bottom: 0; text-align: center !important;">'
                              )
                              
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
      </div>
    </>
  );
};

export default Posts;
