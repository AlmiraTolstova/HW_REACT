import { useState } from "react";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },

    { id: 2, name: "Мария", age: 22 },

    { id: 3, name: "Алексей", age: 21 },

    { id: 4, name: "Марина", age: 19 },

    { id: 5, name: "Даша", age: 23 },

    { id: 6, name: "Глеб", age: 24 },

    { id: 7, name: "Дима", age: 18 },

    { id: 8, name: "Гриша", age: 20 },

    { id: 9, name: "Серафим", age: 21 },
  ]);

  function deletePerson(id) {
    let tempList = people.filter((item) => {
      return item.id !== id;
    });
    setPeople(tempList);
  }

  return (
    <div>
      <ul>
        {people.map((item, index) => {
          return (
            <li key={index}>
              {item.name + " " + item.age}{" "}
              <button
                onClick={() => {
                  deletePerson(item.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
