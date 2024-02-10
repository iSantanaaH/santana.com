import { SetStateAction } from "react";

export interface NavBarContextProps {
  ShowCategories: () => void;
  handleHiddenCategories: () => void;
  isShowCategories: SetStateAction<boolean | HTMLSpanElement>;
}
