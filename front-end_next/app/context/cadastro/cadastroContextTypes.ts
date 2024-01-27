import { Dispatch, SetStateAction, SyntheticEvent } from "react";

export interface CadastroContextProps {
  isNameErrorEmpty: string | HTMLInputElement;
  isCpfErrorEmpty: string | HTMLInputElement;
  isEmailErrorEmpty: string | HTMLInputElement;
  isPasswordErrorEmpty: string | HTMLInputElement;
  isGenderErrorEmpty: string | HTMLInputElement;
  isBirthdayErrorEmpty: string | HTMLInputElement;
  isPhoneErrorEmpty: string | HTMLInputElement;
  setNameErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setCpfErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setEmailErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setPasswordErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setGenderErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setBirthdayErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setPhoneErrorEmpty: Dispatch<SetStateAction<string | HTMLInputElement>>;
  handleValidateEmptyInputName: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSubmit: (event: SyntheticEvent) => void;
}
