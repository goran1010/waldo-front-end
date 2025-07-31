import { Fragment, useState } from "react";
import StartGame from "./components/StartGame";
import Image from "./components/Image";
import waldoInBattle from "./assets/waldo-in-battle.jpeg";
import waldoInTown from "./assets/waldo-in-town.jpeg";
import waldoShopping from "./assets/waldo-shopping.jpeg";

function Root() {
  const allImages = [waldoInBattle, waldoInTown, waldoShopping];
  const [gameStarted, setGameStarted] = useState(false);
  const [imageURL, setImageURL] = useState(allImages[0]);

  if (!gameStarted) {
    return (
      <>
        <StartGame
          setGameStarted={setGameStarted}
          setImageURL={setImageURL}
          allImages={allImages}
        />
        <Image imageURL={imageURL} />
      </>
    );
  }
  return (
    <main>
      <Image
        imageURL={imageURL}
        setGameStarted={setGameStarted}
        setImageURL={setImageURL}
        allImages={allImages}
      />
    </main>
  );
}
export default Root;
