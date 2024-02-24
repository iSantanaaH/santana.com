import { ToastContainer } from "react-toastify";
import Link from "next/link";
import styles from "./index.module.css";
import 'react-toastify/dist/ReactToastify.css';

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
      <section className={styles.SectionChildren}>
        <ToastContainer></ToastContainer>
        {children}
      </section>
    </main>
  );
}
