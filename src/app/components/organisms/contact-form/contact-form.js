import Button from "../../atoms/button/button";
import styles from "./contact-form.module.scss";

export default function ContactForm() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Заполните форму</h2>
          <form action="">
            <textarea
              className={styles.bodyText2}
              placeholder="Напишите свой вопрос"
              name=""
              id=""
            />
            <div className={styles.column}>
              <input
                className={`${styles.bodyText2} ${styles.email}`}
                placeholder="Введите e-mail"
                type="text"
              />
              <div className={styles.wrap}>
                <input type="checkbox" id="myCheckbox" />
                <label className={styles.bodyText3} for="myCheckbox">
                  Я ознакомлен(а) с{" "}
                  <span className={styles.decoration}>
                    политикой конфиденциальности
                  </span>{" "}
                  и согласен(на) на обработку{" "}
                  <span className={styles.decoration}>
                    персональных данных.
                  </span>
                </label>
              </div>
              <Button color={"#1d1d1b"}>Отправить</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
