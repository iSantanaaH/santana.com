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
        <section className={styles.SectionGuide}>
          <div className={styles.Guide}>
            <h1>
              Confira nosso Guia para<br></br>instalação do APP ao lado.
            </h1>
            <video
              className={styles.VideoGuide}
              src="/Videos/teste.mp4"
            ></video>
          </div>
        </section>
        <section className={styles.AboutSantanaApp}>
          <div className={styles.Title}>
            <h2>Quais as vantagens de ter o nosso APP?</h2>
          </div>
          <div className={styles.InfoAppForUser}>
            <h3>Acompanhe seus produtos em tempo real</h3>
            <div></div>
            <h3>Avisaremos quando houver alguma promoção</h3>
            <div></div>
            <h3>Concorra a cupons de descontos em compras</h3>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </main>
      <footer className={styles.Footer}></footer>
    </>
  );
}
