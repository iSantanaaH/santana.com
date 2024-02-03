import { createContext, useContext } from "react";
import { LoginContextProps } from "./LoginContextTypes";

export const LoginContext = createContext({} as LoginContextProps);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        refEmail,
        refPassword,
        isEmailError,
        isPasswordError,
        handleValidateEmail,
        handleChangeEmail,
        handleValidatePassword,
        handleChangePassword,
        handleLoginUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);