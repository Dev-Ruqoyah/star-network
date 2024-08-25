import React, { createContext, useContext } from 'react';

const CelebritiesContext = createContext();

export const CelebritiesProvider = ({ children, celebrities }) => {
  return (
    <CelebritiesContext.Provider value={celebrities}>
      {children}
    </CelebritiesContext.Provider>
  );
};

export const useCelebrities = () => {
  return useContext(CelebritiesContext);
};
