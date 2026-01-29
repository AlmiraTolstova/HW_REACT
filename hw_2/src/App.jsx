import "./App.css";
import Greeting from "./components/greeting";
import OrderStatus from "./components/orderStatus";
import ShoppingList from "./components/shoppingList";

// Задание 3 *

// Компонент Статуса Заказа

// В компоненте App определите массив,
//  содержащий информацию о заказах в формате
// [{orderId: 123, status: ‘в пути’}].

// Создайте компонент OrderStatus который принимает два пропа:
//  orderId (номер заказа) и status
// (статус заказа, например, "обработан", "в пути",
//  "доставлен").

// Компонент должен отображать информацию в следующем формате:
//  "Заказ #[orderId]: [status]".

// Импортируйте компонент в App, проверьте его работоспособ

function App() {
  const shoppingItems = ["apple", "banana", "pinapple", "orange", "lemon"];
  const ordersInfo = [
    { orderId: 123, status: "в пути" },
    { orderId: 13, status: "ожидание оплаты" },
    { orderId: 2123, status: "обработан" },
    { orderId: 113, status: "доставлено" },
    { orderId: 613, status: "отменено" },
  ];

  return (
    <>
      <h2>Задание 1</h2>
      <Greeting name="Almira" />
      <h2>Задание 2</h2>
      <ShoppingList items={shoppingItems} />
      <h2>Задание 3</h2>
      {ordersInfo.map((order, index) => {
        return (
          <OrderStatus
            key={index}
            orderId={order.orderId}
            status={order.status}
          />
        );
      })}
    </>
  );
}

export default App;
