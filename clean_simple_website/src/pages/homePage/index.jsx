import PlayButton from "../../components/playButton";
import styles from "./styles.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <p>PLAN YOUR LIFE</p>
      <h1>Increase your productivity</h1>
      <p>
        Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
        atqui laudem an, insolens gubergren similique est cu. Et vel modus
        congue vituperata.
      </p>
      <PlayButton />
    </div>
  );
}
export default HomePage;
