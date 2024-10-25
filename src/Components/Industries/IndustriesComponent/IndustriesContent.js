import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import IndustiesImg from "../../../images/Indutries-Banner.jpg";
import IndustiesmobImg from "../../../images/IndustriesMobileBanner.jpg";


const IndustriesContent = () => {
    const [data, setData] = useState([]); // Initialize data state with an empty array

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://docs.aarnalaw.com/wp-json/wp/v2/industries?_embed&per_page=100`
          );
          const result = await response.json();
  
          console.log("Industries data", result);
          
  
  
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

        {/* Desktop */}
        <div className="relative hidden md:block">
          <img src={IndustiesImg} className="w-full h-[500px]" alt="About Us Area" />
          <div className="absolute inset-x-0 top-2/4 text-white text-5xl font-bold text-center">
            <p>Industries</p>
          </div>
        </div>

        {/* Mobile */}
        <div className="relative block md:hidden">
          <img src={IndustiesmobImg} className="w-full h[500px]" alt="About Us Area" />
          <div className="absolute inset-x-0 top-2/4 text-white text-3xl font-bold text-center">
            <p>Industries </p>
          </div>
        </div>
  
        <div className="bg-gradient-to-br from-white-900 via-blue-800 to-blue-900 md:p-8 p-4">
          <ul className="text-center py-5">
            <p className="font-bold text-gray-500">INDUSTRIES WE SERVE </p>
            <br />
            <p className="text-3xl md:w-1/2 mx-auto">       
            Our progressive practice provides expert assistance to clients across industry
            </p>
          </ul>
          <br />
  
          {/* Loading spinner centered and separate from the grid */}
          {data.length === 0 ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-700 border-solid border-opacity-70"></div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-10">
              {data.map((post) => (
                <div
                  key={post.id}
                  className="relative flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <Link to={`/industries/${post.slug}`} className="block w-full">
                    <div className="h-48 w-full overflow-hidden group">
                    {/* Use the featured image instead of the banner image */}
                    {post._embedded &&
                      post._embedded["wp:featuredmedia"] &&
                      post._embedded["wp:featuredmedia"][0] && (
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url} // Update to use the featured image
                          alt={post.title.rendered}
                          className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                        />
                      )}
                  </div>
                    <div
                      className={`bg-blue-900 text-white text-center py-4 text-lg font-bold h-20 flex items-center justify-center`}
                    >
                      <span
                        className="industries-title"
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
  

export default IndustriesContent