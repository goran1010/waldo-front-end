import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useRef, useState } from "react";
import styles from "../styles/Image.module.css";
import Select from "./Select";
import RestartGame from "./RestartGame";
import Controls from "./Controls";
import Alert from "./Alert";
import GameWon from "./GameWon";

export default function Image({
  image,
  setGameStarted,
  setImage,
  allImages,
  user,
}) {
  const imageRef = useRef(null);
  const [clientPos, setClientPos] = useState(null);
  const [coorPos, setCoorPos] = useState(null);
  const [alert, setAlert] = useState(null);
  const [gameWon, setGameWon] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    if (clientPos) {
      return;
    }
    const newImage = imageRef.current;
    if (!newImage) return;

    const rect = newImage.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    setCoorPos({ x: xPercent, y: yPercent });

    setClientPos({ clientX, clientY });
  };

  return (
    <div onDoubleClick={handleClick} className={styles.container}>
      {alert && <Alert alert={alert} setAlert={setAlert} />}
      {gameWon && <GameWon gameWon={gameWon} setGameWon={setGameWon} />}
      {clientPos && (
        <Select
          clientPos={clientPos}
          setClientPos={setClientPos}
          coorPos={coorPos}
          image={image}
          user={user}
          setAlert={setAlert}
          setGameWon={setGameWon}
        />
      )}
      <TransformWrapper
        initialScale={1}
        minScale={1}
        limitToBounds={true}
        doubleClick={{ disabled: true }}
      >
        {/* eslint-disable-next-line no-unused-vars */}
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <Controls />

            <RestartGame
              setGameStarted={setGameStarted}
              setImage={setImage}
              allImages={allImages}
            />
            <TransformComponent>
              <img
                ref={imageRef}
                src={image.URL}
                alt="Where's Waldo image"
                style={{
                  maxWidth: "100vw",
                  display: "block",
                  maxHeight: "100vh",
                }}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
