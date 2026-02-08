import Image from "../../assets/DesktopMobileSection.png";
import styles from "./styles.module.css";
import Btn from "../button";

function DesktopMobileSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.block1}>
          <h5>DESKTOP AND MOBILE APP</h5>
          <h2>
            Plan <span className={styles.block1Title}>and</span> manage
          </h2>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata. Solum patrioque no sea. Mea ex malis mollis
            oporteat. Eum an expetenda consequat.
          </p>
          <div className={styles.blockBtns}>
            <Btn variant="secondary" children="View video"></Btn>
            <Btn variant="outline" children="See features"></Btn>
          </div>
        </div>
        <div className={styles.block2}>
          <img src={Image}></img>
        </div>
      </div>
    </section>
  );
}

export default DesktopMobileSection;
