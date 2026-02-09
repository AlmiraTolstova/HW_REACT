import CompanyLogos from "../../components/companyLogos";
import ColaLogo from "../../assets/cola.svg";
import FacebookLogo from "../../assets/facebook.svg";
import MicrosoftLogo from "../../assets/microsoft.svg";
import SonyLogo from "../../assets/sony.svg";
import DisneyLogo from "../../assets/disney.svg";
import styles from "./styles.module.css";

function HelpSection() {
  const logosList = [
    DisneyLogo,
    ColaLogo,
    FacebookLogo,
    MicrosoftLogo,
    SonyLogo,
  ];
  return (
    <section className={styles.container}>
      <h5>Помогаем найти работу:</h5>
      <div className={styles.logosContainer}>
        {logosList.map((item, index) => {
          return <CompanyLogos key={index} imgLink={item} />;
        })}
      </div>
    </section>
  );
}
export default HelpSection;
