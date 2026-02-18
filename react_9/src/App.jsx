import { useState } from "react";
import NoteForm from "./components/noteForm";
import NoteList from "./components/noteList";
import ColorForm from "./components/colorForm";

// Откройте файл App.js.
// Импортируйте хук useState из библиотеки React.
// В компоненте, используйте useState для создания состояния color, которое будет хранить текущий цвет фона.
// Создайте функцию updateColor, которая принимает новый цвет и обновляет состояние color.
// Внутри JSX компонента App, добавьте стили для вертикального и горизонтального выравнивания содержимого и установите фон, используя текущее состояние color.
// Импортируйте компонент Form и передайте ему функцию updateColor через пропсы.
// Создайте новый файл Form.jsx в той же директории.
// Импортируйте useState так же, как и в App.js.
// Создайте функциональный компонент Form.
// Определите состояние newColor для хранения значения цвета, выбранного пользователем.
// Напишите функцию handleChange, которая обновляет newColor на основе выбора пользователя.
// Реализуйте функцию handleSubmit, которая предотвращает стандартное поведение формы, и вызывает colorFunction переданную через пропсы из App.js, передавая ей newColor.
// Добавьте элементы управления формой: поле ввода для выбора цвета и кнопку для отправки формы.
// Добавьте базовую стилизацию для формы. Установите дисплей flex и направление столбца.
// Назначьте размеры для поля ввода, чтобы упростить выбор цвета.
// Сохраните все изменения.
// В терминале запустите приложение, выполнив команду npm start.
// В браузере откроется ваше приложение. Попробуйте изменить цвет через созданный интерфейс и убедитесь, что цвет фона изменяется соответственно.

function App() {
  const [notes, setNotes] = useState([]);

  console.log(notes);

  const [color, setColor] = useState("#ffffff");

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <NoteForm setNotes={setNotes} notes={notes} />
      <NoteList notes={notes} />

      <div
        style={{
          backgroundColor: color,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ColorForm colorFunction={updateColor} />
      </div>
    </div>
  );
}
export default App;
