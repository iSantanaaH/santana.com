import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function MainNavBar() {
  return (
    <>
      <section className={styles.NavBar}>
        <div>
          <div className={styles.SectionLogo}>
            <div>
              <Link href={"/"}>
                <Image
                  src={"/Images/logo.svg"}
                  width={50}
                  height={50}
                  alt="Santana.com"
                  title="Santana.com"
                />
              </Link>
            </div>
            <div>
              <input
                type="search"
                placeholder="Buscar marcas, produtos e mais..."
              />
            </div>
            <div>
              {/* Lugar onde será colocado o banner pra ser cliente vip */}
            </div>
          </div>
          <div className={styles.ContainerLinks}>
            {/* Aqui vai ser a API de CEP pra mostrar o CEP atual da pessoa */}
            <Link href={"/"}>
              <span>Categorias</span>
            </Link>
            <Link href={"/"}>
              <span>Contato</span>
            </Link>
            <Link href={"/"}>
              <span>Moda</span>
            </Link>
            <Link href={"/"}>
              <span>Histórico</span>
            </Link>
            <Link href={"/"}>
              <span>Ofertas do dia</span>
            </Link>
            <Link href={"/"}>
              <span></span>
            </Link>
          </div>

          <div>
            <Image src={""} width={50} height={50} alt="" />
            <span>olá, faça seu login ou cadastre-se</span>
            <Link href={"/minha-conta/cadastro"}>
              <span>Cadastrar</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
