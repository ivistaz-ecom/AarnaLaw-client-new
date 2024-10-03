import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PracticeAreaComponent = () => {
  const [data, setData] = useState([]); // Initialize data state with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.aarnalaw.com/wp-json/wp/v2/practice-areas?_embed`
        );
        const result = await response.json();
        console.log(result);
        // Ensure the response is an array before setting the data
        if (Array.isArray(result)) {
          // Sort the data alphabetically by title
          const sortedData = result.sort((a, b) => {
            const titleA = a.title.rendered.toLowerCase(); // Convert to lowercase for case-insensitive comparison
            const titleB = b.title.rendered.toLowerCase();
            return titleA.localeCompare(titleB); // Compare titles
          });
          setData(sortedData);
        } else {
          console.error("Expected an array but got:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-br from-white-900 via-blue-800 to-blue-900 p-8 mt-96">
        <ul className="practice-areas-heading">
          <li>Message</li>
          <br />
          <li className="practice-areas-description">Message1</li>
          <li className="practice-areas-description">Message2</li>
        </ul>
        <br />

        {/* Responsive grid layout */}
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.length > 0 ? (
            data.map((post) => (
              <div
                key={post.id}
                className="relative flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Link
                  to={`/practice-areaa/${post.slug}`}
                  className="block w-full"
                >
                  <div className="h-48 w-full overflow-hidden group">
                    <img
                      src={post.acf.banner_image.url}
                      alt={post.title.rendered}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div
                    className={`bg-blue-900 text-white text-center py-4 text-lg font-bold h-20 flex items-center justify-center`}
                  >
                    <span
                      className="practice-area-title"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    ></span>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="">Loading...</div> // Render loading message while data is being fetched
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaComponent;
