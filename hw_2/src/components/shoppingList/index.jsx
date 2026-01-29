function ShoppingList({ items }) {
  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : (
        <p>Список покупок пуст</p>
      )}
    </div>
  );
}

export default ShoppingList;
