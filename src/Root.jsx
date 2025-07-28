import { useState } from "react";
import StartGame from "./components/StartGame";
import Image from "./components/Image";

function Root() {
  const [gameStarted, setGameStarted] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  if (!gameStarted) {
    return (
      <>
        <StartGame setGameStarted={setGameStarted} setImageURL={setImageURL} />
      </>
    );
  }
  return (
    <>
      <Image imageURL={imageURL} />
    </>
  );
}
export default Root;
