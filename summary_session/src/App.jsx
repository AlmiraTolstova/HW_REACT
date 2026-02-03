// import "./App.css";
// import Form from "./components/form";

// function App() {
//   //spread ...
//   const arr = [1, 2, 3];
//   console.log([...arr, 4]);
//   //rest ...
//   function sum(num1, num2, ...rest) {
//     const result = rest.reduce((acc, el) => {
//       return acc + el;
//     }, 0);

//     console.log(result + num1 + num2);
//   }

//   sum(1, 10, 3, 4, 6, 82, 9);

//   return (
//     <div>
//       <Form titleColor={"blue"} formTitle={"Register"} />
//       <Form titleColor={"green"} formTitle={"Login"} />
//       <Form name="sdv" />
//     </div>
//   );
// }
// export default App;

import "./App.css";
import FlexBox from "./components/flexbox";
import Menu from "./components/menu";

// Входные данные:
// Массив данных о блюдах в меню
// [
//       { id: 1, name: "Garlic Bread", description: "Classic garlic bread, with a hint of herbs.", price: 5 },
//       { id: 2, name: "Soup of the Day", description: "A delicious way to start your meal.", price: 7 },
//       { id: 3, name: "Grilled Salmon", description: "Fresh salmon that's grilled to perfection.", price: 15 },
//       { id: 4, name: "Steak", description: "High-quality beef with our special sauce.", price: 18 },
//       { id: 5, name: "Cheesecake", description: "Creamy cheesecake with a crispy base.", price: 6 },
//       { id: 6, name: "Ice Cream", description: "Choose from our variety of flavors.", price: 4 },
// ];
// В родительском компоненте App определите массив блюд, отправьте данные
//  о блюдах в компонент Menu.
// Дочерний компонент Menu должен получать массив блюд через props,
//  использовать метод map для отображения блюд внутри через компонент
// MenuItem.
// Компонент для отображения блюда MenuItem должен получать данные о блюде
//  через props и отображать название, описание и цену блюда.
// Запустите приложение, проверьте результат.

function App() {
  const dishes = [
    {
      id: 1,
      name: "Garlic Bread",
      description: "Classic garlic bread, with a hint of herbs.",
      price: 5,
    },
    {
      id: 2,
      name: "Soup of the Day",
      description: "A delicious way to start your meal.",
      price: 7,
    },
    {
      id: 3,
      name: "Grilled Salmon",
      description: "Fresh salmon that's grilled to perfection.",
      price: 15,
    },
    {
      id: 4,
      name: "Steak",
      description: "High-quality beef with our special sauce.",
      price: 18,
    },
    {
      id: 5,
      name: "Cheesecake",
      description: "Creamy cheesecake with a crispy base.",
      price: 6,
    },
    {
      id: 6,
      name: "Ice Cream",
      description: "Choose from our variety of flavors.",
      price: 4,
    },
  ];
  return (
    <div>
      <FlexBox>
        <Button title="Register" />
        <p>blablabla</p>
        <Button title="Login" />
        <Button title="JKBJhbjhvbjhvbjh" />
      </FlexBox>

      <h1>Menu</h1>
      <Menu dishes={dishes} />
    </div>
  );
}
// function FlexBox(props) {
//   return <div>{props.children}</div>;
// }
function Button({ title }) {
  return <button>{title}</button>;
}
export default App;
