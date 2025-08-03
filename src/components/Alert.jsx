export default function Alert({ alert, setAlert }) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "99",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "red" }}>
        {alert.status === 400 ? (
          <div>
            <p>{alert.result} is not at those coordinates !</p>
            <button
              onClick={() => {
                setAlert(null);
              }}
            >
              OK
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
