import React, { useState, useEffect, useRef } from "react";

const Search = ({ handleSearchClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]); // State to store posts fetched from API
  const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered results
  const [showResults, setShowResults] = useState(false); // State to control search results visibility
  const searchBoxRef = useRef(null);
  const resultsBoxRef = useRef(null);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://docs.aarnalaw.com/wp-json/wp/v2/posts?_embed"
        );
        const data = await response.json();
        setPosts(data); // Store posts data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search input
  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.rendered.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredPosts(results); // Update filtered posts
    setShowResults(inputValue.length > 0); // Show results only when there is input
  }, [inputValue, posts]);

  // Close the results when clicking outside the search box or results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target) &&
        resultsBoxRef.current &&
        !resultsBoxRef.current.contains(event.target)
      ) {
        setShowResults(false); // Close the search results
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <ul>
        <li className="relative lg:order-1 lg:ps-4">
          <div
            ref={searchBoxRef}
            className="search-box z-40 text-end flex-col justify-center items-center"
          >
            <div className="relative">
              <button className="btn-search">
                <i className="text-custom-blue bi bi-search"></i>
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update search input
              />
            </div>
          </div>
        </li>
      </ul>

      {/* Display search results outside the container */}
      {showResults && (
        <ul
          ref={resultsBoxRef}
          className="search-results absolute z-50 w-[300px] bg-white border border-gray-200 mt-2 rounded-md shadow-lg"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <li key={post.id} className="p-2 hover:bg-gray-100 flex items-center">
                {/* Check if the post has a featured image */}
                {post._embedded && post._embedded['wp:featuredmedia'] && (
                  <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    className="w-12 h-12 mr-2 rounded"
                  />
                )}
                <a
                  href={`/insights/${post.slug}`}
                  rel="noopener noreferrer"
                  className="block text-black"
                >
                  {post.title.rendered}
                </a>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
