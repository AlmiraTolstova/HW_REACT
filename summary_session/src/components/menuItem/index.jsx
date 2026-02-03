function MenuItem({ dish }) {
  return (
    <div>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <p>Price:${dish.price}</p>
    </div>
  );
}
export default MenuItem;
