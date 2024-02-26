"use client";

import React, { createContext, useContext } from "react";
import { PerfilContextProps } from "./PerfilContextTypes";

export const PerfilContext = createContext({} as PerfilContextProps);

export const PerfilProvider = ({ children }: { children: React.ReactNode }) => {
  return <PerfilContext.Provider value={{}}>{children}</PerfilContext.Provider>;
};

export const usePerfilContext = useContext(PerfilContext);
