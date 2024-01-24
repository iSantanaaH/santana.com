"use client";
import React, {
  createContext,
  useState,
  useRef,
  useContext,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from "react";
import axios from "axios";

interface CadastroContextProps {
  refFormRegister: React.RefObject<HTMLFormElement>;
  refInputName: React.RefObject<HTMLInputElement>;
  refInputCpf: React.RefObject<HTMLInputElement>;
  refInputEmail: React.RefObject<HTMLInputElement>;
  refInputBirthday: React.RefObject<HTMLInputElement>;
  refInputPhone: React.RefObject<HTMLInputElement>;
  isNameErrorEmpty: string | HTMLInputElement;
  isCpfErrorEmpty: string | HTMLInputElement;
  isEmailErrorEmpty: string | HTMLInputElement;
  isBirthdayErrorEmpty: string | HTMLInputElement;
  isPhoneErrorEmpty: string | HTMLInputElement;
  setNameErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setCpfErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setEmailErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setBirthdayErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setPhoneErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  ValidateEmptyInputName: () => void;
  ValidateEmptyInputCpf: () => void;
  ValidateEmptyInputEmail: () => void;
  ValidateEmptyInputBirthday: () => void;
  ValidateEmptyInputPhone: () => void;
  handleSubmit: (event: SyntheticEvent) => void;
}

export const CadastroContext = createContext({} as CadastroContextProps);

export const CadastroProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const refInputName = useRef<HTMLInputElement | null>(null);
  const refInputCpf = useRef<HTMLInputElement | null>(null);
  const refInputEmail = useRef<HTMLInputElement | null>(null);
  const refInputBirthday = useRef<HTMLInputElement | null>(null);
  const refInputPhone = useRef<HTMLInputElement | null>(null);
  const refFormRegister = useRef<HTMLFormElement | null>(null);

  const [isCpfErrorEmpty, setCpfErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isEmailErrorEmpty, setEmailErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isBirthdayErrorEmpty, setBirthdayErrorEmpty] = useState<
    HTMLInputElement | string
  >("");
  const [isPhoneErrorEmpty, setPhoneErrorEmpty] = useState<
    HTMLInputElement | string
  >("");

  const [isNameErrorEmpty, setNameErrorEmpty] = useState<
    HTMLInputElement | string
  >("");

  const MENSAGEM_CAMPO_OBRIGATORIO = "Campo obrigatório";

  function ValidateEmptyInputName() {
    const value = refInputName.current?.value.trim();
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setNameErrorEmpty(mensagem);
  }

  function FormatCpf(cpf: string): string {
    let valueInputCpf = refInputCpf.current?.value.trim();
    const cleanedCpf = cpf.replace(/\D/g, "");

    return (valueInputCpf = cleanedCpf.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    ));
  }

  function ValidateEmptyInputCpf() {
    const value = refInputCpf.current?.value.trim();
    const Mensagem_CPF_Inválido = "Por favor, insira um CPF válido";
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    } else if (value.length !== 11) {
      mensagem = Mensagem_CPF_Inválido;
    }
    setCpfErrorEmpty(mensagem);
  }

  function ValidateEmptyInputEmail() {
    const value = refInputEmail.current?.value.trim();
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setEmailErrorEmpty(mensagem);
  }

  function ValidateEmptyInputBirthday() {
    const value = refInputBirthday.current?.value.trim();
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setBirthdayErrorEmpty(mensagem);
  }

  function ValidateEmptyInputPhone() {
    const value = refInputPhone.current?.value.trim();
    let mensagem = "";

    if (!value) {
      mensagem = MENSAGEM_CAMPO_OBRIGATORIO;
    }
    setPhoneErrorEmpty(mensagem);
  }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    ValidateEmptyInputName();
    ValidateEmptyInputCpf();
    ValidateEmptyInputEmail();
    ValidateEmptyInputBirthday();
    ValidateEmptyInputPhone();

    if (
      !isNameErrorEmpty &&
      !isCpfErrorEmpty &&
      !isEmailErrorEmpty &&
      !isBirthdayErrorEmpty &&
      !isPhoneErrorEmpty
    ) {
      try {
        const name = refInputName.current?.value.trim();
        const cpf = refInputCpf.current?.value.trim();
        const email = refInputEmail.current?.value.trim();
        const birthday = refInputBirthday.current?.value.trim();
        const phone = refInputPhone.current?.value.trim();

        const formData = {
          name,
          cpf,
          email,
          birthday,
          phone,
        };

        const response = await axios.post(
          "http://localhost:3333/minhaconta/cadastro",
          formData
        );

        if (response.status === 200) {
          console.log("Formulário enviado com sucesso!");
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
        refInputBirthday,
        refInputPhone,
        isCpfErrorEmpty,
        isEmailErrorEmpty,
        isBirthdayErrorEmpty,
        isPhoneErrorEmpty,
        isNameErrorEmpty,
        setNameErrorEmpty,
        setCpfErrorEmpty,
        setEmailErrorEmpty,
        setBirthdayErrorEmpty,
        setPhoneErrorEmpty,
        ValidateEmptyInputName,
        ValidateEmptyInputCpf,
        ValidateEmptyInputEmail,
        ValidateEmptyInputBirthday,
        ValidateEmptyInputPhone,
        handleSubmit,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export const useCadatroContext = () => useContext(CadastroContext);
