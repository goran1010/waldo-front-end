import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { useRef } from "react";
import styles from "../styles/Image.module.css";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className={styles.control}>
      <button className={styles.button} onClick={() => zoomIn()}>
        Zoom In
      </button>
      <button className={styles.button} onClick={() => zoomOut()}>
        Zoom Out
      </button>
      <button className={styles.button} onClick={() => resetTransform()}>
        Reset Zoom
      </button>
    </div>
  );
};

export default function Image({ imageURL }) {
  const imageRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const image = imageRef.current;
    if (!image) return;

    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    console.log(
      `Clicked at: X=${xPercent.toFixed(2)}%, Y=${yPercent.toFixed(2)}%`
    );
  };

  return (
    <div onDoubleClick={handleClick} className={styles.container}>
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
