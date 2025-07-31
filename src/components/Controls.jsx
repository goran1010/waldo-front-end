import styles from "../styles/Image.module.css";
import { useControls } from "react-zoom-pan-pinch";

export default function Controls() {
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
}
