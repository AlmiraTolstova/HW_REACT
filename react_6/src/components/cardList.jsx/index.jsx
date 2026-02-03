import styles from "./styles.module.css";
import TeamCard from "../teamCard";

function CardList(props) {
  const { teams } = props;

  return (
    <div className={styles.list}>
      {teams.map(function (team, index) {
        return <TeamCard key={index} name={team.name} members={team.members} />;
      })}
    </div>
  );
}

export default CardList;
