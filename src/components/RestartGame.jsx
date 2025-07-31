import styles from "../styles/Image.module.css";

export default function RestartGame({
  setGameStarted,
  setImageURL,
  allImages,
}) {
  function handleRestart() {
    setGameStarted(false);
    setImageURL(allImages[0]);
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
