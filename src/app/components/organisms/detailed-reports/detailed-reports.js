import Image from "next/image";
import styles from "./detailed-reports.module.scss";
import array from "/public/array.png";
import Button from "@/app/components/atoms/button/button";

export default function DetailedReports() {
  return (
    <section id="section4" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Подробные отчёты для вас и правообладателей</h2>
          <div className={styles.row}>
            <Image src={array} alt="array"></Image>
            <p className={styles.bodyText1}>
              Выручка, CTR, показы и другие показатели в реальном времени.
            </p>
          </div>
          <div className={styles.row}>
            <Image src={array} alt="array"></Image>
            <p className={styles.bodyText1}>
              Инструменты контроля качества трафика.
            </p>
          </div>
          <div className={styles.row}>
            <Image src={array} alt="array"></Image>
            <p className={styles.bodyText1}>
              Ежемесячные автоматические отчёты для каждого правообладателя.
            </p>
          </div>
          <Button mediaMaxWidth={"320"} color={"#1d1d1b"}>
            Заказать звонок
          </Button>
        </div>
      </div>
    </section>
  );
}
