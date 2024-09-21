import Image from "next/image";
import styles from "./revenue-vs-user-satisfaction.module.scss";
import array from "/public/array.png";
import twoArrayLogo from "/public/twoArrayLogo.png";

export default function RevenueVsUserSatisfaction() {
  return (
    <section className={styles.section}>
      <div className={styles.column}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Баланс между выручкой и удовлетворённостью пользователей
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.block}>
              <Image src={array} width={24} height={24} alt="array"></Image>
              <h3>Частотность под контролем</h3>
              <p className={styles.bodyText2}>
                Чтобы не ронять NPS <br /> и не увеличивать отток пользователей
              </p>
            </div>
            <div className={styles.block_center}>
              <Image
                src={twoArrayLogo}
                width={80}
                height={74.8}
                alt="twoArrayLogo"
              ></Image>
            </div>
            <div className={styles.block}>
              <Image src={array} width={24} height={24} alt="array"></Image>
              <h3>Максимальная выручка</h3>
              <p className={styles.bodyText2}>
                За счёт заполенения всех рекламных мест по высокой цене
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
