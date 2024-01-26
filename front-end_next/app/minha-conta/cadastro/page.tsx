"use client";
import Image from "next/image";
import styles from "./register.module.css";

import { useCadatroContext } from "@/app/context/cadastroContext";
import Link from "next/link";

export default function ResgiterPage() {
  const {
    refFormRegister,
    refInputName,
    refInputCpf,
    refInputEmail,
    refInputGenderMan,
    refInputGenderWoman,
    refInputGenderUninformed,
    refInputBirthday,
    refInputPhone,
    isCpfErrorEmpty,
    isEmailErrorEmpty,
    isGenderErrorEmpty,
    isBirthdayErrorEmpty,
    isPhoneErrorEmpty,
    isNameErrorEmpty,
    setNameErrorEmpty,
    setCpfErrorEmpty,
    setEmailErrorEmpty,
    setGenderErrorEmpty,
    setBirthdayErrorEmpty,
    setPhoneErrorEmpty,
    ValidateEmptyInputName,
    ValidateEmptyInputCpf,
    ValidateEmptyInputEmail,
    ValidateEmptyInputsGender,
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
                className={`${styles.InputName} ${
                  isNameErrorEmpty ? styles.ErrorInput : ""
                }`}
                onBlur={ValidateEmptyInputName}
                onChange={() => setNameErrorEmpty("")}
                ref={refInputName}
              />
              <span className={styles.SpanErrorRender}>
                {isNameErrorEmpty as string}
              </span>
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
                onChange={() => setEmailErrorEmpty("")}
                ref={refInputEmail}
              />
              <span className={styles.SpanErrorRender}>
                {isEmailErrorEmpty as string}
              </span>
            </div>
            <div className={styles.ContainerOptions}>
              <label htmlFor="email">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="senha"
                className={`${styles.InputPassword} ${
                  isEmailErrorEmpty ? styles.ErrorInput : ""
                }`}
              />
            </div>

            <div className={styles.ContentGender}>
              <div className={styles.OptionsGender}>
                <label htmlFor="sex-m">
                  <span>Masculino</span>
                  <input
                    ref={refInputGenderMan}
                    type="radio"
                    id="sex-m"
                    value={"Masculino"}
                    name="gender"
                    onChange={() => setGenderErrorEmpty("")}
                    onBlur={ValidateEmptyInputsGender}
                  />
                </label>
              </div>
              <div className={styles.OptionsGender}>
                <label htmlFor="sex-f">
                  <span>Feminino</span>
                  <input
                    ref={refInputGenderWoman}
                    type="radio"
                    id="sex-f"
                    name="gender"
                    value={"Feminino"}
                    onChange={() => setGenderErrorEmpty("")}
                    onBlur={ValidateEmptyInputsGender}
                  />
                </label>
              </div>
              <div className={styles.OptionsGender}>
                <label htmlFor="undefined">
                  <span>Não informar</span>
                  <input
                    ref={refInputGenderUninformed}
                    type="radio"
                    id="undefined"
                    name="gender"
                    value={"Não informado"}
                    onChange={() => setGenderErrorEmpty("")}
                    onBlur={ValidateEmptyInputsGender}
                  />
                </label>
              </div>
              <div className={styles.OptionsGender}>
                <span className={styles.SpanErrorRender}>
                  {isGenderErrorEmpty as string}
                </span>
              </div>
            </div>
            <div className={styles.ContainerOptions}>
              <label htmlFor="birthday">Data de nascimento</label>
              <input
                type="text"
                id="birthday"
                name="birthday"
                maxLength={8}
                required
                placeholder="__/__/____"
                className={`${styles.InputBirthday} ${
                  isBirthdayErrorEmpty ? styles.ErrorInput : ""
                }`}
                onBlur={ValidateEmptyInputBirthday}
                onChange={() => setBirthdayErrorEmpty("")}
                ref={refInputBirthday}
              />
              <span className={styles.SpanErrorRender}>
                {isBirthdayErrorEmpty as string}
              </span>
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
                onChange={() => setPhoneErrorEmpty("")}
                ref={refInputPhone}
              />
              <span className={styles.SpanErrorRender}>
                {isPhoneErrorEmpty as string}
              </span>
            </div>
            <div className={styles.ContainerButton}>
              <p>
                Ao criar seu cadastro, você concorda com a nossa{" "}
                <Link className={styles.LinkPolitic} href={""}>
                  Política de Privacidade
                </Link>{" "}
              </p>
              <button type="submit">
                <span>Criar cadastro</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
