"use client";
import { useHomeContext } from "./context/home/HomeContext";
import MainLayoutHome from "./layouts/mainLayout";
import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {
  const {
    handleHiddenArrowChangeCarrousel,
    handleShowArrowChangeCarrousel,
    showArrowChangeCarrousel,
  } = useHomeContext();

  return (
    <MainLayoutHome>
      <section
        onMouseEnter={handleShowArrowChangeCarrousel}
        onMouseLeave={handleHiddenArrowChangeCarrousel}
        className={styles.Carrousel}
      >
        {showArrowChangeCarrousel && (
          <>
            <div className={styles.LeftCarrousel}></div>
            <div className={styles.RightCarrousel}></div>
          </>
        )}

        <Image
          className={styles.ImageCarrousel}
          src={"/Images/logo2.svg"}
          width={100}
          height={100}
          alt="Carrousel Santana.com"
        />
        <div className={styles.DivGradient}></div>
      </section>
      <section>
        
      </section>
    </MainLayoutHome>
  );
}
