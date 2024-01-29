"use client";
import React, {
  createContext,
  useState,
  useRef,
  useContext,
  SyntheticEvent,
} from "react";
import axios from "axios";
import { CadastroContextProps } from "./cadastroContextTypes";
import styles from "@/app/minha-conta/cadastro/register.module.css";

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
  const refInputBirthday = useRef<HTMLInputElement | null>(null);
  const refInputPhone = useRef<HTMLInputElement | null>(null);
  const refFormRegister = useRef<HTMLFormElement | null>(null);

  const [isCpfError, setCpfError] = useState<HTMLInputElement | string>("");
  const [isEmailError, setEmailError] = useState<HTMLInputElement | string>("");
  const [isPasswordError, setPasswordError] = useState<
    HTMLInputElement | string
  >("");
  const [isBirthdateError, setBirthdayError] = useState<
    HTMLInputElement | string
  >("");
  const [isPhoneError, setPhoneError] = useState<HTMLInputElement | string>("");
  const [isNameError, setNameError] = useState<HTMLInputElement | string>("");
  const [isGenderError, setGenderError] = useState<HTMLInputElement | string>(
    ""
  );

  const MENSAGEM_CAMPO_OBRIGATORIO = "Campo obrigatório";

  function handleValidateName() {
    const value = refInputName.current?.value.trim();
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setNameError(mensagem);
  }

  function handleSetColorName() {
    const value = refInputName.current?.value.trim();

    if (value && value.length >= 1) {
      setNameError("");
      const inputElement = refInputName.current;
      inputElement?.classList.add(styles.InputName, styles.AcceptInput);
    } else if (!value) {
      const inputElement = refInputName.current;
      inputElement?.classList.remove(styles.AcceptInput);
      inputElement?.classList.add(styles.InputName, styles.ErrorInput);
    }
  }

  function FormatCpf(cpf: string): string {
    let valueInputCpf = refInputCpf.current?.value.trim();
    const cleanedCpf = cpf.replace(/\D/g, "");

    return (valueInputCpf = cleanedCpf.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    ));
  }

  function handleValidateCpf() {
    const value = refInputCpf.current?.value.trim();
    const Mensagem_CPF_Inválido = "Por favor, insira um CPF válido";
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    } else if (value.length < 11) {
      mensagem = Mensagem_CPF_Inválido;
    }
    setCpfError(mensagem);
  }

  function handleSetColorCpf() {
    const value = refInputCpf.current?.value.trim();

    if (value && value.length === 11) {
      setCpfError("");
      const inputElement = refInputCpf.current;
      inputElement?.classList.add(styles.InputCPF, styles.AcceptInput);
    } else if (!value) {
      const inputElement = refInputCpf.current;
      inputElement?.classList.remove(styles.AcceptInput);
      inputElement?.classList.add(styles.InputCPF, styles.ErrorInput);
    }
  }

  function handleValidateEmail() {
    const value = refInputEmail.current?.value.trim();
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setEmailError(mensagem);
  }

  function handleSetColorEmail() {
    const value = refInputName.current?.value.trim();

    if (value && value.length >= 1) {
      setNameError("");
      const inputElement = refInputName.current;
      inputElement?.classList.add(styles.InputName, styles.AcceptInput);
    } else if (!value) {
      const inputElement = refInputName.current;
      inputElement?.classList.remove(styles.AcceptInput);
      inputElement?.classList.add(styles.InputName, styles.ErrorInput);
    }
  }

  function handleValidatePassword() {
    const value = refInputPasssword.current?.value.trim();
    const Mensagem_Senha_Inválida = "A senha deve conter no mínimo 12 dígitos";
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    } else if (value.length < 12) {
      mensagem = Mensagem_Senha_Inválida;
    }
    setPasswordError(mensagem);
  }

  function handleSetColorSenha() {
    const value = refInputName.current?.value.trim();

    if (value && value.length >= 1) {
      setNameError("");
      const inputElement = refInputName.current;
      inputElement?.classList.add(styles.InputName, styles.AcceptInput);
    } else if (!value) {
      const inputElement = refInputName.current;
      inputElement?.classList.remove(styles.AcceptInput);
      inputElement?.classList.add(styles.InputName, styles.ErrorInput);
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
    const value = refInputBirthday.current?.value.trim();
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setBirthdayError(mensagem);
  }

  function handleSetColorBirthdate() {
    const value = refInputName.current?.value.trim();

    if (value && value.length >= 1) {
      setNameError("");
      const inputElement = refInputName.current;
      inputElement?.classList.add(styles.InputName, styles.AcceptInput);
    } else if (!value) {
      const inputElement = refInputName.current;
      inputElement?.classList.remove(styles.AcceptInput);
      inputElement?.classList.add(styles.InputName, styles.ErrorInput);
    }
  }

  function handleValidatePhone() {
    const value = refInputPhone.current?.value.trim();
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setPhoneError(mensagem);
  }

  function handleSetColorPhone() {
    const value = refInputName.current?.value.trim();

    if (value && value.length >= 1) {
      setNameError("");
      const inputElement = refInputName.current;
      inputElement?.classList.add(styles.InputName, styles.AcceptInput);
    } else if (!value) {
      const inputElement = refInputName.current;
      inputElement?.classList.remove(styles.AcceptInput);
      inputElement?.classList.add(styles.InputName, styles.ErrorInput);
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
        const name = refInputName.current?.value.trim();
        const cpf = refInputCpf.current?.value.trim();
        const email = refInputEmail.current?.value.trim();
        const password = refInputPasssword.current?.value.trim();
        const birthdate = refInputBirthday.current?.value.trim();
        const phone = refInputPhone.current?.value.trim();
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
          refFormRegister.current?.reset();
          console.log(response.data);
        } else {
          console.error(`Erro ao enviar o formulário ${response.status}`);
        }
      } catch (error: any) {
        console.error(error.message);
      }
    }
  }

  return (
    <CadastroContext.Provider
      value={{
        refFormRegister,
        refInputName,
        refInputCpf,
        refInputEmail,
        refInputPasssword,
        refInputGenderMan,
        refInputGenderWoman,
        refInputGenderUninformed,
        refInputBirthday,
        refInputPhone,
        isNameError,
        isCpfError,
        isEmailError,
        isPasswordError,
        isGenderError,
        isBirthdateError,
        isPhoneError,
        setNameError,
        setCpfError,
        setEmailError,
        setPasswordError,
        setGenderError,
        setBirthdayError,
        setPhoneError,
        handleValidateName,
        handleSetColorName,
        handleValidateCpf,
        handleSetColorCpf,
        handleValidateEmail,
        handleValidatePassword,
        handleValidateGender,
        handleValidateBirthdate,
        handleValidatePhone,
        handleSubmit,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export const useCadatroContext = () => useContext(CadastroContext);
