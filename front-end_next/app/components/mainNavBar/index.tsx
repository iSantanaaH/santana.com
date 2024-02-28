"use client";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { useNavBarContext } from "@/app/context/navbar/NavBarContext";
import AccountCircleOutline from "@/public/Images/account_circle_outline.svg";

export default function MainNavBar() {
  const {
    isShowCategories,
    ShowCategories,
    handleHiddenCategories,
    token,
    userName,
  } = useNavBarContext();

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
                placeholder="Busque marcas, produtos e muito mais..."
              />
            </div>
            <div>
              {/* Lugar onde será colocado o banner pra ser cliente vip */}
            </div>
          </div>
          <div className={styles.ContainerLinks}>
            <div className={styles.DivCategory}>
              <Link
                className={`${"LinkDefault"} ${styles.Category}`}
                href={"/"}
              >
                <span
                  className={styles.SpanCategories}
                  onMouseEnter={ShowCategories}
                >
                  Categorias
                </span>
              </Link>
              {isShowCategories && (
                <div
                  onMouseLeave={handleHiddenCategories}
                  className={styles.ContentDropdownCategories}
                >
                  <div>
                    <Link href={""} className={`${"LinkDefault"}`}>
                      <span>Sapato</span>
                    </Link>
                  </div>

                  <div>
                    <Link href={""} className={`${"LinkDefault"}`}>
                      <span>Jaqueta</span>
                    </Link>
                  </div>
                  <div>
                    <Link href={""} className={`${"LinkDefault"}`}>
                      <span>Terno</span>
                    </Link>
                  </div>
                  <div>
                    <Link href={""} className={`${"LinkDefault"}`}>
                      <span>Saia</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

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

          <div className={styles.UserDetails}>
            {token ? (
              <div className={styles.RenderWithToken}>
                <div>
                  <Image
                    src={AccountCircleOutline}
                    width={50}
                    height={50}
                    alt=""
                    className={styles.UserInfo}
                  />
                </div>
                <div className={styles.ContentUser}>
                  <p>
                    Bem vindo,
                    <span className={styles.UserName}> {userName}</span>
                  </p>
                  <Link href={"/minha_conta/perfil"} className="LinkDefault">
                    <span>MINHA CONTA</span>
                  </Link>
                  <span>|</span>
                  <button>SAIR</button>
                </div>
              </div>
            ) : (
              <div className={styles.RenderNoToken}>
                <Image
                  src={AccountCircleOutline}
                  width={50}
                  height={50}
                  alt=""
                  className={styles.UserInfo}
                />
                <p>
                  Faça{" "}
                  <Link className={"LinkDefault"} href={"/login"}>
                    <span>Login</span>
                    <br></br>
                  </Link>{" "}
                  ou crie seu{" "}
                  <Link
                    className={"LinkDefault"}
                    href={"/cadastro"}
                  >
                    <span>Cadastro</span>
                  </Link>
                </p>
              </div>
            )}
          </div>

          <div className={styles.ContainerInfo}>
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
