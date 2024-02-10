import { createContext } from "react";
import { NavBarContextPropos } from "./NavBarContextTypes";

export const NavBarContext = createContext({} as NavBarContextPropos);

interface NavBarProviderProps {
  children: React.ReactNode;
}

export const NavBarProvider = ({ children }: NavBarProviderProps) => {
  return <NavBarContext.Provider value={{}}>{children}</NavBarContext.Provider>;
};
