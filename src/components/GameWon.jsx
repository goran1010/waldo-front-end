import { useState } from "react";
import styles from "../styles/GameWon.module.css";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function GameWon({ gameWon, setGameWon, setScore }) {
  const [username, setUsername] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  async function handleScore(e) {
    e.preventDefault();
    const response = await fetch(`${VITE_URL}/api/solutions`, {
      mode: "cors",
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: gameWon.userId,
        imageId: gameWon.imageId,
        username,
      }),
    });
    const result = await response.json();

    setScore(result);
    setGameWon(null);
  }
  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleScore}>
        <p>
          Congratulations you found all characters in {gameWon.score} seconds !
        </p>
        <div>
          <label htmlFor="username">Your username: </label>
          <input
            name="username"
            type="text"
            id="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <button type="submit" className={styles.button}>
          See Leaderboard
        </button>
      </form>
    </div>
  );
}
