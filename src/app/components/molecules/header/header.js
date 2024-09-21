import styles from "./header.module.scss";
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Image src={logo} alt="Logo"></Image>
        <ul className={styles.wrapper}>
          <li className={styles.button}>
            <Link href="/">Преимущества</Link>
          </li>
          <li className={styles.button}>
            <Link href="/">Как работаем</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
