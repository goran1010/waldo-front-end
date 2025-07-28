import { useState } from "react";
import StartGame from "./components/StartGame";

function Root() {
  const [gameStarted, setGameStarted] = useState(false);

  if (!gameStarted) {
    return (
      <>
        <StartGame setGameStarted={setGameStarted} />
      </>
    );
  }
  return <></>;
}
export default Root;
