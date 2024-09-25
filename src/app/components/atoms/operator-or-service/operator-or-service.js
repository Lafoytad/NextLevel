"use client";

import React, { useState } from "react";
import styles from "./operator-or-service.module.scss";

export default function OperatorOrService() {
  const [active, setActive] = useState("noActive");

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap}>
        <h3
          style={{
            color:
              active === "noActive"
                ? "#1d1d1b"
                : active === "left"
                ? "#FFFFFF"
                : "#a4adac",
            backgroundColor:
              active === "noActive"
                ? "#f2f6f6"
                : active === "left"
                ? "#1d1d1b"
                : "#f2f6f6",
          }}
          onClick={() => setActive("left")}
        >
          Операторам
        </h3>
        <h3
          style={{
            color:
              active === "noActive"
                ? "#FFFFFF"
                : active === "left"
                ? "#a4adac"
                : "#FFFFFF",
            backgroundColor:
              active === "noActive"
                ? "#1d1d1b"
                : active === "left"
                ? "#f2f6f6"
                : "#1d1d1b",
          }}
          onClick={() => setActive("right")}
        >
          ОТТ сервисам
        </h3>
      </div>
      {active === "left" ? (
        <p className={styles.bodyText1}>
          Найдите идеальный баланс выручки и удовлетворённости пользователей с
          платформой рекламной монетизации
        </p>
      ) : (
        <p className={styles.bodyText1}>
          Дополнительные возможности обогащения данных об аудитории и
          монетизации
        </p>
      )}
    </div>
  );
}
