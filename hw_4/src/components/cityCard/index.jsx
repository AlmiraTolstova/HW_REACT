function CityCard({ img_link, description, facts }) {
  return (
    <div>
      <img src={img_link}></img>
      <p>{description}</p>
      <p>{facts}</p>
    </div>
  );
}
export default CityCard;
