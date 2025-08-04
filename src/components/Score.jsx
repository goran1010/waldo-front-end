import styles from "../styles/Score.module.css";

export default function Score({ score, setGameStarted, setImage, allImages }) {
  function handleClick() {
    setGameStarted(false);
    setImage(allImages[0]);
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {score.map((elem) => {
          return (
            <div className={styles.board} key={elem.id}>
              <div>username: {elem.User.username}</div>
              <div>{elem.score} seconds</div>
            </div>
          );
        })}

        <button className={styles.button} onClick={handleClick}>
          New Game
        </button>
      </div>
    </div>
  );
}
