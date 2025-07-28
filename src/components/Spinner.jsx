import styles from "../styles/Spinner.module.css";
import waldo from "../assets/waldo-head.png";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <img src={waldo} className={styles["spinner-img"]}></img>
    </div>
  );
}
