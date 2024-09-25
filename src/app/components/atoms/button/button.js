import styles from "./button.module.scss";

export default function Button({ children, color, mediaMaxWidth }) {
  // mediaMaxWidth? = (1440 == 560px ) или (768 == 688px ) или (320 == 288px )

  return (
    <button
      className={`
        ${styles.button}  
        ${
          mediaMaxWidth === "1440"
            ? styles.MaxWidth1440
            : mediaMaxWidth === "768"
            ? styles.MaxWidth768
            : mediaMaxWidth === "320"
            ? styles.MaxWidth320
            : ""
        }
      ${color ? styles.userColor : styles.staticColor}
      `}
    >
      {children}
    </button>
  );
}
