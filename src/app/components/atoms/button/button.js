import styles from "./button.module.scss";

export default function Button({ children, color }) {
  return (
    <button className={styles.button} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}
