import styles from "../styles/StartGame.module.css";
import waldo from "../assets/waldo-head.png";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function FormEnabled({
  setIsFetching,
  setGameStarted,
  setImage,
  option,
  setOption,
  allImages,
  setUser,
}) {
  function handelSelect(e) {
    setOption(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setIsFetching(true);

    setImage(allImages[option - 1]);

    setTimeout(async () => {
      setGameStarted(true);
      const response = await fetch(`${VITE_URL}/api/users`, {
        mode: "cors",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId: Number(option),
        }),
      });
      if (response.ok) {
        const result = await response.json();
        setUser(result);
        console.log(result);
      }
    }, 1000);
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <h1 className={styles.h1}>
        <i>Double click</i> on the image where you think one of the characters
        is.
        <br /> You can zoom in and zoom out with <i>mouse wheel</i>. <br /> Or
        your can use controls in the top left.
      </h1>
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
          <option className={styles.option} value={allImages[0].id}>
            Waldo in battle
          </option>
          <option className={styles.option} value={allImages[1].id}>
            Waldo in town
          </option>
          <option className={styles.option} value={allImages[2].id}>
            Waldo shopping
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
