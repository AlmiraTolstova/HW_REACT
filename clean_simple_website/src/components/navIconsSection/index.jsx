import TwitterIcon from "../../icons/twitterIcon";
import FacebookIcon from "../../icons/facebookIcon";
import TelegramIcon from "../../icons/telegramIcon";
import MediumIcon from "../../icons/mIcon";
import styles from "./styles.module.css";

function NavIconSection() {
  return (
    <div className={styles.container}>
      <FacebookIcon />
      <TelegramIcon />
      <TwitterIcon />
      <MediumIcon />
    </div>
  );
}
export default NavIconSection;
