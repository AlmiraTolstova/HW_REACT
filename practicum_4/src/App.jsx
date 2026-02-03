import "./App.css";
import PokemonList from "./components/pokemonList";
import MoviesDisplay from "./components/moviesDisplay";
import TravelCard from "./components/travelCard";

// Родительский компонент App, который содержит информацию о покемонах
// и передает ее дочернему компоненту PokemonList.
// PokemonList должен отображать имена и типы покемонов, используя компонент
// Pokemon, который также создается вами.

// Задание 2
// 	Создадим приложение для отображения списка фильмов.
// Каждый фильм в списке будет отображаться в виде карточки с названием
//  и годом выпуска.
// Шаги реализации:
// 1. Родительский компонент App должен содержать массив данных с фильмами,
// отправляет этот массив в дочерний компонент MoviesDisplay
// 2. Дочерний компонент MoviesDisplay должен получать массив фильмов
// через props и использовать метод map для отображения списка карточек
// фильмов через компонент MovieCard.
// 3. Компонент для каждого фильма MovieCard должен получать данные о конкретном
//  фильме через props и отображать название, год выпуска фильма.

function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 2, name: "Charmander", type: "Fire" },
    { id: 3, name: "Squirtle", type: "Water" },
    { id: 4, name: "Pikachu", type: "Electric" },
    { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
    { id: 6, name: "Gengar", type: "Ghost/Poison" },
    { id: 7, name: "Snorlax", type: "Normal" },
    { id: 8, name: "Mewtwo", type: "Psychic" },
    { id: 9, name: "Dragonite", type: "Dragon/Flying" },
    { id: 10, name: "Eevee", type: "Normal" },
  ];

  const movies = [
    { id: 1, title: "Inception", year: "2010" },
    { id: 2, title: "The Matrix", year: "1999" },
    { id: 3, title: "Interstellar", year: "2014" },
    { id: 4, title: "Pulp Fiction", year: "1994" },
    { id: 5, title: "Forrest Gump", year: "1994" },
    {
      id: 6,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: "2001",
    },
    {
      id: 7,
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: "1980",
    },
    { id: 8, title: "The Dark Knight", year: "2008" },
    { id: 9, title: "Fight Club", year: "1999" },
    { id: 10, title: "The Godfather", year: "1972" },
  ];

  const travelCardsData = [
    {
      name: "Мальдивы",
      description:
        "Тропический рай идеален для любителей дайвинга и спокойного отдыха.",
      imageUrl: "https://example.com/images/maldives.jpg",
      stats: {
        popularity: 9.5,
        accessibility: "Круглый год",
        climate: "Тропический",
        timeofday: "night",
      },
    },
    {
      name: "Исландия",
      description: "Страна вулканов, гейзеров и невероятных ландшафтов.",
      imageUrl: "https://example.com/images/iceland.jpg",
      stats: {
        popularity: 8.0,
        accessibility: "Лучше летом",
        climate: "Субарктический",
        timeofday: "dawn",
      },
    },
    {
      name: "Япония",
      description:
        "Смесь древней культуры и современных технологий с удивительной природой.",
      imageUrl: "https://example.com/images/japan.jpg",
      stats: {
        popularity: 9.2,
        accessibility: "Круглый год",
        climate: "Умеренный",
        timeofday: "midday",
      },
    },
    {
      name: "Новая Зеландия",
      description: "Дом для приключений на природе, от треккинга до каякинга.",
      imageUrl: "https://example.com/images/newzealand.jpg",
      stats: {
        popularity: 8.8,
        accessibility: "Круглый год",
        climate: "Умеренно-морской",
        timeofday: "dusk",
      },
    },
    {
      name: "Патагония (Аргентина)",
      description:
        "Рай для любителей треккинга и уединения на фоне монументальных гор.",
      imageUrl: "https://example.com/images/patagonia.jpg",
      stats: {
        popularity: 7.5,
        accessibility: "Лучше весной и осенью",
        climate: "Холодный",
        timeofday: "dusk",
      },
    },
  ];
  return (
    <div>
      <PokemonList pokemonData={pokemons} />
      <p>Задание 2:</p>
      <h1>Список фильмов</h1>
      <MoviesDisplay movies={movies} />
      <TravelCard />
    </div>
  );
}

export default App;
