import styles from "../styles/Select.module.css";
import { useRef } from "react";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function Select({
  clientPos,
  setClientPos,
  coorPos,
  image,
  user,
}) {
  const character = useRef(null);

  const boxWidth = 20;
  const boxHeight = 50;

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`${VITE_URL}/api/users/${user.id}`, {
      mode: "cors",
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageId: image.id,
        character: character.current.value,
        coordinates: coorPos,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    }
  }

  function handleClickCancel(e) {
    e.preventDefault();
    setClientPos(null);
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
        <select
          name="character"
          id="character"
          className={styles["select"]}
          ref={character}
        >
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
          <button
            className={`${styles.button} ${styles["button-cancel"]}`}
            onClick={handleClickCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
