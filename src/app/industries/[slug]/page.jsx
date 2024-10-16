import React from 'react';
import { useParams } from 'react-router-dom';
import Posts from './Post';  // Ensure correct import

const Page = () => {
  const { slug } = useParams();  // Get slug from URL params

  if (!slug) {
    return <div>Invalid parameters. Slug not found.</div>;
  }

  return (
    <div>
      <Posts slug={slug} />  {/* Pass slug to Posts component */}
    </div>
  );
};

export default Page;
