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
            <Link className={`${"LinkDefault"} ${styles.Category}`} href={"/"}>
              <span>Categorias</span>
            </Link>
            <Link className={"LinkDefault"} href={"/"}>
              <span>Moda</span>
            </Link>

            <Link className={"LinkDefault"} href={"/"}>
              <span>Ofertas do dia</span>
            </Link>
            <Link className={"LinkDefault"} href={"/"}>
              <span>Histórico</span>
            </Link>
            <Link className={"LinkDefault"} href={"/"}>
              <span>Contato</span>
            </Link>
            <Link className={"LinkDefault"} href={"/"}>
              <span></span>
            </Link>
          </div>

          <div className={styles.ContentUser}>
            <div>
              <span className={styles.UserInfo}>Usuário</span>
            </div>
            <div>
              <Link className={"LinkDefault"} href={"/"}>
                <span>Baixe o app</span>
              </Link>
            </div>
            <div>
              <Link className={"LinkDefault"} href={"/"}>
                <span className={styles.Favorites}>Favoritos</span>
              </Link>
            </div>
            <div>
              <Image
                src={"/Images/sino.svg"}
                width={20}
                height={20}
                alt="Alertas"
              />
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src={"/Images/carringo.svg"}
                  width={20}
                  height={20}
                  alt="Carrinho"
                />
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
