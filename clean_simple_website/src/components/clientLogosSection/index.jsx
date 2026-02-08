import ClientLogo from "../clientLogo";
import bitBucketLogo from "../../assets/clientLogosSection/bitbucket.png";
import appleWatchLogo from "../../assets/clientLogosSection/apple-watch.png";
import atlassianLogo from "../../assets/clientLogosSection/atlassian.png";
import audiLogo from "../../assets/clientLogosSection/audi.png";
import facebookLogo from "../../assets/clientLogosSection/facebook.png";

const logosList = [
  bitBucketLogo,
  appleWatchLogo,
  atlassianLogo,
  audiLogo,
  facebookLogo,
];

function ClientLogoSection() {
  return (
    <div>
      {logosList.map((item) => {
        return <ClientLogo imgLink={item} />;
      })}
    </div>
  );
}
export default ClientLogoSection;
