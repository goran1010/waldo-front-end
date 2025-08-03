import { Fragment, useState } from "react";
import StartGame from "./components/StartGame";
import Image from "./components/Image";
import waldoInBattle from "./assets/waldo-in-battle.jpeg";
import waldoInTown from "./assets/waldo-in-town.jpeg";
import waldoShopping from "./assets/waldo-shopping.jpeg";

function Root() {
  const allImages = [
    { id: 1, URL: waldoInBattle },
    { id: 2, URL: waldoInTown },
    { id: 3, URL: waldoShopping },
  ];
  const [gameStarted, setGameStarted] = useState(false);
  const [image, setImage] = useState(allImages[0]);
  const [user, setUser] = useState(null);

  if (!gameStarted) {
    return (
      <>
        <StartGame
          setGameStarted={setGameStarted}
          setImage={setImage}
          allImages={allImages}
          user={user}
          setUser={setUser}
          image={image}
        />
        <Image image={image} />
      </>
    );
  }
  return (
    <>
      <Image
        image={image}
        setGameStarted={setGameStarted}
        setImage={setImage}
        allImages={allImages}
        user={user}
        setUser={setUser}
      />
    </>
  );
}
export default Root;
