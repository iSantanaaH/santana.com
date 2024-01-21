"use client";
import {
  createContext,
  useState,
  useRef,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface CadastroContextProps {
  refGenerallyInputs: React.RefObject<HTMLInputElement>;
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
  ValidateEmptyInput: () => void;
}

export const CadastroContext = createContext({} as CadastroContextProps);

export const CadastroProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const refGenerallyInputs = useRef<HTMLInputElement | null>(null);

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

  function ValidateEmptyInput() {
    const value = refGenerallyInputs.current?.value.trim();

    if (!value || value.trim() === "") {
      setNameErrorEmpty(true);
    }
  }

  return (
    <CadastroContext.Provider
      value={{
        refGenerallyInputs,
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
        ValidateEmptyInput,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export const useCadatroContext = () => useContext(CadastroContext);
