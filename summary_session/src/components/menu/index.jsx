import MenuItem from "../menuItem";
function Menu({ dishes }) {
  return (
    <div>
      {dishes.map((dish) => (
        <MenuItem key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
export default Menu;
