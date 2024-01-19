import Image from "next/image";
import styles from "./register.module.css";

export default function ResgiterPage() {
  return (
    <>
      <section className={styles.MainContainerPageLogin}>
        <div className={styles.ContentImageBackground}>
          <Image
            className={styles.ImageLogin}
            src={"/Images/logo4.svg"}
            width={50}
            height={50}
            alt="Santana.com"
          />
        </div>

        <div className={styles.MainContainerLoging}>
          <article className={styles.ArticleTitle}>
            <h1>Crie sua conta</h1>
            <span>
              Criando sua conta você tem uma experiência personalizada e pode
              acompanhar seus pedidos de forma fácil. Tudo em sua mão
            </span>
          </article>

          <div className={styles.ContainerFormLogin}></div>
        </div>
      </section>
    </>
  );
}
