import CityLinks from "../cityLinks";
import styles from "./styles.module.css";
import Logo from "../../assets/CooljobGrey.png";
import TwitterIcon from "../../assets/icons/twLogo.svg";
import InIcon from "../../assets/icons/inLogo.svg";
import FacebookIcon from "../../assets/icons/feFacebookLogo.svg";
import GIcon from "../../assets/icons/gIcon.svg";
import SozialMedia from "../sozialMedia";

function Footer() {
  const citiesList = [
    "Осака",
    "Коясан",
    "Токио",
    "Хаконэ",
    "Наэба",
    "Томаму",
    "Йокогама",
    "Нагоя",
    "Саппоро",
    "Кобе",
  ];

  const iconsList = [InIcon, GIcon, TwitterIcon, FacebookIcon];
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3>Популярные города</h3>
        <CityLinks cities={citiesList} />

        <div className={styles.footerLine}></div>

        <div className={styles.footerLogos}>
          <img className={styles.footerLogo} src={Logo}></img>
          <div className={styles.footerIcons}>
            {iconsList.map((item, index) => {
              return <SozialMedia key={index} icon={item} />;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
