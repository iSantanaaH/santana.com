"use client"
import LayoutUser from "@/app/layouts/user";
import styles from "./login.module.css";
import Link from "next/link";
import { useLoginContext } from "@/app/context/user/login/LoginContext";

export default function LoginPageUser() {
  const {
    email,
    password,
    refEmail,
    refPassword,
    isEmailError,
    isPasswordError,
    handleValidateEmail,
    handleChangeEmail,
    handleValidatePassword,
    handleChangePassword,
    handleLoginUser,
  } = useLoginContext();

  return (
    <>
      <LayoutUser>
        <section className={styles.MainContainer}>
          <div className={styles.ContentTitle}>
            <article className={styles.ArticleTitle}>
              <h1>Fazer Login</h1>
              <p>
                Faça seu login para ter uma experiência personalizada com nossa
                equipe e acompanhar seus produtos em tempo real.
              </p>
            </article>
          </div>
          <form onSubmit={handleLoginUser} method="POST" className={styles.FormLogin}>
            <div className={styles.ContainerOptions}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                className={styles.InputEmail}
                onChange={handleChangeEmail}
                onBlur={handleValidateEmail}
                ref={refEmail}
                value={email}
              />
              <span className={styles.SpanErrorRender}>
                {isEmailError}
              </span>
            </div>
            <div className={styles.ContainerOptions}>
              <label htmlFor="email">Senha</label>
              <input
                type="password"
                id="password"
                required
                className={styles.InputPassword}
                onChange={handleChangePassword}
                onBlur={handleValidatePassword}
                ref={refPassword}
                value={password}
              />
              <span className={styles.SpanErrorRender}>
                {isPasswordError}
              </span>
            </div>
            <div className={styles.ContentSubmit}>
              <button type="submit">
                <span>Entrar</span>
              </button>
              <p>
                Não tem conta?{" "}
                <Link
                  className={styles.LinkRedirect}
                  href={"/minha-conta/cadastro"}
                >
                  <span>Cadastre-se</span>
                </Link>
              </p>
            </div>
          </form>
        </section>
      </LayoutUser>
    </>
  );
}
