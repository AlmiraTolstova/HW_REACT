import styles from "./styles.module.css";

function TeamCard(props) {
  const { name, members } = props;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <ul className={styles.list}>
        {members.map(function (member, index) {
          return (
            <li key={index} className={styles.member}>
              {member}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeamCard;
