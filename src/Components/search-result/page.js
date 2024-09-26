'use client'
import React, { useState } from "react";


const Search = ({
  handleSearch,
  handleSearchClick,
  searchInput,
  handleKeyDown,
  data,
  handleOptionClick,
}) => {
  {console.log(data)}
  const [showSearchResults, setShowSearchResults] = useState(false);
  const handleKeyDownEvent = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents default form submission behavior
      handleSearch();
      window.location.href = `/search-result?q=${encodeURIComponent(
        searchInput
      )}`;
    }
  };

  return (
    <ul>
      <li className="relative lg:order-1 lg:ps-4">
        <div className="search-box z-40 text-end flex-col justify-center items-center">
          <div className="relative">
            <button className="btn-search" onClick={handleSearchClick}>
              <i className="text-custom-blue bi bi-search"></i>
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
              onChange={handleSearch}
              value={searchInput}
              onKeyDown={handleKeyDownEvent}
              onFocus={() => setShowSearchResults(true)}
            />
            {showSearchResults && searchInput && (
              <div className="absolute top-full mt-2 max-h-80 overflow-y-auto no-scrollbar bg-white p-2 text-start">
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <div
                      key={index}
                      className="search-result-item"
                      onClick={() => handleOptionClick(item.slug)}
                    >
                      <div className="lg:flex hover:bg-blue-950 hover:text-white p-2 border-b cursor-pointer items-center">
                        {item._embedded && item._embedded["wp:featuredmedia"] && (
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
