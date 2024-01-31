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
  const refInputBirthdate = useRef<HTMLInputElement | null>(null);
  const refInputPhone = useRef<HTMLInputElement | null>(null);
  const refFormRegister = useRef<HTMLFormElement | null>(null);

  const [cpf, setCpf] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [isCpfError, setCpfError] = useState<HTMLInputElement | string>("");
  const [isEmailError, setEmailError] = useState<HTMLInputElement | string>("");
  const [isPasswordError, setPasswordError] = useState<
    HTMLInputElement | string
  >("");
  const [isBirthdateError, setBirthdateError] = useState<
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

  function handleValidateCpf() {
    let mensagem = "";

    if (!cpf) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    } else if (cpf.length < 11) {
      mensagem = `Por favor, insira um CPF válido`;
    }
    setCpfError(mensagem);
  }

  function handleChangeCpf(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\D/g, "");
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

      if (value.length === 11) {
        const inputElement = refInputCpf.current;
        inputElement?.classList.add(styles.InputCPF, styles.AcceptInput);
      } else if (value.length === 0) {
        const inputElement = refInputCpf.current;
        inputElement?.classList.remove(styles.AcceptInput);
        inputElement?.classList.add(styles.ErrorInput);
        setCpfError(MENSAGEM_CAMPO_OBRIGATORIO);
      }
    }
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
    let Mensagem_Email_Invalido = "Formato de email inválido";
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
      setEmailError(mensagem);
    } else {
      if (value) {
        const regexEmail: RegExp =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

        if (regexEmail.test(value)) {
          setEmailError("");
        } else {
          setEmailError(Mensagem_Email_Invalido);
        }
      }
    }
  }

  function handleSetColorEmail() {
    const value = refInputEmail.current?.value.trim();

    if (value) {
      const regexEmail: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

      if (regexEmail.test(value)) {
        const inputElement = refInputEmail.current;
        inputElement?.classList.add(styles.AcceptInput);
        inputElement?.classList.remove(styles.ErrorInput);
        setEmailError("");
      }
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
    let mensagem = "";

    if (!birthdate) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setBirthdateError(mensagem);
  }

  function handleChangeBirthdate(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\D/g, "");
    let formattedBirthdate = "";
    setBirthdateError("");

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
  }

  function handleValidatePhone() {
    let mensagem = "";

    if (!phone) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    } else if (phone.length < 11) {
      mensagem = `Formato de telefone inválido`;
    }
    setPhoneError(mensagem);
  }

  function handleChangePhone(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\D/g, "");
    let formattedPhone = "";
    setPhoneError("");

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
      const inputElement = refInputPhone.current;
      inputElement?.classList.add(styles.InputPhone, styles.AcceptInput);
    } else if (value.length === 0) {
      const inputElement = refInputPhone.current;
      inputElement?.classList.remove(styles.AcceptInput);
      inputElement?.classList.add(styles.ErrorInput);
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
        const name = refInputName.current?.value.trim();
        const cpf = refInputCpf.current?.value.trim();
        const email = refInputEmail.current?.value.trim();
        const password = refInputPasssword.current?.value.trim();
        const birthdate = refInputBirthdate.current?.value.trim();
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
          console.log("Formulário enviado com sucesso!");
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
        cpf,
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
        setNameError,
        setCpfError,
        setEmailError,
        setPasswordError,
        setGenderError,
        setBirthdateError,
        setPhoneError,
        handleValidateName,
        handleSetColorName,
        handleValidateCpf,
        handleSetColorCpf,
        handleChangeCpf,
        handleValidateEmail,
        handleSetColorEmail,
        handleValidatePassword,
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
