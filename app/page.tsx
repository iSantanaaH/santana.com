import Image from "next/image";
import styles from "./page.module.css";
import MainNavBar from "./components/navBar";

export default function HomePage() {
  return (
    <main className={styles.MainHome}>
      <section>
        <MainNavBar />
      </section>
    </main>
  );
}
