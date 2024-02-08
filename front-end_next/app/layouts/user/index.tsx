import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

interface LayoutUserProps {
  children: React.ReactNode;
}

export default function LayoutUser({ children }: LayoutUserProps) {
  return (
    <main className={styles.MainContainer}>
      <section className={styles.ContentImageBackground}>
        <div>
          <Link className="LinkDefault" href={"/"}>
            <h1>
              Santana<span>.com</span>
            </h1>
          </Link>
        </div>
      </section>
      <section className={styles.SectionChildren}>{children}</section>
    </main>
  );
}
