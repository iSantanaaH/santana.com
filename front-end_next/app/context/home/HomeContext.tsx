"use client";

import { createContext, useContext, useState } from "react";
import { HomeContextProps } from "./HomeContextTypes";

export const HomeContext = createContext({} as HomeContextProps);

interface HomeProviderProps {
  children: React.ReactNode;
}

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [showArrowChangeCarrousel, setShowArrowChangeCarrousel] =
    useState<boolean>(false);

  function handleShowArrowChangeCarrousel() {
    setShowArrowChangeCarrousel(true);
  }

  function handleHiddenArrowChangeCarrousel() {
    setShowArrowChangeCarrousel(false);
  }

  return (
    <HomeContext.Provider
      value={{
        showArrowChangeCarrousel,
        handleShowArrowChangeCarrousel,
        handleHiddenArrowChangeCarrousel,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
