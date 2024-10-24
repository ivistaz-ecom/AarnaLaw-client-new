import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import ContactForm from "../../../Components/practice-area/ContactForm";

const Posts = ({ slug }) => {
  const [data, setData] = useState(null);
  const [allIndustries, setAllIndustries] = useState([]); // State for all industry titles
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const titleRef = useRef(null);

  // Fetch specific post data based on slug
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.aarnalaw.com/wp-json/wp/v2/industries?_embed&slug=${slug}`
        );
        const data = await response.json();
        console.log(data);

        // Ensure that data is an array
        if (Array.isArray(data)) {
          setData(data);
        } else {
          setData([data]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [slug]);

  // Fetch all industry titles for the sidebar
  useEffect(() => {
    const fetchAllIndustries = async () => {
      let allIndustries = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        try {
          const response = await fetch(
            `https://docs.aarnalaw.com/wp-json/wp/v2/industries?per_page=100&page=${page}` // Adjust the number as needed
          );
          const industries = await response.json();

          if (industries.length > 0) {
            allIndustries = [...allIndustries, ...industries];
            page++;
          } else {
            hasMore = false; // No more industries to fetch
          }
        } catch (error) {
          console.error("Error fetching all industries:", error);
          hasMore = false; // Stop fetching on error
        }
      }

      // Sort industries alphabetically by title
      const sortedIndustries = allIndustries.sort((a, b) =>
        a.title.rendered.localeCompare(b.title.rendered)
      );

      setAllIndustries(sortedIndustries); // Store all industry titles
    };
    fetchAllIndustries();
  }, []);


  const scrollToTitle = () => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <>
      <style>
        {`
           
        .card-text ul {
          list-style-type: disc;
          list-style-position: outside;
        }

        .card-text li {
          padding: 5px;
          color: black;
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

        /* Style for the active sidebar item */
        .active-sidebar-item {
          color: #E2041C; /* Highlighted color for active item */
        }
        `}
      </style>

      <div className="text-start">
        {/* Banner Image - Full Width */}
        {data && data.length > 0 && (
          <img
            src={data[0].acf?.banner_image?.url || "/default-image.jpg"}
            alt={data[0].title?.rendered || "No Title"}
            className="w-full h-[500px] object-cover mb-10"
          />
        )}

        {/* Two-Column Layout Below the Banner */}
        <div className="flex flex-col md:flex-row container mx-auto px-4 md:gap-10 justify-between md:w-[1000px]">
          {/* Main Content Section */}
          <div className="flex-2 pr-0">
            {data ? (
              data.map((post) => (
                <div className="flex flex-col md:pb-10 items-center" key={post.id}>
                  {/* Content Centered */}
                  <div className="w-full md:pb-10 text-start">
                    {/* Main Title */}
                    <h1
                    ref={titleRef}
                      className="text-3xl font-bold text-custom-blue mb-5 px-4"
                      dangerouslySetInnerHTML={{
                        __html: post.title?.rendered || "Untitled",
                      }}
                    />

                    {/* Description */}
                    <div
                      className="card-text para-text text-black pt-5 pb-0 px-4"
                      dangerouslySetInnerHTML={{
                        __html: post.acf?.description
                          ? post.acf.description
                              // Style for <h2> elements
                              .replace(
                                /<h2>/g,
                                '<h2 style="font-weight: bold; font-size: 24px; color: black; padding-top: 20px; padding-bottom: 0;">'
                              )
                              // Style for paragraphs
                              .replace(
                                /<p>/g,
                                '<p style="padding: 10px; margin: 0;">'
                              )
                              // Style for top-level <li> elements
                              .replace(
                                /<li>/g,
                                '<li style="padding: 10px; color: black;">'
                              )
                          : "No content available",
                      }}
                    />
                    {/* Contact Button */}
                    <button
                      onClick={handleContactClick}
                      className="border-2 border-red-600 text-black py-2 px-4 hover:bg-red-600 hover:text-white m-5 text-left mt-10"
                    >
                      CONTACT OUR EXPERTS
                    </button>

                    {/* Display Contact Form based on the state */}
                    {showContactForm && (
                      <ContactForm handleClose={handleCloseContactForm} />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-black">Loading...</div>
            )}
          </div>

          {/* Sidebar Section */}
<div className="w-full mt-10 md:mt-0 text-start">
  <h2 className="text-xl font-bold mb-4">Industries</h2>
  <ul className="list-none">
    {allIndustries.length > 0 ? (
      allIndustries.map((industry) => (
        <li
          key={industry.id}
          className={`text-black mb-2 pt-1 list-none ${
            industry.slug === slug ? "active-sidebar-item" : ""
          }`}
        >
          {/* Use Link to navigate to the selected industry's page */}
          <Link
            to={`/industries/${industry.slug}`}
            className={`${
              industry.slug === slug ? "text-custom-red" : ""
            }`}
            dangerouslySetInnerHTML={{
              __html: industry.title?.rendered || "No Title",
            }}
            onClick={scrollToTitle} // Call the scrollToTitle function on click
          ></Link>
        </li>
      ))
    ) : (
      <li className="text-black">No industries available</li>
    )}
  </ul>
</div>

        </div>
      </div>
    </>
  );
};

export default Posts;
