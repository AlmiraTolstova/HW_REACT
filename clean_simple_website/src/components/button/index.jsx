import styles from "./styles.module.css";
import clsx from "clsx";

const VARIANTS = {
  primary: styles.btnPrimary,
  outline: styles.btnOutline,
  secondary: styles.btnSecondary,
  red: styles.btnRed,
  inline: styles.inline,
};

function Btn({ variant, children }) {
  return (
    <div>
      {console.log(styles.btn, VARIANTS[variant])}
      <button className={clsx(styles.btn, VARIANTS[variant])}>
        {children}
      </button>
    </div>
  );
}
export default Btn;
