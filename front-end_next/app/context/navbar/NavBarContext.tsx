import { createContext, useContext, useEffect, useState } from "react";
import { NavBarContextProps } from "./NavBarContextTypes";
import jwt, { JwtPayload } from "jsonwebtoken";

export const NavBarContext = createContext({} as NavBarContextProps);

interface NavBarProviderProps {
  children: React.ReactNode;
}

export const NavBarProvider = ({ children }: NavBarProviderProps) => {
  const [token, setToken] = useState<string | boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [isShowCategories, setShowCategories] = useState<
    boolean | HTMLSpanElement
  >(false);
  const [isShowUsers, setShowUsers] = useState<boolean | HTMLSpanElement>(
    false
  );
  const [isShowFavorites, setShowFavorites] = useState<
    boolean | HTMLSpanElement
  >(false);

  useEffect(() => {
    // Obtem todos os cookies presentes na página individualmente.
    const cookies = document.cookie.split(";");
    let token = null;

    // Percorre os cookies usando o forEach.
    cookies.forEach((cookie) => {
      // Seleciona o cookies atual e remove todos os espaços em branco.
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith("santana.com.token=")) {
        /* Se o token começar com "santana.com.token=" pego o valor
          dele e coloco dentro da variável "token".
          */
        token = trimmedCookie.substring(
          "santana.com.token=".length,
          trimmedCookie.length
        );
        setToken(token);
      }
    });

    if (token) {
      try {
        const decodedToken = jwt.decode(token) as JwtPayload;
        const user_name = decodedToken?.user_name;
        setUserName(user_name);
      } catch (error) {}
    }
  }, []);

  function ShowCategories() {
    setShowCategories(true);
  }

  function handleHiddenCategories() {
    setShowCategories(false);
  }

  return (
    <NavBarContext.Provider
      value={{
        token,
        userName,
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
