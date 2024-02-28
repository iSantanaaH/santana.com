import MainNavBar from "@/app/components/mainNavBar";
import styles from "./layoutUserDetails.module.css";
import FooterMainLayout from "@/app/components/footerMainLayout";

interface LayoutUserDetailsProps {
  children: React.ReactNode;
}

export default function LayoutUserDetails({
  children,
}: LayoutUserDetailsProps) {
  return (
    <section className={styles.MainContainer}>
      <header className={styles.Header}>
        <MainNavBar />
      </header>
      <main className={styles.Main}>{children}</main>
      <footer className={styles.Footer}>
        <FooterMainLayout />
      </footer>
    </section>
  );
}
