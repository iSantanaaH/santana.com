import { createContext, useContext, useRef, useState } from "react";
import { NavBarContextProps } from "./NavBarContextTypes";

export const NavBarContext = createContext({} as NavBarContextProps);

interface NavBarProviderProps {
  children: React.ReactNode;
}

export const NavBarProvider = ({ children }: NavBarProviderProps) => {
  const [isShowCategories, setShowCategories] = useState<
    boolean | HTMLSpanElement
  >(false);
  const [isShowUsers, setShowUsers] = useState<boolean | HTMLSpanElement>(
    false
  );
  const [isShowFavorites, setShowFavorites] = useState<
    boolean | HTMLSpanElement
  >(false);

  function ShowCategories() {
    setShowCategories(true);
  }

  function handleHiddenCategories() {
    setShowCategories(false);
  }

  return (
    <NavBarContext.Provider
      value={{
        isShowCategories,
        ShowCategories,
        handleHiddenCategories,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarContext = () => useContext(NavBarContext);
