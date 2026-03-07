export const initialCategories = [
  {
    id: "parks",
    name: "Парки",
    icon: "🌳",
    places: [
      {
        id: "gorky",
        name: "Парк Горького",
        description: "Центральный парк культуры и отдыха",
        image: "🌲",
        todos: [
          { id: 1, text: "Покататься на велосипеде", completed: false },
          { id: 2, text: "Покормить уток на пруду", completed: true },
          { id: 3, text: "Посетить Нехорошую квартиру", completed: false },
        ], // будут загружаться позже
      },
      {
        id: "sokolniki",
        name: "Сокольники",
        description: "Большой парк для прогулок и спорта",
        image: "🍃",
        todos: [
          { id: 1, text: "Покататься на лыжах", completed: false },
          { id: 2, text: "Посетить розарий", completed: false },
        ],
      },
    ],
  },
  {
    id: "museums",
    name: "Музеи",
    icon: "🏛️",
    places: [
      {
        id: "tretyakov",
        name: "Третьяковская галерея",
        description: "Главный музей русского искусства",
        image: "🎨",
        todos: [
          { id: 1, text: "Посмотреть Черный квадрат", completed: false },
          { id: 2, text: "Купить сувениры", completed: true },
        ],
      },
    ],
  },
  {
    id: "restaurants",
    name: "Рестораны",
    icon: "🍽️",
    places: [
      {
        id: "pushkin",
        name: "Кафе Пушкинъ",
        description: "Исторический ресторан русской кухни",
        image: "🥟",
        todos: [
          { id: 1, text: "Попробовать борщ", completed: false },
          { id: 2, text: "Забронировать столик", completed: true },
          { id: 3, text: "Оставить чаевые", completed: false },
        ],
      },
    ],
  },
];

export const todosData = {
  gorky: [
    { id: 1, text: "Покататься на велосипеде", completed: false },
    { id: 2, text: "Покормить уток на пруду", completed: true },
    { id: 3, text: "Посетить Нехорошую квартиру", completed: false },
  ],
  sokolniki: [
    { id: 1, text: "Покататься на лыжах", completed: false },
    { id: 2, text: "Посетить розарий", completed: false },
  ],
  tretyakov: [
    { id: 1, text: "Посмотреть Черный квадрат", completed: false },
    { id: 2, text: "Купить сувениры", completed: true },
  ],
  pushkin: [
    { id: 1, text: "Попробовать борщ", completed: false },
    { id: 2, text: "Забронировать столик", completed: true },
    { id: 3, text: "Оставить чаевые", completed: false },
  ],
};
