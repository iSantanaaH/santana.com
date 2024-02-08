import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function MainNavBar() {
  return (
    <>
      <section>
        <nav className={styles.NavBar}>
          <div className={styles.ContentLogo}>
            <div>
              <Link className="LinkDefault" href={"/"}>
                <h1>
                  Santana<span>.com</span>
                </h1>
              </Link>
            </div>
            <div className={styles.ContainerSearch}>
              <input
                type="search"
                placeholder="Busque marcas, produtos e muitomais..."
              />
            </div>
            <div>
              {/* Lugar onde será colocado o banner pra ser cliente vip */}
            </div>
          </div>
          <div className={styles.ContainerLinks}>
            {/* Aqui vai ser a API de CEP pra mostrar o CEP atual da pessoa */}
            <Link className={styles.LinksInfo} href={"/"}>
              <span>Categorias</span>
            </Link>
            <Link className={styles.LinksInfo} href={"/"}>
              <span>Contato</span>
            </Link>
            <Link className={styles.LinksInfo} href={"/"}>
              <span>Moda</span>
            </Link>
            <Link className={styles.LinksInfo} href={"/"}>
              <span>Histórico</span>
            </Link>
            <Link className={styles.LinksInfo} href={"/"}>
              <span>Ofertas do dia</span>
            </Link>
            <Link className={styles.LinksInfo} href={"/"}>
              <span></span>
            </Link>
          </div>

          <div className={styles.ContentUser}>
            <div>
              <span>Usuário</span>
            </div>
            <div>
              <Link href={"/"}>
                <span>Favoritos</span>
              </Link>
            </div>
            <div>
              <Image src={"/Images/sino.svg"} width={20} height={20} alt="Alerts" />
            </div>
            <div>
              <Link href={"/"}>
                <span>Carrinho</span>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <span>Baixe o app</span>
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
