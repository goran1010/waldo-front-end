import Spinner from "./Spinner";
import styles from "../styles/StartGame.module.css";

function handleOnSubmit(e) {
  e.preventDefault();
}

export default function FormDisabled({ option }) {
  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <div>
        <label className={styles.label} htmlFor="select-image">
          Select image:{" "}
        </label>{" "}
        <select
          value={option}
          className={styles.select}
          disabled
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
        <button className={styles["button-disabled"]} disabled type="submit">
          Fetching image
        </button>
      </div>
      <Spinner />
    </form>
  );
}
