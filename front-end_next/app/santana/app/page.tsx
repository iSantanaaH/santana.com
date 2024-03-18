import Image from "next/image";
import styles from "./santanaapp.module.css";
import Link from "next/link";

export default function SantanaApp() {
  return (
    <>
      <header className={styles.Header}>
        <section className={styles.SectionRedirect}>
          <div className={styles.LogoSantana}>
            <h1 className={styles.Name}>
              Santana
              <span className={styles.Domain}>.com</span>
            </h1>
            <Link href={"/"}>
              <Image src={""} width={50} height={50} alt="" />
            </Link>
          </div>
          <div className={styles.ButtonApp}>
            <p>Descontos exclusivos somente no APP!</p>
            <button>
              <span>BAIXE AGORA</span>
            </button>
          </div>
        </section>
      </header>
      <main className={styles.Main}>
        <section>
          <div>
            <h1>
              Guia para instalação do APP
            </h1>
          </div>
          <div>
            <video className={styles.VideoGuide} src=""></video>
          </div>
        </section>
      </main>
      <footer className={styles.Footer}></footer>
    </>
  );
}
