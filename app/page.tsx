import Image from "next/image";
import styles from "./page.module.css";
import MainNavBar from "./Components/NavBar";

export default function Home() {
  return (
    <main className={styles.MainHome}>
      <section>
        <MainNavBar />
      </section>
    </main>
  );
}
