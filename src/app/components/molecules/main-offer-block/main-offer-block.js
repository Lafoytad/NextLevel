import Button from "@/app/components/atoms/button/button";
import styles from "./main-offer-block.module.scss";

export default function MainOfferBlock() {
  return (
    <div className={styles.column}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Монетизируйте клиентскую базу, не снижая NPS
        </h1>
        <p className={styles.bodyText1}>
          Найдите идеальный баланс выручки и удовлетворённости пользователей с
          платформой рекламной монетизации
        </p>
        <div className={styles.button}>
          <Button>Заказать звонок</Button>
        </div>
      </div>
    </div>
  );
}
