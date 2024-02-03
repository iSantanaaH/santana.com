import React, {
  SyntheticEvent,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { LoginContextProps } from "./LoginContextTypes";
import styles from "@/app/minha-conta/login/login.module.css";

export const LoginContext = createContext({} as LoginContextProps);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailError, setEmailError] = useState<string>("");
  const [isPasswordError, setPasswordError] = useState<string>("");
  const refEmail = useRef<HTMLInputElement | null>(null);
  const refPassword = useRef<HTMLInputElement | null>(null);

  const MENSAGEM_CAMPO_OBRIGATORIO = `Campo obrigatório`;

  function handleValidateEmail() {
    const elementEmail = refEmail.current;

    if (!email) {
      setEmailError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementEmail?.classList.add(styles.ErrorInput);
    } else {
      if (email) {
        const regexEmail: RegExp =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

        if (regexEmail.test(email)) {
          setEmailError("");
          elementEmail?.classList.add(styles.AcceptInput);
        } else {
          setEmailError(`Formato de email inválido`);
          elementEmail?.classList.add(styles.ErrorInput);
        }
      }
    }
  }

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const elementEmail = refEmail.current;
    setEmail(value);

    if (value) {
      setEmailError("");
      elementEmail?.classList.remove(styles.ErrorInput);

      const regexEmail: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

      if (regexEmail.test(email)) {
        setEmailError("");
        elementEmail?.classList.add(styles.AcceptInput);
      }
    } else if (value.length === 0) {
      setEmailError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementEmail?.classList.remove(styles.AcceptInput);
      elementEmail?.classList.add(styles.ErrorInput);
    }
  }

  function handleValidatePassword() {}

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {}

  function handleLoginUser(event: SyntheticEvent) {}

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
