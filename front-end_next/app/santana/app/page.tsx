import Image from "next/image";
import styles from "./santanaapp.module.css";
import Link from "next/link";

export default function SantanaApp() {
  return (
    <>
      <header className={styles.Header}>
        <section className={styles.SectionRedirect}>
          <div className={styles.LogoSantana}>
            <h1>APP Santana.com</h1>
            <Link href={"/"}>
              <Image src={""} width={50} height={50} alt="" />
            </Link>
          </div>
          <div className={styles.ButtonApp}>
            <p>Descontos exclusivos somente no APP!</p>
            <button>BAIXE AGORA!</button>
          </div>
        </section>
      </header>
      <main className={styles.Main}></main>
      <footer className={styles.Footer}></footer>
    </>
  );
}
