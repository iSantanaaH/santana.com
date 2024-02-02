import LayoutUser from "@/app/layouts/user";
import styles from "./login.module.css";
import Link from "next/link";

export default function LoginPageUser() {
  return (
    <>
      <LayoutUser>
        <section className={styles.MainContainer}>
          <div className={styles.ContentTitle}>
            <article className={styles.ArticleTitle}>
              <h1>Fazer Login</h1>
            </article>
          </div>
          <form className={styles.FormLogin}>
            <div className={styles.ContainerOptions}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Digite seu email"
                className={styles.InputEmail}
              />
              <span className={styles.SpanErrorRender}></span>
            </div>
            <div className={styles.ContainerOptions}>
              <label htmlFor="email">Senha</label>
              <input
                type="password"
                id="password"
                required
                placeholder="senha"
                className={styles.InputPassword}
              />
              <span className={styles.SpanInfo}>mínimo 8 caracteres</span>
              <span className={styles.SpanErrorRender}></span>
            </div>
            <div className={styles.ContentSubmit}>
              <button type="submit">
                <span>Entrar</span>
              </button>
              <p>
                Não tem conta? <Link href={"/minha-conta/cadastro"}>
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
