import MainNavBar from "@/app/components/mainNavBar";
import styles from "./index.module.css";

interface MainLayoutHomeProps {
  children: React.ReactNode;
}

export default function MainLayoutHome({ children }: MainLayoutHomeProps) {
  return (
    <>
      <header className={styles.Header} >
        <MainNavBar />
      </header>
      <main className={styles.Main}>{children}</main>
      <footer className={styles.Footer}></footer>
    </>
  );
}
