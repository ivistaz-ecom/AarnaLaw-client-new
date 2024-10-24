import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import ContactForm from "../../../Components/practice-area/ContactForm";

const Posts = ({ slug }) => {
  const [data, setData] = useState(null);
  const [allTitles, setAllTitles] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false); // State for showing/hiding the contact form

  // Reference for the h1 title
  const titleRef = useRef(null);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.aarnalaw.com/wp-json/wp/v2/practice-areas?_embed&slug=${slug}`
        );
        const data = await response.json();
        setData(Array.isArray(data) ? data : [data]);

        const allPostsResponse = await fetch(
          `https://docs.aarnalaw.com/wp-json/wp/v2/practice-areas`
        );
        const allPosts = await allPostsResponse.json();
        setAllTitles(allPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [slug]);

  const sortedTitles = allTitles.sort((a, b) =>
    a.title?.rendered.localeCompare(b.title?.rendered)
  );

  // Scroll to the h1 title
  const scrollToTitle = () => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <style>
        {`
          .active-title {
            color: #E2041C;
          }
          .card-text ul {
            list-style-type: disc;
            list-style-position: inside;
          }
          .card-text li {
            padding: 5px;
            color: black;
          }
          .card-text ul li::marker {
            color: #E2041C;
          }
          .card-text ul li ul {
            list-style-type: decimal;
            padding-left: 20px;
          }
          .card-text ul li ul li::marker {
            color: black;
          }

          @media (min-width: 768px) {
          .card-text {
            text-align: justify;
          }
        }
        `}
      </style>

      <div>
        <div>
          {data ? (
            data.map((post) => (
              <div className="flex flex-col pb-10" key={post.id}>
                {/* Banner Image - Visible only on desktop */}
                <img
                  src={post.acf?.banner_image?.url || "/default-image.jpg"}
                  alt={post.title?.rendered || "No Title"}
                  className="w-full img-fluid rounded-5 mb-5 h-[600px] hidden md:block"
                />
                {/* Mobile Banner Image - Visible only on mobile */}
                <img
                  src={post.acf?.mobile_banner?.url || "/default-image.jpg"}
                  alt={post.title?.rendered || "No Title"}
                  className="w-full img-fluid rounded-5 mb-5 md:hidden"
                />
                {/* Content and Partner Image Layout */}
                <div className="flex flex-col md:flex-row container mx-auto px-4 md:text-justify justify-between md:w-[1000px]">
                  {/* Left Column: Content */}
                  <div className="w-full border-b-4 border-red-500 pb-10 pt-5 md:mr-10">
                    {/* Title inside the left column */}
                    <h1
                      ref={titleRef} // Reference the h1 element
                      className="text-3xl font-bold text-custom-blue ps-4"
                      
                      dangerouslySetInnerHTML={{
                        __html: post.title?.rendered || "Untitled",
                      }}
                    />
                    {/* Description */}
                    <div
                      className="card-text para-text text-black pt-5 pb-0 ps-4"
                      style={{ textAlign: "left" }}
                      dangerouslySetInnerHTML={{
                        __html: post.acf?.description
                          ? post.acf.description
                              .replace(
                                /<h2>/g,
                                '<h2 style="font-size: 24px; color: black; padding-top: 20px; padding-bottom: 0; font-family: Montserrat-Regular, sans-serif !important; ">'
                              )
                              .replace(
                                /<h5>/g,
                                '<h5 style="padding: 5px; color: #999999; padding-top: 20px;">'
                              )
                              .replace(
                                /<p>/g,
                                '<p style="padding: 5px; margin: 0;">' // Light gray color for paragraph text
                              )
                              .replace(
                                /<li>/g,
                                '<li style="padding: 5px; color: black;  list-style-position: outside;">'
                              )
                          : "No content available",
                      }}
                    />
                  </div>
                  {/* Right Column: Partner Image */}
                  <div className="w-full md:w-1/3 md:pl-10 mt-5 md:mt-0">
                    {[
                      {
                        src: post.acf?.partner_image?.url,
                        alt: "Partner Image",
                        name: post.acf?.partner_name,
                        designation: post.acf?.partner_designation,
                      },
                      {
                        src: post.acf?.partner_image_2?.url,
                        alt: "Partner Image",
                        name: post.acf?.partner_name_2,
                        designation: post.acf?.partner_designation_2,
                      },
                    ]
                      .filter((item) => item.src)
                      .map((item, index) => (
                        <div key={index} className="mb-10 text-start">
                          {/* Image Container with Background */}
                          <div className="bg-[#0E1333] inline-block">
                            <img
                              src={item.src || "/default-image.jpg"}
                              alt={item.alt}
                              className="w-40 h-40 object-cover"
                            />
                          </div>
                          {/* Partner Name */}
                          <h2 className="text-xl font-bold text-red-600 mt-4">
                            {item.name}
                          </h2>
                          {/* Partner Designation */}
                          <p className="text-md text-gray-700">
                            {item.designation}
                          </p>
                        </div>
                      ))}
                    {/* Contact Button */}
                    <button
                      onClick={handleContactClick} // Corrected click handler
                      className="border-2 border-red-600 text-black py-2 px-4 hover:bg-red-600 hover:text-white"
                    >
                      CONTACT PARTNER
                    </button>

                    {/* Display Contact Form based on the state */}
                    {showContactForm && (
                      <ContactForm handleClose={handleCloseContactForm} />
                    )}

                    {/* Sidebar: Practice Areas Titles */}
                    <div className="mt-14 text-left">
                      <h2 className="text-xl font-bold mb-4">Practice Areas</h2>
                      <ul className="list-none">
                        {sortedTitles.map((post) => (
                          <li key={post.id} className="mb-3">
                            <Link
                              to={`/practice-area/${post.slug}`}
                              className={`link-title ${
                                slug === post.slug ? "active-title" : ""
                              }`}
                              onClick={scrollToTitle} // Scroll to the h1 title on click
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: post.title?.rendered,
                                }}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
