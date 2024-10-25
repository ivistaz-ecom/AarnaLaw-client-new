import React, { useState, useEffect } from 'react';

const Page = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching the Privacy Policy page with ID 3
        const response = await fetch(`https://docs.aarnalaw.com/wp-json/wp/v2/pages/1505?_embed`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPrivacyPolicy(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };





    

    fetchData();
  }, []);

  return (
    <>
      <style>
        {`
          .policyclass h1 {
            font-size: 40px;
            text-align: center !important;
            color: #151C4A;
            font-weight: 600;
            padding: 10px;
          }
          .policyclass a {
            color: #2580db;
          }
          .policyclass p {
            padding-top: 10px;
          }
          /* Styling for unordered lists (ul) */
          .policyclass ul {
            padding-left: 20px;
            list-style-type: disc; /* Adds dots to ul */
            margin-top: 10px;
          }
          /* Styling for ordered lists (ol) */
          .policyclass ol {
            padding-left: 20px;
            list-style-type: decimal; /* Adds numbers to ol */
            margin-top: 10px;
          }
          /* Common styling for list items */
          .policyclass li {
            margin-bottom: 8px; /* Space between list items */
          }
        `}
      </style>

      <div>
        {privacyPolicy ? (
          <div className='policyclass container mx-auto mt-52 w-[1000px] mb-10'>
            <div dangerouslySetInnerHTML={{ __html: privacyPolicy.content.rendered }} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Page;
