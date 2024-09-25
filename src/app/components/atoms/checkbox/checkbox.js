import styles from "./checkbox.module.scss";
import React, { forwardRef } from "react";

// forwardRef для передачи рефа
const Checkbox = forwardRef(({ children }, ref) => {
  return (
    <label className={styles.customCheckbox}>
      <input ref={ref} type="checkbox" className={styles.checkbox} />
      <span className={styles.checkmark}></span>
      {children}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
