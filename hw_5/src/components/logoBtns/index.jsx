import { AppleIcon } from "../appleLogo";
import { GoogleIcon } from "../googleLogo";
import { XIcon } from "../xLogo";
import styles from "./styles.module.css";

function LogoBtns() {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <AppleIcon className={styles.icon} />
      </button>

      <button className={styles.btn}>
        <GoogleIcon className={styles.icon} />
      </button>

      <button className={styles.btn}>
        <XIcon className={styles.icon} />
      </button>
    </div>
  );
}

export default LogoBtns;
