import Image from "next/image";
import styles from "./our-monetization-partners.module.scss";
import clickWave from "/public/ClickWave.png";
import zyphronix from "/public/zyphronix.png";
import novaSphere from "/public/NovaSphere.png";

export default function OurMonetizationPartners() {
  return (
    <section id="section3" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>Наши партнёры по монетизации</h3>
          <div className={styles.row}>
            <Image src={clickWave} alt="clickWave"></Image>
            <Image src={zyphronix} alt="zyphronix"></Image>
            <Image src={novaSphere} alt="novaSphere"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
