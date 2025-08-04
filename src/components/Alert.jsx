import styles from "../styles/Alert.module.css";

export default function Alert({ alert, setAlert, setClientPos }) {
  return (
    <div className={styles.container}>
      {alert.status === 400 ? (
        <div className={styles.card}>
          <p>{alert.result} is not at those coordinates !</p>
          <button
            className={styles.button}
            onClick={() => {
              setAlert(null);
              setClientPos(null);
            }}
          >
            OK
          </button>
        </div>
      ) : (
        <div className={styles.card}>
          <p>Congratulations you found {alert.result} !</p>
          <button
            className={styles.button}
            onClick={() => {
              setAlert(null);
              setClientPos(null);
            }}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}
