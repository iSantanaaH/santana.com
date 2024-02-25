"use client";
import React, {
  createContext,
  useState,
  useRef,
  useContext,
  SyntheticEvent,
} from "react";
import axios from "axios";
import { CadastroContextProps } from "./CadastroContextTypes";
import styles from "@/app/minha_conta/cadastro/register.module.css";
import { toast } from "react-toastify";

export const CadastroContext = createContext({} as CadastroContextProps);

export const CadastroProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const refInputName = useRef<HTMLInputElement | null>(null);
  const refInputCpf = useRef<HTMLInputElement | null>(null);
  const refInputEmail = useRef<HTMLInputElement | null>(null);
  const refInputPasssword = useRef<HTMLInputElement | null>(null);
  const refInputGenderMan = useRef<HTMLInputElement | null>(null);
  const refInputGenderWoman = useRef<HTMLInputElement | null>(null);
  const refInputGenderUninformed = useRef<HTMLInputElement | null>(null);
  const refInputBirthdate = useRef<HTMLInputElement | null>(null);
  const refInputPhone = useRef<HTMLInputElement | null>(null);
  const refFormRegister = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isCpfError, setCpfError] = useState<string>("");
  const [isEmailError, setEmailError] = useState<string>("");
  const [isPasswordError, setPasswordError] = useState<string>("");
  const [isBirthdateError, setBirthdateError] = useState<string>("");
  const [isPhoneError, setPhoneError] = useState<string>("");
  const [isNameError, setNameError] = useState<string>("");
  const [isGenderError, setGenderError] = useState<string | HTMLInputElement>(
    ""
  );

  const MENSAGEM_CAMPO_OBRIGATORIO = "Campo obrigatório";
  const INPUT_ELEMENT_NAME = refInputName.current;
  const INPUT_ELEMENT_CPF = refInputCpf.current;
  const INPUT_ELEMENT_EMAIL = refInputEmail.current;
  const INPUT_ELEMENT_PASSWORD = refInputPasssword.current;
  const INPUT_ELEMENT_BIRTHDATE = refInputBirthdate.current;
  const INPUT_ELEMENT_PHONE = refInputPhone.current;

  function handleValidateName() {
    const elementName = refInputName.current;

    if (!name || isNameError) {
      setNameError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementName?.classList.add(styles.ErrorInput);
    } else {
      const nameParts = name.trim().split(" ");
      if (nameParts.length < 2 || nameParts[1].length === 0) {
        setNameError("Seu nome precisa ser completo");
        elementName?.classList.remove(styles.AcceptInput);
        elementName?.classList.add(styles.ErrorInput);
      } else {
        setNameError("");
        elementName?.classList.add(styles.AcceptInput);
        elementName?.classList.remove(styles.ErrorInput);
      }
    }
  }

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const elementName = refInputName.current;

    if (value.length > 0) {
      setNameError("");
      elementName?.classList.remove(styles.ErrorInput);
      elementName?.classList.add(styles.InputName, styles.AcceptInput);
    } else {
      elementName?.classList.remove(styles.AcceptInput);
      elementName?.classList.add(styles.ErrorInput);
      setNameError(MENSAGEM_CAMPO_OBRIGATORIO);
    }
    setName(value);
  }

  function handleValidateCpf() {
    const elementCpf = refInputCpf.current;

    if (!cpf) {
      setCpfError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementCpf?.classList.add(styles.ErrorInput);
    } else if (cpf.length < 11) {
      setCpfError(`Por favor, insira um CPF válido`);
      elementCpf?.classList.add(styles.ErrorInput);
    }
  }

  function handleChangeCpf(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\D/g, "");
    const elementCpf = refInputCpf.current;
    setCpfError("");

    if (value.length <= 11) {
      let formattedCpf = "";

      if (value.length <= 3) {
        formattedCpf = value;
      } else if (value.length <= 6) {
        formattedCpf = `${value.substring(0, 3)}.${value.substring(3)}`;
      } else if (value.length <= 9) {
        formattedCpf = `${value.substring(0, 3)}.${value.substring(
          3,
          6
        )}.${value.substring(6)}`;
      } else {
        formattedCpf = `${value.substring(0, 3)}.${value.substring(
          3,
          6
        )}.${value.substring(6, 9)}-${value.substring(9)}`;
      }

      setCpf(formattedCpf);

      if (value) {
        elementCpf?.classList.remove(styles.ErrorInput);
      }
      if (value.length === 11) {
        elementCpf?.classList.add(styles.InputCPF, styles.AcceptInput);
      } else if (value.length === 0) {
        elementCpf?.classList.remove(styles.AcceptInput);
        elementCpf?.classList.add(styles.ErrorInput);
        setCpfError(MENSAGEM_CAMPO_OBRIGATORIO);
      }
    }
  }

  function handleValidateEmail() {
    const elementEmail = refInputEmail.current;

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
          elementEmail?.classList.add(styles.ErrorInput);
          setEmailError(`Formato de email inválido`);
        }
      }
    }
  }

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const elementEmail = refInputEmail.current;
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
    const elementPassword = refInputPasssword.current;

    if (!password || isPasswordError) {
      setPasswordError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementPassword?.classList.add(styles.ErrorInput);
    } else if (password.length < 8) {
      setPasswordError(`A senha deve conter no mínimo 8 digitos`);
      elementPassword?.classList.add(styles.ErrorInput);
    }
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const elementPassword = refInputPasssword.current;
    setPassword(value);

    if (value) {
      setPasswordError("");
      elementPassword?.classList.remove(styles.ErrorInput);
    }
    if (value.length >= 8) {
      elementPassword?.classList.add(styles.InputPassword, styles.AcceptInput);
      elementPassword?.classList.remove(styles.ErrorInput);
    } else if (value.length === 0) {
      elementPassword?.classList.remove(styles.AcceptInput);
      elementPassword?.classList.add(styles.ErrorInput);
      setPasswordError(MENSAGEM_CAMPO_OBRIGATORIO);
    }
  }

  function handleValidateGender() {
    const valueInputGenderMan = refInputGenderMan.current?.checked;
    const valueInputGenderWoman = refInputGenderWoman.current?.checked;
    const valueInputGenderUninformed =
      refInputGenderUninformed.current?.checked;
    let mensagem = "";

    if (
      valueInputGenderMan ||
      valueInputGenderWoman ||
      valueInputGenderUninformed
    ) {
      setGenderError("");
      return;
    } else {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setGenderError(mensagem);
  }

  function handleValidateBirthdate() {
    const elementBirthdate = refInputBirthdate.current;

    if (!birthdate) {
      setBirthdateError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementBirthdate?.classList.add(styles.ErrorInput);
    } else if (birthdate.length < 8) {
      setBirthdateError(`Formato de data inválida`);
      elementBirthdate?.classList.add(styles.ErrorInput);
    }
  }

  function handleChangeBirthdate(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\D/g, "");
    const elementBirthdate = refInputBirthdate.current;
    let formattedBirthdate = "";
    setBirthdateError("");
    if (value) {
      elementBirthdate?.classList.remove(styles.ErrorInput);
    } else if (value.length === 0) {
      elementBirthdate?.classList.remove(styles.AcceptInput);
      setBirthdateError(MENSAGEM_CAMPO_OBRIGATORIO);
    }

    if (value.length <= 2) {
      formattedBirthdate = value;
    } else if (value.length <= 4) {
      formattedBirthdate = `${value.substring(0, 2)}/${value.substring(2)}`;
    } else {
      formattedBirthdate = `${value.substring(0, 2)}/${value.substring(
        2,
        4
      )}/${value.substring(4, 8)}`;
    }
    setBirthdate(formattedBirthdate);

    if (value.length === 8) {
      elementBirthdate?.classList.add(
        styles.InputBirthdate,
        styles.AcceptInput
      );
    } else if (value.length === 0) {
      elementBirthdate?.classList.remove(styles.AcceptInput);
      elementBirthdate?.classList.add(styles.ErrorInput);
    }
  }

  function handleValidatePhone() {
    const elementPhone = refInputPhone.current;

    if (!phone) {
      setPhoneError(MENSAGEM_CAMPO_OBRIGATORIO);
      elementPhone?.classList.add(styles.ErrorInput);
    } else if (phone.length < 11) {
      setPhoneError(`Formato de telefone inválido`);
      elementPhone?.classList.add(styles.ErrorInput);
    }
  }

  function handleChangePhone(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\D/g, "");
    const elementPhone = refInputPhone.current;

    let formattedPhone = "";

    if (value) {
      setPhoneError("");
      elementPhone?.classList.remove(styles.ErrorInput);
    }

    if (value.length <= 2) {
      formattedPhone = value;
    } else if (value.length <= 7) {
      formattedPhone = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    } else {
      formattedPhone = `(${value.substring(0, 2)}) ${value.substring(
        2,
        7
      )}-${value.substring(7, 11)}`;
    }
    setPhone(formattedPhone);

    if (value.length === 11) {
      elementPhone?.classList.add(styles.InputPhone, styles.AcceptInput);
    } else if (value.length === 0) {
      elementPhone?.classList.remove(styles.AcceptInput);
      elementPhone?.classList.add(styles.ErrorInput);
      setPhoneError(MENSAGEM_CAMPO_OBRIGATORIO);
    }
  }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    handleValidateName();
    handleValidateCpf();
    handleValidateEmail();
    handleValidatePassword();
    handleValidateGender();
    handleValidateBirthdate();
    handleValidatePhone();

    if (
      !isNameError &&
      !isCpfError &&
      !isEmailError &&
      !isGenderError &&
      !isBirthdateError &&
      !isPhoneError
    ) {
      try {
        let gender = "";

        if (refInputGenderMan.current?.checked) {
          gender = "Masculino";
        } else if (refInputGenderWoman.current?.checked) {
          gender = "Feminino";
        } else if (refInputGenderUninformed.current?.checked) {
          gender = "Não informado";
        }

        const formData = {
          name,
          cpf,
          email,
          password,
          gender,
          birthdate,
          phone,
        };

        const response = await axios.post(
          "http://localhost:3333/minhaconta/cadastro",
          formData
        );

        if (response.status === 200) {
          // Limpa os campos do formulário.
          setName("");
          setCpf("");
          setEmail("");
          setPassword("");
          setBirthdate("");
          setPhone("");

          // Remove as classes de inputs aceitos.
          INPUT_ELEMENT_NAME?.classList.remove(styles.AcceptInput);
          INPUT_ELEMENT_CPF?.classList.remove(styles.AcceptInput);
          INPUT_ELEMENT_EMAIL?.classList.remove(styles.AcceptInput);
          INPUT_ELEMENT_PASSWORD?.classList.remove(styles.AcceptInput);
          INPUT_ELEMENT_BIRTHDATE?.classList.remove(styles.AcceptInput);
          INPUT_ELEMENT_PHONE?.classList.remove(styles.AcceptInput);
          refFormRegister.current?.reset();

          const message = response.data.message;
          toast(message);

          setTimeout(() => {
            window.location.href = "/minha_conta/login";
          }, 1500);
        }
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          if (error.response.data && error.response.data.error) {
            const errorMessage = error.response.data.error;
            toast.error(errorMessage);
          }
        }
      }
    }
  }

  return (
    <CadastroContext.Provider
      value={{
        name,
        cpf,
        email,
        password,
        phone,
        birthdate,
        refFormRegister,
        refInputName,
        refInputCpf,
        refInputEmail,
        refInputPasssword,
        refInputGenderMan,
        refInputGenderWoman,
        refInputGenderUninformed,
        refInputBirthdate,
        refInputPhone,
        isNameError,
        isCpfError,
        isEmailError,
        isPasswordError,
        isGenderError,
        isBirthdateError,
        isPhoneError,
        setGenderError,
        handleValidateName,
        handleChangeName,
        handleValidateCpf,
        handleChangeCpf,
        handleValidateEmail,
        handleChangeEmail,
        handleValidatePassword,
        handleChangePassword,
        handleValidateGender,
        handleValidateBirthdate,
        handleChangeBirthdate,
        handleValidatePhone,
        handleChangePhone,
        handleSubmit,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export const useCadatroContext = () => useContext(CadastroContext);
