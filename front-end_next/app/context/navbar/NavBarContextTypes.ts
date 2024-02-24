import { SetStateAction } from "react";

export interface NavBarContextProps {
  userName: string;
  token: string | boolean;
  ShowCategories: () => void;
  handleHiddenCategories: () => void;
  isShowCategories: SetStateAction<boolean | HTMLSpanElement>;
}
