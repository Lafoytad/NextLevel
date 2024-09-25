"use client";

import Button from "@/app/components/atoms/button/button";
import Checkbox from "@/app/components/atoms/checkbox/checkbox";
import styles from "./contact-form.module.scss";
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const [emailError, setEmailError] = useState("");

  const questionRef = useRef(null);
  const emailRef = useRef(null);
  const checkboxRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkboxRef.current && checkboxRef.current.checked) {
      const emailValue = emailRef.current.value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailValue)) {
        if (emailValue == "") {
          setEmailError("Укажите email");
          setTimeout(() => {
            setEmailError("");
          }, 5000);
        } else {
          setEmailError("Неправильно указана почта");
          setTimeout(() => {
            setEmailError("");
          }, 5000);
        }
      } else {
        setEmailError("");

        const questionValue = questionRef.current.value;
        console.log("Форма отправлена:", emailValue, "-", questionValue);

        questionRef.current.value = "";
        emailRef.current.value = "";
        checkboxRef.current.checked = false;
      }
    }
  };

  return (
    <section id="section5" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Заполните форму</h2>
          <form onSubmit={handleSubmit} action="">
            <textarea
              ref={questionRef}
              className={styles.bodyText2}
              placeholder="Напишите свой вопрос"
              name=""
              id=""
            />
            <div className={styles.column}>
              <input
                ref={emailRef}
                className={`${styles.bodyText2} ${styles.email} ${
                  emailError && styles.errorBorderBottom
                }`}
                placeholder="Введите e-mail"
                type="text"
              />
              {emailError && (
                <p className={styles.errorMessage}>{emailError}</p>
              )}
              <div className={styles.wrap}>
                <Checkbox ref={checkboxRef}>
                  <span className={styles.bodyText3}>
                    Я ознакомлен(а) с{" "}
                    <span className={styles.decoration}>
                      политикой конфиденциальности
                    </span>{" "}
                    и согласен(на) на обработку{" "}
                    <span className={styles.decoration}>
                      персональных данных.
                    </span>
                  </span>
                </Checkbox>
              </div>
              <Button mediaMaxWidth={"1440"} color={"#1d1d1b"}>
                Отправить
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
