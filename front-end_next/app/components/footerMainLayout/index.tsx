import Image from "next/image";
import styles from "./footerMainLayout.module.css";
import CreditCardSVG from "@/public/Images/credit_card.svg";
import ShieldCheck from "@/public/Images/shield_check.svg";

export default function FooterMainLayout() {
  return (
    <>
      <section className={styles.MainContainerFooter}>
        <div className={styles.PaymentMethods}>
          <Image
            src={CreditCardSVG}
            width={300}
            height={100}
            alt="Cartão de Cŕedito"
            priority
          />
          <h3>Formas de Pagamento</h3>
          <p>
            Você pode pagar com cartão, boleto ou pix. Escolha a mais favorável
            a você. Boas compras!
          </p>
        </div>
        <div className={styles.BorderDivs}></div>
        <div className={styles.Security}>
          <Image src={ShieldCheck} width={300} height={100} alt="Segurança" />
          <h3>100% Seguro</h3>
          <p>
            Na Santana.com você sempre estará protegido. Caso não tenha gostado
            de sua compra você sempre pode devolver dentro do prazo estipulado
          </p>
        </div>
      </section>
    </>
  );
}
