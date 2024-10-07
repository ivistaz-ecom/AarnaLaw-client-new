import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PracticeAreaImg from "../../../images/PracticeAreas.png";

const PracticeAreaComponent = () => {
  const [data, setData] = useState([]); // Initialize data state with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.aarnalaw.com/wp-json/wp/v2/practice-areas?_embed&per_page=100`
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
    <div className="">
      <div className="relative">
        <img src={PracticeAreaImg} className="w-full" alt="About Us Area" />
        <div className="absolute inset-x-0 top-2/4 text-white text-5xl font-bold text-center">
          <p>Practice Area</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white-900 via-blue-800 to-blue-900 p-8">
        <ul className="text-center py-5">
          <p className="font-bold text-gray-500">PRACTICE AREAS</p>
          <br />
          <p className="text-3xl w-1/2 mx-auto">
            Our dynamic team provides experienced counsel on a diverse range of practice areas.
          </p>
        </ul>
        <br />

        {/* Loading spinner centered and separate from the grid */}
        {data.length === 0 ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid border-opacity-70"></div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.map((post) => (
              <div
                key={post.id}
                className="relative flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Link to={`/practice-area/${post.slug}`} className="block w-full">
                  <div className="h-48 w-full overflow-hidden group">
                    {/* Add hover zoom effect with scale and transition */}
                    <img
                      src={post.acf.banner_image.url}
                      alt={post.title.rendered}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105"
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeAreaComponent;