import React, {
  SyntheticEvent,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import styles from "@/app/login/login.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import jwt, { JwtPayload } from "jsonwebtoken";
import { LoginContextProps } from "./LoginContextTypes";
import { toast } from "react-toastify";

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
      } else {
        elementEmail?.classList.remove(styles.AcceptInput);
      }
    } else if (value.length === 0) {
      setEmailError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementEmail?.classList.remove(styles.AcceptInput);
      elementEmail?.classList.add(styles.ErrorInput);
    }
  }

  function handleValidatePassword() {
    const elementPassword = refPassword.current;

    if (!password || isPasswordError) {
      setPasswordError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementPassword?.classList.add(styles.ErrorInput);
    } else if (password.length < 8) {
      elementPassword?.classList.remove(styles.AcceptInput);
      elementPassword?.classList.add(styles.ErrorInput);
      setPasswordError(`A senha deve conter no mínimo 8 digitos`);
    }
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const elementPassword = refPassword.current;
    setPassword(value);

    if (value) {
      setPasswordError("");
      elementPassword?.classList.remove(styles.ErrorInput);
    }

    if (value.length >= 8) {
      elementPassword?.classList.remove(styles.ErrorInput);
      elementPassword?.classList.add(styles.AcceptInput);
    } else if (value.length === 0) {
      elementPassword?.classList.remove(styles.AcceptInput);
      elementPassword?.classList.add(styles.ErrorInput);
      setPasswordError(MENSAGEM_CAMPO_OBRIGATORIO);
    } else if (value.length < 8) {
      elementPassword?.classList.remove(styles.AcceptInput);
    }
  }

  async function handleLoginUser(event: SyntheticEvent) {
    event.preventDefault();
    const elementEmail = refEmail.current;
    const elementPassword = refPassword.current;
    handleValidateEmail();
    handleValidatePassword();

    if (!isEmailError && !isPasswordError) {
      try {
        const formData = {
          email,
          password,
        };

        const response = await axios.post(
          "http://localhost:3333/login",
          formData,
        );

        if (response.status === 200) {
          setEmail("");
          setPassword("");
          elementEmail?.classList.remove(styles.AcceptInput);
          elementPassword?.classList.remove(styles.AcceptInput);

          const token = response.data.token;
          const decodedToken = jwt.decode(token) as JwtPayload;
          const userName = decodedToken.userName;
          Cookies.set("santana.com.token", token);

          toast(`Bem vindo, ${userName}`);
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          console.log(`Erro na requisição ${response.status}`);
        }
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          if (error.response.data && error.response.data.error) {
            toast.error(error.response.data.error);
          }
        }
      }
    }
  }

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
