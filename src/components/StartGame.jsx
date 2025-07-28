import { useState } from "react";
import FormEnabled from "./FormEnabled";
import FormDisabled from "./FormDisabled";
import styles from "../styles/StartGame.module.css";

export default function StartGame({ setGameStarted, setImageURL, allImages }) {
  const [isFetching, setIsFetching] = useState(false);
  const [option, setOption] = useState(allImages[0]);

  if (isFetching) {
    return (
      <header className={styles.main}>
        <FormDisabled option={option} />
      </header>
    );
  }
  return (
    <header className={styles.main}>
      <FormEnabled
        setIsFetching={setIsFetching}
        setGameStarted={setGameStarted}
        setImageURL={setImageURL}
        option={option}
        setOption={setOption}
        allImages={allImages}
      />
    </header>
  );
}
