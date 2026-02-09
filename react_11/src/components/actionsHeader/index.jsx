import styles from "./styles.module.css";

function ActionsHeader({ actions }) {
  return (
    <div className={styles.actions}>
      {actions.map((action, index) => (
        <button
          key={index}
          className={`${styles.button} ${styles[action.type]}`}
          onClick={action.onClick}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}

export default ActionsHeader;
