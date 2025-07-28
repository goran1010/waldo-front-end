import styles from "../styles/StartGame.module.css";
import waldo from "../assets/waldo-head.png";

export default function FormEnabled({
  setIsFetching,
  setGameStarted,
  setImageURL,
  option,
  setOption,
}) {
  function handelSelect(e) {
    setOption(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setIsFetching(true);
    setImageURL("not null");

    setTimeout(() => {
      setGameStarted(true);
    }, 2000);
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <div>
        <label className={styles.label} htmlFor="select-image">
          Select image:{" "}
        </label>{" "}
        <select
          onChange={handelSelect}
          value={option}
          className={styles.select}
          name="select-image"
          id="select-image"
        >
          <option className={styles.option} value="image-1">
            Image 1
          </option>
          <option className={styles.option} value="image-2">
            Image 2
          </option>
          <option className={styles.option} value="image-3">
            Image 3
          </option>
        </select>{" "}
      </div>
      <div>
        <button className={styles.button} type="submit">
          Start the game
        </button>
      </div>

      <img className={styles.img} src={waldo} alt="Where's Waldo logo" />
    </form>
  );
}
