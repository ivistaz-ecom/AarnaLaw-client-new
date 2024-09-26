import React, { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce"; // Use lodash for debouncing

const Search = ({ handleSearchClick, handleOptionClick }) => {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Local state for search input
  const [loading, setLoading] = useState(false); // State for loading status
  const searchBoxRef = useRef(null); // To track the search box

  useEffect(() => {
    if (inputValue.trim() !== "") {
      fetchSearchResults(inputValue);
    } else {
      setData([]);
      setShowSearchResults(false);
    }
  }, [inputValue]); // Triggers every time input changes

  // Debounced function to handle the search input
  const fetchSearchResults = debounce(async (search) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(
        `https://www.aarnalaw.com/wp-json/wp/v2/posts?_embed&search=${search}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const results = await response.json();

      // No client-side filtering, show all returned results
      setData(results);
      setShowSearchResults(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false); // Stop loading after fetch completes
    }
  }, 500); // Add debounce delay to avoid excessive API calls

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input immediately
  };

  const handleKeyDownEvent = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents default form submission behavior
      window.location.href = `/search-result?q=${encodeURIComponent(
        inputValue
      )}`;
    }
  };

  // Close search results when clicking outside the search box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setShowSearchResults(false); // Close the results if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul>
      <li className="relative lg:order-1 lg:ps-4">
        <div
          ref={searchBoxRef} // Reference to the search box
          className="search-box z-40 text-end flex-col justify-center items-center"
        >
          <div className="relative">
            <button className="btn-search" onClick={handleSearchClick}>
              <i className="text-custom-blue bi bi-search"></i>
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
              onChange={handleInputChange} // Local input handler
              value={inputValue} // Bind to local input state
              onKeyDown={handleKeyDownEvent}
              onFocus={() => setShowSearchResults(true)} // Show results on focus
            />
            {showSearchResults && inputValue && (
              <div className="absolute top-full mt-2 max-h-80 overflow-y-auto no-scrollbar bg-white p-2 text-start">
                {loading ? (
                  <div className="p-2 text-center text-gray-500">
                    Loading...
                  </div>
                ) : data.length > 0 ? (
                  data.map((item, index) => (
                    <div
                      key={index}
                      className="search-result-item"
                      onClick={() => handleOptionClick(item.slug)}
                    >
                      <div className="lg:flex hover:bg-blue-950 hover:text-white p-2 border-b cursor-pointer items-center">
                        {item._embedded &&
                          item._embedded["wp:featuredmedia"] && (
                            <div className="mr-2" style={{ width: "100px" }}>
                              <img
                                src={
                                  item._embedded["wp:featuredmedia"][0]
                                    .source_url
                                }
                                alt={item.title.rendered}
                                className="w-full h-auto hidden md:flex"
                                width="100"
                                height="100"
                              />
                            </div>
                          )}
                        <div className="lg:flex-1 lg:ps-3">
                          {item.title.rendered}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-center text-gray-500">
                    No results found.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Search;
