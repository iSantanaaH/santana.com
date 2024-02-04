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
          <Link href={"/"}>
            <Image
              src={"/Images/logo2.svg"}
              width={50}
              height={50}
              alt="Santana.com"
              priority
              className={styles.Image}
            />
          </Link>
        </div>
      </section>
      <section className={styles.SectionChildren}>{children}</section>
    </main>
  );
}
