// 1.	Определение начальных данных: Составьте массив URL-адресов изображений, которые вы хотите отображать в карусели. Эти URL-адреса будут использоваться для загрузки и отображения изображений.
// 2.	Создание компонента React: Начните с создания нового функционального компонента. Определите его в файле, например ImageCarousel.jsx.
// 3.	Инициализация состояния: Используйте хук useState для инициализации состояния, которое будет отслеживать текущий индекс показываемого изображения из вашего массива.
// 4.	Написание функции для переключения изображений: Создайте функцию в вашем компоненте, которая будет изменять индекс текущего изображения каждый раз при нажатии на кнопку. Убедитесь, что индекс циклически обновляется и не выходит за границы вашего массива изображений.
// 5.	Рендеринг изображения и кнопки: В разметке вашего компонента добавьте элемент img для отображения текущего изображения и кнопку, которая при нажатии будет вызывать вашу функцию для смены изображения.
// 6.	Применение стилей: Добавьте стили для управления внешним видом элементов вашего компонента, чтобы сделать его более привлекательным. Вы можете использовать CSS или инлайн-стили в зависимости от ваших предпочтений.
// 7.	Тестирование компонента: Интегрируйте компонент карусели изображений в ваше приложение React и протестируйте его работу. Убедитесь, что изображения корректно изменяются в цикле и что интерфейс отвечает на действия пользователя.
import { useState } from "react";
const imageUrls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRIB3cNp_gFwFN4t1buXyKJasmDrgyo1usA&s",
  "https://resizer.mail.ru/p/83d19422-24b8-5029-b6a1-03f6d5ab833d/AQAKicb7PDARmxIZscHVVqgTlI3dy-dd2HlwDvWixW-VbJMEy7OTKzZ4W2Jk-MN_EapFTQCrKL4fnNqcOiQImpB5-B4.jpg",
];

function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={imageUrls[currentImageIndex]}
        alt="html image"
        style={{ width: "300px", height: "300px" }}
      />
      <button
        onClick={handleClick}
        style={{
          border: "1px solid green",
          borderRadius: "10px",
          height: "70px",
          width: "200px",
        }}
      >
        Next image
      </button>
    </div>
  );
}

export default ImageCarousel;
