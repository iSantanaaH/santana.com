import MainNavBar from "@/app/components/mainNavBar";
import styles from "./index.module.css";

interface MainLayoutHomeProps {
  children: React.ReactNode;
}

export default function MainLayoutHome({ children }: MainLayoutHomeProps) {
  return (
    <>
      <header >
        <MainNavBar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
