import { SetStateAction } from "react";

export interface HomeContextProps {
  showArrowChangeCarrousel: SetStateAction<boolean | HTMLDivElement>;
  handleShowArrowChangeCarrousel: () => void;
  handleHiddenArrowChangeCarrousel: () => void;
}
