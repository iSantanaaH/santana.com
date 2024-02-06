import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function MainNavBar() {
  return (
    <>
      <section className={styles.NavBar}>
        <div>
          <div>
            <Link href={"/"}>
              <Image
                src={"/Images/logo8.svg"}
                width={50}
                height={50}
                alt="Santana.com"
                title="Santana.com"
              />
            </Link>
          </div>

          <input type="search" placeholder="busque aqui seu produto" />

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
