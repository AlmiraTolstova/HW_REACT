export const districtsData = [
  {
    id: "center",
    name: "Центральный район",
    description: "Исторический центр города с архитектурными памятниками",
    places: [
      {
        id: "park",
        name: "Городской парк",
        description:
          "Красивый парк с фонтаном и вековыми деревьями. Отличное место для прогулок и отдыха.",
        image: "🏞️",
      },
      {
        id: "museum",
        name: "Краеведческий музей",
        description:
          "История города с древних времен до наших дней. Более 5000 экспонатов.",
        image: "🏛️",
      },
      {
        id: "theater",
        name: "Драматический театр",
        description: "Главная сцена города, где проходят спектакли и концерты.",
        image: "🎭",
      },
    ],
  },
  {
    id: "north",
    name: "Северный район",
    description: "Современный спальный район с развитой инфраструктурой",
    places: [
      {
        id: "lake",
        name: "Голубое озеро",
        description:
          "Живописное озеро с чистой водой. Место для отдыха и рыбалки.",
        image: "🏖️",
      },
      {
        id: "mall",
        name: 'Торговый центр "Север"',
        description: "Крупнейший торгово-развлекательный комплекс района.",
        image: "🛍️",
      },
    ],
  },
  {
    id: "south",
    name: "Южный район",
    description: "Промышленный район с интересными историческими объектами",
    places: [
      {
        id: "factory",
        name: "Старая фабрика",
        description:
          "Памятник промышленной архитектуры XIX века. Сейчас здесь музей и арт-пространство.",
        image: "🏭",
      },
      {
        id: "station",
        name: "Железнодорожный вокзал",
        description: "Красивое здание в стиле модерн, построенное в 1910 году.",
        image: "🚂",
      },
    ],
  },
];

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
        todos: [], // будут загружаться позже
      },
      {
        id: "sokolniki",
        name: "Сокольники",
        description: "Большой парк для прогулок и спорта",
        image: "🍃",
        todos: [],
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
        todos: [],
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
        todos: [],
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
