"use client";
import Image from "next/image";
import styles from "./register.module.css";
import { useRef, useState } from "react";

export default function ResgiterPage() {
  const refInputName = useRef<HTMLInputElement | null>(null);

  const [isNameErrorEmpty, setNameErrorEmpty] = useState<
    HTMLInputElement | boolean
  >(false);
  const [isCpfErrorEmpty, setCpfErrorEmpty] = useState<
    HTMLInputElement | boolean
  >(false);

  function ValidateEmptyInput() {
    const value = refInputName.current?.value.trim();

    if (!value || value.trim() === "") {
      setNameErrorEmpty(true);
    }
  }

  return (
    <>
      <section className={styles.MainContainerPageLogin}>
        <div className={styles.ContentImageBackground}>
          <Image
            className={styles.ImageLogin}
            src={"/Images/logo2.svg"}
            width={50}
            height={50}
            alt="Santana.com"
          />
        </div>

        <div className={styles.MainContainerLoging}>
          <article className={styles.ArticleTitle}>
            <h1>Crie sua conta</h1>
            <p>
              Criando sua conta você tem uma experiência personalizada e pode
              acompanhar seus pedidos de forma fácil. Tudo em sua mão.
            </p>
          </article>

          <div className={styles.ContentFormLogin}>
            <form action="">
              <div className={styles.ContainerOptions}>
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Nome"
                  className={`${styles.InputNome} ${
                    isNameErrorEmpty ? styles.ErrorInput : ""
                  }`}
                  ref={refInputName}
                  onBlur={ValidateEmptyInput}
                  onChange={() => setNameErrorEmpty(false)}
                />
                {isNameErrorEmpty && (
                  <span className={styles.SpanErrorRender}>
                    *Campo obrigatório
                  </span>
                )}
              </div>

              <div className={styles.ContainerOptions}>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                  placeholder="___.___.___-__"
                  className={styles.InputCPF}
                  onBlur={ValidateEmptyInput}
                />
              </div>
              <div className={styles.ContainerOptions}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  placeholder="Digite seu email"
                  className={styles.InputEmail}
                  onBlur={ValidateEmptyInput}
                />
              </div>
              <div className={styles.ContentGender}>
                <input type="radio" id="sex-m" name="sex" value={"Masculino"} />
                <label htmlFor="sex-m">Masculino</label>
                <input type="radio" id="sex-f" name="sex" value={"Feminino"} />
                <label htmlFor="sex-f">Feminino</label>
                <input
                  type="radio"
                  id="undefined"
                  name="sex"
                  value={"Não informado"}
                />
                <label htmlFor="undefined">Não informar</label>
              </div>
              <div className={styles.ContainerOptions}>
                <label htmlFor="birthday">Data de nascimento</label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  required
                  placeholder="__/__/____"
                  className={styles.InputBirthday}
                  onBlur={ValidateEmptyInput}
                />
              </div>
              <div className={styles.ContainerOptions}>
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(__) _____-____"
                  className={styles.InputPhone}
                  onBlur={ValidateEmptyInput}
                />
              </div>
              <div>
                <button type="submit">Criar cadastro</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
