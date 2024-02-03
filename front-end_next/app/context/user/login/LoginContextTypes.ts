import { SyntheticEvent } from "react";

export interface LoginContextProps {
  email: string;
  password: string;
  refEmail: React.RefObject<HTMLInputElement>;
  refPassword: React.RefObject<HTMLInputElement>;
  isEmailError: string;
  isPasswordError: string;
  handleValidateEmail: () => void;
  handleChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleValidatePassword: () => void;
  handleChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginUser: (event: SyntheticEvent) => void;
}
