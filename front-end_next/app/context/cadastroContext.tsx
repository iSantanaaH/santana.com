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
  isNameErrorEmpty: boolean | HTMLInputElement;
  isCpfErrorEmpty: string | HTMLInputElement;
  isEmailErrorEmpty: boolean | HTMLInputElement;
  isBirthdayErrorEmpty: boolean | HTMLInputElement;
  isPhoneErrorEmpty: boolean | HTMLInputElement;
  setNameErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
  setCpfErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setEmailErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
  setBirthdayErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
  setPhoneErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
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
    HTMLInputElement | boolean
  >(false);
  const [isBirthdayErrorEmpty, setBirthdayErrorEmpty] = useState<
    HTMLInputElement | boolean
  >(false);
  const [isPhoneErrorEmpty, setPhoneErrorEmpty] = useState<
    HTMLInputElement | boolean
  >(false);

  const [isNameErrorEmpty, setNameErrorEmpty] = useState<
    HTMLInputElement | boolean
  >(false);

  function ValidateEmptyInputName() {
    const value = refInputName.current?.value.trim();

    if (!value || value.trim() === "") {
      setNameErrorEmpty(true);
    }
  }

  function FormatCpf(cpf: string): string {
    const cleanedCpf = cpf.replace(/\D/g, "");

    return cleanedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function ValidateEmptyInputCpf() {
    const value = refInputCpf.current?.value.trim();

    if (!value || value.trim() === "") {
      const message = `*Campo obrigatório`;
      setCpfErrorEmpty(message);
    } else if (value?.length < 11) {
      const message = `Por favor, insira um CPF válido`;
      setCpfErrorEmpty(message);
    }
  }

  function ValidateEmptyInputEmail() {
    const value = refInputEmail.current?.value.trim();

    if (!value || value.trim() === "") {
      setEmailErrorEmpty(true);
    }
  }

  function ValidateEmptyInputBirthday() {
    const value = refInputBirthday.current?.value.trim();

    if (!value || value.trim() === "") {
      setBirthdayErrorEmpty(true);
    }
  }

  function ValidateEmptyInputPhone() {
    const value = refInputPhone.current?.value.trim();

    if (!value || value.trim() === "") {
      setPhoneErrorEmpty(true);
    }
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
