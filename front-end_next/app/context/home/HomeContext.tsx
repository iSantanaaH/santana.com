"use client";

import { createContext, useContext } from "react";
import { HomeContextProps } from "./HomeContextTypes";

const HomeContext = createContext({} as HomeContextProps);

interface HomeProviderProps {
  children: React.ReactNode;
}

export const HomeProvider = ({ children }: HomeProviderProps) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => useContext(HomeContext);
