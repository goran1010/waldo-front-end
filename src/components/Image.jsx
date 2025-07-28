import { useState } from "react";
import styles from "../styles/Image.module.css";

export default function Image({ imageURL }) {
  const [zoomed, setZoomed] = useState(false);

  function handleZoom(e) {
    e.preventDefault();
    setZoomed(!zoomed);
  }

  return (
    <div className={styles.container}>
      <img
        className={`${styles.img} ${zoomed ? styles.zoomed : ""}`}
        src={imageURL}
        alt="Where's Waldo image"
        onContextMenu={handleZoom}
      />
    </div>
  );
}
