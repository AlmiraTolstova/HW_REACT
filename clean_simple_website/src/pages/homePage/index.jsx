// import PlayButton from "../../components/playButton";
import styles from "./styles.module.css";
import ImgBtn from "../../assets/playButton.svg";

function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.block}>
        <h5>PLAN YOUR LIFE</h5>
        <h1>
          Increase your <span className={styles.blockTitle}>productivity</span>
        </h1>
        <p>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
          atqui laudem an, insolens gubergren similique est cu. Et vel modus
          congue vituperata.
        </p>
        <button>
          <img src={ImgBtn}></img>
        </button>
      </div>
    </main>
  );
}
export default HomePage;
