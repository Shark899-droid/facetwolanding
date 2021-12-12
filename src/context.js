import React, { useState, useEffect, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const signInTitle = 'Sign In';
  const signUpTitle = 'Join Us';
  return (
    <AppContext.Provider
      value={{
        signInTitle,
        signUpTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
