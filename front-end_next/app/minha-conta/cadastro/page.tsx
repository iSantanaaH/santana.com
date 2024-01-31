"use client";
import Image from "next/image";
import styles from "./register.module.css";
import Link from "next/link";
import { useCadatroContext } from "@/app/context/cadastro/cadastroContext";

export default function ResgiterPage() {
  const {
    cpf,
    refFormRegister,
    refInputName,
    refInputCpf,
    refInputEmail,
    refInputPasssword,
    refInputGenderMan,
    refInputGenderWoman,
    refInputGenderUninformed,
    refInputBirthday,
    refInputPhone,
    isNameError,
    isCpfError,
    formattedCpf,
    isEmailError,
    isPasswordError,
    isGenderError,
    isBirthdateError,
    isPhoneError,
    setNameError,
    setCpfError,
    setEmailError,
    setPasswordError,
    setGenderError,
    setBirthdayError,
    setPhoneError,
    handleValidateName,
    handleSetColorName,
    handleValidateCpf,
    handleSetColorCpf,
    handleChangeCpf,
    handleValidateEmail,
    handleSetColorEmail,
    handleValidatePassword,
    handleValidateGender,
    handleValidateBirthdate,
    handleValidatePhone,
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
                  isNameError ? styles.ErrorInput : ""
                }`}
                onBlur={handleValidateName}
                onFocus={() => setNameError("")}
                onChange={handleSetColorName}
                ref={refInputName}
              />
              <span className={styles.SpanErrorRender}>
                {isNameError as string}
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
                  isCpfError ? styles.ErrorInput : ""
                }`}
                onBlur={handleValidateCpf}
                onFocus={() => setCpfError("")}
                onChange={handleChangeCpf}
                ref={refInputCpf}
                value={cpf}
              />
              <span className={styles.SpanErrorRender}>
                {isCpfError as string}
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
                  isEmailError ? styles.ErrorInput : ""
                }`}
                onBlur={handleValidateEmail}
                onFocus={() => setEmailError("")}
                onChange={handleSetColorEmail}
                ref={refInputEmail}
              />
              <span className={styles.SpanErrorRender}>
                {isEmailError as string}
              </span>
            </div>
            <div className={styles.ContainerOptions}>
              <label htmlFor="email">Senha</label>
              <input
                ref={refInputPasssword}
                type="password"
                id="password"
                name="password"
                required
                placeholder="senha"
                className={`${styles.InputPassword} ${
                  isPasswordError ? styles.ErrorInput : ""
                }`}
                onChange={() => setPasswordError("")}
                onBlur={handleValidatePassword}
              />
              <span className={styles.SpanErrorRender}>
                {isPasswordError as string}
              </span>
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
                    onChange={() => setGenderError("")}
                    onBlur={handleValidateGender}
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
                    onChange={() => setGenderError("")}
                    onBlur={handleValidateGender}
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
                    onChange={() => setGenderError("")}
                    onBlur={handleValidateGender}
                  />
                </label>
              </div>
              <div className={styles.OptionsGender}>
                <span className={styles.SpanErrorRender}>
                  {isGenderError as string}
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
                  isBirthdateError ? styles.ErrorInput : ""
                }`}
                onBlur={handleValidateBirthdate}
                onChange={() => setBirthdayError("")}
                ref={refInputBirthday}
              />
              <span className={styles.SpanErrorRender}>
                {isBirthdateError as string}
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
                  isPhoneError ? styles.ErrorInput : ""
                }`}
                onBlur={handleValidatePhone}
                onChange={() => setPhoneError("")}
                ref={refInputPhone}
              />
              <span className={styles.SpanErrorRender}>
                {isPhoneError as string}
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
