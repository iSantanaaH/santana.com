import MainNavBar from "@/app/components/mainNavBar";
import styles from "./index.module.css";
import FooterMainLayout from "@/app/components/footerMainLayout";

interface MainLayoutHomeProps {
  children: React.ReactNode;
}

export default function MainLayoutHome({ children }: MainLayoutHomeProps) {
  return (
    <section className={styles.MainContainer}>
      <div>
        <header className={styles.Header}>
          <MainNavBar />
        </header>
      </div>
      <div>
        <main className={styles.Main}>{children}</main>
      </div>
      <div className={styles.Test}>
        <footer className={styles.Footer}>
          <FooterMainLayout />
        </footer>
      </div>
    </section>
  );
}
