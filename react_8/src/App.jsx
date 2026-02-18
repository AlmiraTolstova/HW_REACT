import "./App.css";
import EventsComponent from "./components/eventsComponent";
import ImageCarousel from "./components/imageCarousel";
import Form from "./components/form";

// Задание 2
// 1.	Создайте новый функциональный компонент EventsComponent
// 2.	Компонент должен возвращать пять тегов <h1>
// 3.	Первый тег должен реагировать на клик
// 4.	Второй тег должен реагировать на двойной клик
// 5.	Третий тег должен реагировать на нажатие и отжатие кнопки мыши
// 6.	Четвертый тег должен реагировать на наведение и отведение курсора
// 7.	Пятый тег должен реагировать на вождение по нему курсором
// 8.	Каждый тег в ответ на событие должен отправлять сообщение в консоль.
// 9.	Запустите приложение, проверьте результат

const imageUrls = [
  "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206233_68-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-69.jpg",
  "https://vip-1gl.ru/vipberrrt/10423beautiful_scenery_wallpaper.jpg",
  "https://www.superiorwallpapers.com/water/wonderful-landscape-nature-mountain-river_5120x3200.jpg",
];

function App() {
  const sayHello = (event) => {
    console.log(event);
    console.log(number);
    console.log("Hello world!");
  };

  const items = ["first", "second", "third"];
  const handleClick = (element) => {
    console.log("Selected element: ", element);
  };

  return (
    <>
      <button onClick={(event) => sayHello(event, 56)}>Click me</button>
      <ul>
        {items.map((element, index) => {
          return (
            <li key={index} onClick={() => handleClick(element)}>
              {element}
            </li>
          );
        })}
      </ul>
      <EventsComponent />
      <ImageCarousel />
      <Form />
    </>
  );
}

export default App;
