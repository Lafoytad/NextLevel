import Image from "next/image";
import styles from "./revenue-vs-user-satisfaction.module.scss";

export default function RevenueVsUserSatisfaction() {
  return (
    <section>
      <div>
        <h2>Баланс между выручкой и удовлетворённостью пользователей</h2>
        <div>
          {/* flex justify*/}
          <div>
            <Image src={""} alt=""></Image>
            <h3>Частотность под контролем</h3>
            <p className={styles.bodyText2}></p>
          </div>
          <div></div>
          <div>
            <Image src={""} alt=""></Image>
            <h3>Максимальная выручка</h3>
            <p className={styles.bodyText2}></p>
          </div>
        </div>
      </div>
    </section>
  );
}
