"use client";
import React, {
  createContext,
  useState,
  useRef,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface CadastroContextProps {
  refInputName: React.RefObject<HTMLInputElement>;
  refInputCpf: React.RefObject<HTMLInputElement>;
  refInputEmail: React.RefObject<HTMLInputElement>;
  refInputBirthday: React.RefObject<HTMLInputElement>;
  refInputPhone: React.RefObject<HTMLInputElement>;
  isNameErrorEmpty: boolean | HTMLInputElement;
  isCpfErrorEmpty: boolean | HTMLInputElement;
  isEmailErrorEmpty: boolean | HTMLInputElement;
  isBirthdayErrorEmpty: boolean | HTMLInputElement;
  isPhoneErrorEmpty: boolean | HTMLInputElement;
  setNameErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
  setCpfErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
  setEmailErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
  setBirthdayErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
  setPhoneErrorEmpty: Dispatch<SetStateAction<boolean | HTMLInputElement>>;
  ValidateEmptyInputName: () => void;
  ValidateEmptyInputCpf: () => void;
  ValidateEmptyInputEmail: () => void;
  ValidateEmptyInputBirthday: () => void;
  ValidateEmptyInputPhone: () => void;
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

  const [isCpfErrorEmpty, setCpfErrorEmpty] = useState<
    HTMLInputElement | boolean
  >(false);
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

  function ValidateEmptyInputCpf() {
    const value = refInputCpf.current?.value.trim();

    if (!value || value.trim() === "") {
      setCpfErrorEmpty(true);
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

  return (
    <CadastroContext.Provider
      value={{
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
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export const useCadatroContext = () => useContext(CadastroContext);
