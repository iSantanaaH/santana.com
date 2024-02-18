"use client";

import { createContext, useContext, useState } from "react";
import { HomeContextProps } from "./HomeContextTypes";
import styles from "@/app/page.module.css";
import Image from "next/image";

export const HomeContext = createContext({} as HomeContextProps);

interface HomeProviderProps {
  children: React.ReactNode;
}

interface SlideShowProps {
  images: string[];
}

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [showArrowChangeCarrousel, setShowArrowChangeCarrousel] =
    useState<boolean>(false);
  const images = [
    "/Images/logo2.svg",
    "/Images/shield_check.svg",
    "/Images/sino.svg",
    "/Images/shop.svg",
  ];

  function handleShowArrowChangeCarrousel() {
    setShowArrowChangeCarrousel(true);
  }

  function handleHiddenArrowChangeCarrousel() {
    setShowArrowChangeCarrousel(false);
  }

  return (
    <HomeContext.Provider
      value={{
        showArrowChangeCarrousel,
        handleShowArrowChangeCarrousel,
        handleHiddenArrowChangeCarrousel,
        images,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);

export default function SlideHomePage({ images }: SlideShowProps) {
  const { showArrowChangeCarrousel } = useHomeContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function NextImageSlide() {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  }

  function PreviousImageSlide() {
    const previousImageIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(previousImageIndex);
  }

  return (
    <>
      {showArrowChangeCarrousel && (
        <>
          <div
            onClick={PreviousImageSlide}
            className={styles.LeftCarrousel}
          ></div>
          <div onClick={NextImageSlide} className={styles.RightCarrousel}></div>
        </>
      )}
      <Image
        src={images[currentImageIndex]}
        className={styles.ImageCarrousel}
        width={100}
        height={100}
        alt=""
      />
    </>
  );
}
