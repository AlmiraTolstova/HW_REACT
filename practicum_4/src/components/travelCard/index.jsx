import DestinationImage from "../distinationImage";
import DestinationStats from "../distinationStats";
import DestinationInfo from "../distinationInfo";

function TravelCard() {
  return (
    <div>
      <DestinationImage name={cardInfo.name} imageUrl={cardInfo.imageUrl} />
      <DestinationStats stats={cardInfo.stats} />
    </div>
  );
}
export default TravelCard;
