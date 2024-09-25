"use client";

import React, { useState, useEffect } from "react";
import styles from "./up.module.scss";

const Up = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <div className={`${styles.section} ${styles.bodyText3}`}>
          <button onClick={scrollToTop} className={styles.scrollToTopButton}>
            Наверх <span className={styles.arrow}></span>
          </button>
        </div>
      )}
    </>
  );
};

export default Up;
