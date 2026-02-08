import ClientLogo from "../clientLogo";
import bitBucketLogo from "../../assets/clientLogosSection/bitbucket.png";
import appleWatchLogo from "../../assets/clientLogosSection/apple-watch.png";
import atlassianLogo from "../../assets/clientLogosSection/atlassian.png";
import audiLogo from "../../assets/clientLogosSection/audi.png";
import facebookLogo from "../../assets/clientLogosSection/facebook.png";
import styles from "./styles.module.css";

const logosList = [
  bitBucketLogo,
  appleWatchLogo,
  atlassianLogo,
  audiLogo,
  facebookLogo,
];

function ClientLogoSection() {
  return (
    <div className={styles.container}>
      {logosList.map((item, index) => {
        return <ClientLogo key={index} imgLink={item} />;
      })}
    </div>
  );
}
export default ClientLogoSection;
