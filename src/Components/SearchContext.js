import React, { createContext, useState, useContext } from 'react';

// Create the Search Context
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext
export const useSearch = () => {
  return useContext(SearchContext);
};
