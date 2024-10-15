import React, { useEffect, useState } from "react";

const Posts = ({ slug }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.aarnalaw.com/wp-json/wp/v2/practice-areas?_embed&slug=${slug}`
        );
        const data = await response.json();
        console.log(data);

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
              <div className="flex flex-col pb-10" key={post.id}>
  {/* Banner Image */}
  <img
    src={post.acf?.banner_image?.url || "/default-image.jpg"}
    alt={post.title?.rendered || "No Title"}
    className="w-full img-fluid rounded-5 mb-5 h-[500px]"
  />

  {/* Content and Partner Image Layout */}
  <div className="flex flex-col md:flex-row container mx-auto px-4 text-justify justify-between">
    {/* Left Column: Content */}
    <div className="w-full md:w-2/3 border-b-4 border-red-500 pb-10 md:mr-10">
      {/* Title inside the left column */}
      <h1
        className="text-3xl font-bold text-black mb-5"
        dangerouslySetInnerHTML={{
          __html: post.title?.rendered || "Untitled",
        }}
      />

      {/* Description */}
      <div
        className="card-text para-text text-black pt-5 pb-0"
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
                  '<p style="padding: 5px; margin: 0;">'
                )
                // Style for top-level <li> elements
                .replace(
                  /<li>/g,
                  '<li style="padding: 5px; color: black;">'
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
          name: "Shreyas Jayasimha",
          designation:
            "COUNSEL | ADVOCATE | MEDIATOR | ARBITRATOR",
        },
        {
          src: post.acf?.partner_image_2?.url,
          alt: "Partner Image 2",
          name: "Manjushree Somasundara",
          designation:
            "PARTNER - BANKING LAW AND PRACTICE, RISK MANAGEMENT",
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
      <button className="border-2 border-red-600 text-black py-2 px-4 rounded-lg hover:bg-red-600 hover:text-white mt-5">
        CONTACT PARTNER
      </button>
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
