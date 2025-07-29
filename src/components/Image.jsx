import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useRef } from "react";

export default function ClickableImage({ imageURL }) {
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
    <div
      onDoubleClick={handleClick}
      style={{ maxWidth: "100vw", maxHeight: "100vh" }}
    >
      <TransformWrapper
        initialScale={1}
        minScale={1}
        limitToBounds={true}
        doubleClick={{ disabled: true }}
      >
        <TransformComponent>
          <img
            ref={imageRef}
            src={imageURL}
            alt="Where's Waldo image"
            style={{ maxWidth: "100vw", display: "block", maxHeight: "100vh" }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
