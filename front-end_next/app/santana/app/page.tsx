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
            <Link className={"LinkDefault"} href={"/"}>
              <Image className={styles.LogoHeader} src={"/Images/carrinho.png"} width={50} height={50} alt="" />
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
            <div className={styles.DivBorder}></div>
            <video
              controls
              className={styles.VideoGuide}
              src="/Videos/teste.mp4"
              typeof="video/mp4"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </section>
        <section className={styles.AboutSantanaApp}>
          <div className={styles.Title}>
            <h2>Quais as vantagens de ter o nosso APP?</h2>
          </div>
          <div className={styles.InfoAppForUser}>
            <div>
              <h3>Acompanhe seus produtos em tempo real</h3>
              <article>
                <Image
                  src={"/Images/caminhao-de-entrega.svg"}
                  width={100}
                  height={100}
                  alt="Rastreio de produto"
                  className={styles.ImageArticle}
                />
              </article>
              <p>O APP te dá o poder de rastrear seus produtos em tempo real</p>
            </div>
            <div>
              <h3>Avisaremos quando houver alguma promoção</h3>
              <article>
              <Image
                  src={"/Images/alerta.svg"}
                  width={100}
                  height={100}
                  alt="Rastreio de produto"
                  className={styles.ImageArticle}
                />
              </article>
              <p>
                Fique atento no alertas, você será avisado caso alguma promoção
                esteja ativa
              </p>
            </div>
            <div>
              <h3>Concorra a cupons de descontos em compras</h3>
              <article>
              <Image
                  src={"/Images/cupom.svg"}
                  width={100}
                  height={100}
                  alt="Rastreio de produto"
                  className={styles.ImageArticle}
                />
              </article>
              <p>
                Com o APP você concorre a cupons de desconto para usar em suas
                compras
              </p>
            </div>
          </div>
        </section>
        <section>

        </section>
      </main>
      <footer className={styles.Footer}>
        <section className={styles.DirectsReserved}>
          <div>
            <p>&copy; 2024 Santana.com | Todos os direitos reservados.</p>
          </div>
        </section>
      </footer>
    </>
  );
}
