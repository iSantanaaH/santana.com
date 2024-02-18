"use client";
import { useHomeContext } from "./context/home/HomeContext";
import MainLayoutHome from "./layouts/mainLayout";
import styles from "./page.module.css";
import SlideHomePage from "./context/home/HomeContext";

export default function HomePage() {
  const {
    handleHiddenArrowChangeCarrousel,
    handleShowArrowChangeCarrousel,
    images,
  } = useHomeContext();

  return (
    <MainLayoutHome>
      <section
        onMouseEnter={handleShowArrowChangeCarrousel}
        onMouseLeave={handleHiddenArrowChangeCarrousel}
        className={styles.Carrousel}
      >
        <SlideHomePage images={images} />
        <div className={styles.DivGradient}></div>
      </section>
      <section></section>
    </MainLayoutHome>
  );
}
