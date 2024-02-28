"use client";
import { usePerfilContext } from "@/app/context/minha_conta/perfil/PerfilContext";
import LayoutUserDetails from "@/app/layouts/layoutUserDetails";
import Image from "next/image";
import styles from "./perfil.module.css";

export default function UserPerfil() {
  return (
    <LayoutUserDetails>
      <section className={styles.MainSection}>
        <div>
          <h1>Olá, UserName</h1>
          <Image src={""} width={100} height={100} alt="" />
        </div>
        <div>
          <Image src={""} width={40} height={40} alt="" />
          <p>Email: seuemail@gmail.com</p>
        </div>
        <div></div>
      </section>
    </LayoutUserDetails>
  );
}
