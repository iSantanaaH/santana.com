import { Dispatch, SetStateAction, SyntheticEvent } from "react";

export interface CadastroContextProps {
  refFormRegister: React.RefObject<HTMLFormElement>;
  refInputName: React.RefObject<HTMLInputElement>;
  refInputCpf: React.RefObject<HTMLInputElement>;
  refInputEmail: React.RefObject<HTMLInputElement>;
  refInputPasssword: React.RefObject<HTMLInputElement>;
  refInputBirthday: React.RefObject<HTMLInputElement>;
  refInputGenderMan: React.RefObject<HTMLInputElement>;
  refInputGenderWoman: React.RefObject<HTMLInputElement>;
  refInputGenderUninformed: React.RefObject<HTMLInputElement>;
  refInputPhone: React.RefObject<HTMLInputElement>;
  isNameError: string | HTMLInputElement;
  isCpfError: string | HTMLInputElement;
  isEmailError: string | HTMLInputElement;
  isPasswordError: string | HTMLInputElement;
  isGenderError: string | HTMLInputElement;
  isBirthdateError: string | HTMLInputElement;
  isPhoneError: string | HTMLInputElement;
  setNameError: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setCpfError: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setEmailError: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setPasswordError: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setGenderError: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setBirthdayError: Dispatch<SetStateAction<string | HTMLInputElement>>;
  setPhoneError: Dispatch<SetStateAction<string | HTMLInputElement>>;
  handleValidateName: () => void;
  handleSetColorName: () => void;
  handleValidateCpf: () => void;
  handleSetColorCpf: () => void;
  handleValidateEmail: () => void;
  handleValidatePassword: () => void;
  handleValidateGender: () => void;
  handleValidateBirthdate: () => void;
  handleValidatePhone: () => void;
  handleSubmit: (event: SyntheticEvent) => void;
}
