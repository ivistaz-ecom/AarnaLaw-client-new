import React, { useState, useEffect, useRef, useMemo } from "react";

const Search = ({ handleSearchClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]); // State to store posts fetched from API
  const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered results
  const [showResults, setShowResults] = useState(false); // State to control search results visibility
  const [loading, setLoading] = useState(false); // State to show loading indicator
  const searchBoxRef = useRef(null);
  const resultsBoxRef = useRef(null);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(
          "https://docs.aarnalaw.com/wp-json/wp/v2/posts?_embed&per_page=100"
        );
        const data = await response.json();
        setPosts(data); // Store posts data
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchPosts();
  }, []);

  // Optimize filtering using useMemo
  const filteredResults = useMemo(() => {
    return posts.filter((post) =>
      post.title.rendered.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, posts]);

  // Update filtered posts when input changes
  useEffect(() => {
    setFilteredPosts(filteredResults); // Update filtered posts
    setShowResults(inputValue.length > 0); // Show results only when there is input
  }, [filteredResults, inputValue]);

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
          className="search-results absolute z-50 w-[300px] bg-white border border-gray-200 mt-2 rounded-md shadow-lg overflow-y-auto no-scrollbar max-h-80 py-5"
        >
          {loading ? (
            // Show loading indicator while data is being fetched
            <li className="p-2 text-gray-500">Loading...</li>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <li key={post.id} className="p-2 flex items-center group hover:bg-custom-red hover:text-white">
                <a
                  href={`/insights/${post.slug}`}
                  rel="noopener noreferrer"
                  className="block text-black group-hover:text-white text-start"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }} // Safely render title
                ></a>
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
