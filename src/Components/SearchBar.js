import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, placeholder }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="search-bar px-2 border bg-gray-200 flex rounded-sm items-center w-full md:w-4/5 lg:w-2/5">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={placeholder || 'Enter Keyword'}
        className="bg-transparent text-center w-full py-2 outline-none border"
      />
    </div>
  );
};

export default SearchBar;
