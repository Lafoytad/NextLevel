import styles from "./revenue-source-selector.module.scss";
import OperatorOrService from "@/app/components/atoms/operator-or-service/operator-or-service";

export default function RevenueSourceSelector() {
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Дополнительные источники выручки для разных компаний
        </h2>
        <div className={styles.wrapper}>
          <OperatorOrService></OperatorOrService>
          <p className={styles.bodyText1}>
            Найдите идеальный баланс выручки и удовлетворённости пользователей с
            платформой рекламной монетизации
          </p>
        </div>
      </div>
    </div>
  );
}
