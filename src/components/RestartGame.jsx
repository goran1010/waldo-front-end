import styles from "../styles/Image.module.css";

export default function RestartGame({ setGameStarted, setImage, allImages }) {
  function handleRestart() {
    setGameStarted(false);
    setImage(allImages[0]);
  }
  return (
    <button
      className={`${styles["restart-game"]} ${styles.button}`}
      onClick={handleRestart}
    >
      Restart Game
    </button>
  );
}
