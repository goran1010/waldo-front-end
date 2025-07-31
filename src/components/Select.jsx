export default function Select({ clientPos }) {
  if (!clientPos) return null;

  const boxWidth = 20;
  const boxHeight = 50;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "25",
        cursor: "default",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: clientPos.clientY - boxHeight / 2,
          left: clientPos.clientX - boxWidth / 2,
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
          border: "2px solid red",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      ></div>
    </div>
  );
}
