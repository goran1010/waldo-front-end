import styles from "../styles/Select.module.css";

export default function Select({ clientPos }) {
  if (!clientPos) return null;

  const boxWidth = 20;
  const boxHeight = 50;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div
        style={{
          position: "fixed",
          top: clientPos.clientY - boxHeight / 2,
          left: clientPos.clientX - boxWidth / 2,
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
          border: "2px solid green",
          borderRadius: "5px",

          pointerEvents: "none",
          zIndex: 99,
        }}
      ></div>
      <form className={styles["select-div"]} onSubmit={handleSubmit}>
        <label htmlFor="character">Character: </label>{" "}
        <select name="character" id="character" className={styles["select"]}>
          <option value="waldo" className={styles["option"]}>
            Waldo
          </option>
          <option value="wendy" className={styles["option"]}>
            Wendy
          </option>
        </select>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles["button-confirm"]}`}>
            Confirm
          </button>
          <button className={`${styles.button} ${styles["button-cancel"]}`}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
