import Spinner from "./Spinner";
import styles from "../styles/StartGame.module.css";

function handleOnSubmit(e) {
  e.preventDefault();
}

export default function FormDisabled({ option }) {
  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <h1 className={styles.h1}>
        You can zoom in and zoom out with <i>right click</i>. <br />
        <i>Left click</i> on the image where you think one of the characters is.
      </h1>
      <div>
        <label className={styles.label} htmlFor="select-image">
          Select image:{" "}
        </label>{" "}
        <select
          value={option}
          className={styles["select-disabled"]}
          disabled
          name="select-image"
          id="select-image"
        >
          <option className={styles.option} value="image-1">
            Waldo in battle
          </option>
          <option className={styles.option} value="image-2">
            Waldo in town
          </option>
          <option className={styles.option} value="image-3">
            Waldo shopping
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
