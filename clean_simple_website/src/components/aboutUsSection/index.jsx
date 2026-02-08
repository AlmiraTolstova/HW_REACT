import imgCard1 from "../../assets/aboutUsSection/Group 38.png";
import imgCard2 from "../../assets/aboutUsSection/Group 39.png";
import imgCard3 from "../../assets/aboutUsSection/Group 40.png";
import imgCard4 from "../../assets/aboutUsSection/Group 41.png";
import AboutUsCard from "../aboutUsCard";
import styles from "./styles.module.css";
import Btn from "../button";

const imgsList = [
  {
    imgLink: imgCard1,
    title: "Overview",
    description:
      "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.",
  },
  {
    imgLink: imgCard2,
    title: "Files",
    description:
      "No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.",
  },
  {
    imgLink: imgCard3,
    title: "Meeting chats",
    description: "Vim ne tacimates neglegentur. Erat diceret omittam at est.",
  },
  {
    imgLink: imgCard4,
    title: "Save events",
    description: "Nisl idque mel ea, nominati voluptatum.",
  },
];

function AboutUSSection() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.block1}>
          <h5>ABOUT US</h5>
          <h3>Read about our app</h3>
          <div className={styles.cardsContainer}>
            {imgsList.map((item, index) => {
              return (
                <AboutUsCard
                  key={index}
                  imgLink={item.imgLink}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.blockBtns}>
          <Btn variant="red" children="Read more"></Btn>
          <Btn variant="inline" children="OR"></Btn>
          <Btn variant="primary" children="Get started"></Btn>
        </div>
      </div>
    </section>
  );
}
export default AboutUSSection;
