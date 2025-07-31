import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useRef, useState } from "react";
import styles from "../styles/Image.module.css";
import Select from "./Select";
import RestartGame from "./RestartGame";
import Controls from "./Controls";

export default function Image({
  imageURL,
  setGameStarted,
  setImageURL,
  allImages,
}) {
  const imageRef = useRef(null);
  const [clientPos, setClientPos] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const image = imageRef.current;
    if (!image) return;

    const rect = image.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setClientPos({ clientX, clientY });

    console.log(`Clicked at: clientX=${clientX}, clientY=${clientY}`);

    console.log(
      `Clicked at: X=${xPercent.toFixed(2)}%, Y=${yPercent.toFixed(2)}%`
    );
  };

  return (
    <div onDoubleClick={handleClick} className={styles.container}>
      {clientPos && <Select clientPos={clientPos} />}
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
              setImageURL={setImageURL}
              allImages={allImages}
            />
            <TransformComponent>
              <img
                ref={imageRef}
                src={imageURL}
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
