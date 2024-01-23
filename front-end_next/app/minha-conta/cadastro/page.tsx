"use client";
import Image from "next/image";
import styles from "./register.module.css";

import { useCadatroContext } from "@/app/context/cadastroContext";

export default function ResgiterPage() {
  const {
    refFormRegister,
    refInputName,
    refInputCpf,
    refInputEmail,
    refInputBirthday,
    refInputPhone,
    isCpfErrorEmpty,
    isEmailErrorEmpty,
    isBirthdayErrorEmpty,
    isPhoneErrorEmpty,
    isNameErrorEmpty,
    setNameErrorEmpty,
    setCpfErrorEmpty,
    setEmailErrorEmpty,
    setBirthdayErrorEmpty,
    setPhoneErrorEmpty,
    ValidateEmptyInputName,
    ValidateEmptyInputCpf,
    ValidateEmptyInputEmail,
    ValidateEmptyInputBirthday,
    ValidateEmptyInputPhone,
    handleSubmit,
  } = useCadatroContext();

  return (
    <section className={styles.MainContainerPageLogin}>
      <div className={styles.ContentImageBackground}>
        <Image
          className={styles.ImageLogin}
          src={"/Images/logo2.svg"}
          width={50}
          height={50}
          alt="Santana.com"
          priority
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
          <form ref={refFormRegister} onSubmit={handleSubmit}>
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
                onBlur={ValidateEmptyInputName}
                onChange={() => setNameErrorEmpty(false)}
                ref={refInputName}
              />
              {isNameErrorEmpty && (
                <span className={styles.SpanErrorRender}>
                  * Campo obrigatório
                </span>
              )}
            </div>

            <div className={styles.ContainerOptions}>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                maxLength={11}
                required
                placeholder="___.___.___-__"
                className={`${styles.InputCPF} ${
                  isCpfErrorEmpty ? styles.ErrorInput : ""
                }`}
                onBlur={ValidateEmptyInputCpf}
                onChange={() => setCpfErrorEmpty("")}
                ref={refInputCpf}
              />
              <span className={styles.SpanErrorRender}>
                {isCpfErrorEmpty as string}
              </span>
            </div>
            <div className={styles.ContainerOptions}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Digite seu email"
                className={`${styles.InputEmail} ${
                  isEmailErrorEmpty ? styles.ErrorInput : ""
                }`}
                onBlur={ValidateEmptyInputEmail}
                onChange={() => setEmailErrorEmpty(false)}
                ref={refInputEmail}
              />
              {isEmailErrorEmpty && (
                <span className={styles.SpanErrorRender}>
                  * Campo obrigatório
                </span>
              )}
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
                className={`${styles.InputBirthday} ${
                  isBirthdayErrorEmpty ? styles.ErrorInput : ""
                }`}
                onBlur={ValidateEmptyInputBirthday}
                onChange={() => setBirthdayErrorEmpty(false)}
                ref={refInputBirthday}
              />
              {isBirthdayErrorEmpty && (
                <span className={styles.SpanErrorRender}>
                  * Campo obrigatório
                </span>
              )}
            </div>
            <div className={styles.ContainerOptions}>
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="(__) _____-____"
                className={`${styles.InputPhone} ${
                  isPhoneErrorEmpty ? styles.ErrorInput : ""
                }`}
                onBlur={ValidateEmptyInputPhone}
                onChange={() => setPhoneErrorEmpty(false)}
                ref={refInputPhone}
              />
              {isPhoneErrorEmpty && (
                <span className={styles.SpanErrorRender}>
                  * Campo obrigatório
                </span>
              )}
            </div>
            <div>
              <button type="submit">Criar cadastro</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
