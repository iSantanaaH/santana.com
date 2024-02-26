"use client";
import styles from "./register.module.css";
import Link from "next/link";
import { useCadatroContext } from "@/app/context/user/cadastro/CadastroContext";
import LayoutUser from "@/app/layouts/user";

export default function ResgiterPage() {
  const {
    name,
    cpf,
    email,
    password,
    phone,
    birthdate,
    refFormRegister,
    refInputName,
    refInputCpf,
    refInputEmail,
    refInputPasssword,
    refInputGenderMan,
    refInputGenderWoman,
    refInputGenderUninformed,
    refInputBirthdate,
    refInputPhone,
    isNameError,
    isCpfError,
    isEmailError,
    isPasswordError,
    isGenderError,
    isBirthdateError,
    isPhoneError,
    setGenderError,
    handleValidateName,
    handleChangeName,
    handleValidateCpf,
    handleChangeCpf,
    handleValidateEmail,
    handleChangeEmail,
    handleValidatePassword,
    handleChangePassword,
    handleValidateGender,
    handleValidateBirthdate,
    handleChangeBirthdate,
    handleValidatePhone,
    handleChangePhone,
    handleSubmit,
  } = useCadatroContext();

  return (
    <>
      <LayoutUser>
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
                  required
                  className={styles.InputName}
                  onBlur={handleValidateName}
                  onChange={handleChangeName}
                  ref={refInputName}
                  value={name}
                />
                <span className={styles.SpanErrorRender}>{isNameError}</span>
              </div>

              <div className={styles.ContainerOptions}>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  required
                  placeholder="___.___.___-__"
                  className={styles.InputCPF}
                  onBlur={handleValidateCpf}
                  onChange={handleChangeCpf}
                  ref={refInputCpf}
                  value={cpf}
                />
                <span className={styles.SpanErrorRender}>{isCpfError}</span>
              </div>
              <div className={styles.ContainerOptions}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className={styles.InputEmail}
                  onBlur={handleValidateEmail}
                  onChange={handleChangeEmail}
                  ref={refInputEmail}
                  value={email}
                />
                <span className={styles.SpanErrorRender}>{isEmailError}</span>
              </div>
              <div className={styles.ContainerOptions}>
                <label htmlFor="email">Senha</label>
                <input
                  ref={refInputPasssword}
                  type="password"
                  id="password"
                  required
                  className={styles.InputPassword}
                  onChange={handleChangePassword}
                  onBlur={handleValidatePassword}
                  value={password}
                />
                <span className={styles.SpanInfo}>mínimo 8 caracteres</span>
                <span className={styles.SpanErrorRender}>
                  {isPasswordError}
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
                  required
                  placeholder="__/__/____"
                  className={styles.InputBirthdate}
                  onBlur={handleValidateBirthdate}
                  onChange={handleChangeBirthdate}
                  ref={refInputBirthdate}
                  value={birthdate}
                />
                <span className={styles.SpanInfo}>formato DD/MM/YYYY</span>
                <span className={styles.SpanErrorRender}>
                  {isBirthdateError}
                </span>
              </div>
              <div className={styles.ContainerOptions}>
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  id="phone"
                  required
                  placeholder="(__) _____-____"
                  className={styles.InputPhone}
                  onBlur={handleValidatePhone}
                  onChange={handleChangePhone}
                  ref={refInputPhone}
                  value={phone}
                />
                <span className={styles.SpanErrorRender}>{isPhoneError}</span>
              </div>
              <div className={styles.ContainerButton}>
                <div>
                  <button type="submit">
                    <span>Criar cadastro</span>
                  </button>
                </div>
                <div>
                  <p>
                    Ao criar seu cadastro, você concorda com a nossa{" "}
                    <Link className={styles.LinkPolitic} href={""}>
                      <span>política de privacidade</span>
                    </Link>{" "}
                  </p>
                  <p>
                    Já tem conta?{" "}
                    <Link
                      className={styles.LinkLogin}
                      href={"/minha_conta/login"}
                    >
                      <span>Fazer login</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </LayoutUser>
    </>
  );
}
