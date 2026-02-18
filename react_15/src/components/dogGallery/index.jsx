import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function DogGallery() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // загрузка одной собаки
  const loadDog = async () => {
    const response = await axios.get(API_URL);
    return response.data.message;
  };

  // первая загрузка (3 собаки)
  useEffect(() => {
    const loadInitialDogs = async () => {
      try {
        setIsLoading(true);
        const result = await Promise.all([loadDog(), loadDog(), loadDog()]);
        setDogs(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialDogs();
  }, []);

  // добавить одну собаку
  const addDog = async () => {
    try {
      setIsAdding(true);
      const dog = await loadDog();
      setDogs((prev) => [...prev, dog]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAdding(false);
    }
  };

  // обновить всех собак
  const refreshDogs = async () => {
    try {
      setIsRefreshing(true);
      const result = await Promise.all(dogs.map(() => loadDog()));
      setDogs(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // очистить всё
  const clearDogs = () => {
    setDogs([]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Галерея собак 🐶</h2>
      <p>Загружено собак: {dogs.length}</p>

      <button onClick={addDog} disabled={isAdding}>
        {isAdding ? "Загрузка..." : "Добавить собаку"}
      </button>

      <button
        onClick={refreshDogs}
        disabled={isRefreshing || dogs.length === 0}
        style={{ marginLeft: 10 }}
      >
        {isRefreshing ? "Загрузка..." : "Обновить всё"}
      </button>

      <button onClick={clearDogs} style={{ marginLeft: 10 }}>
        Очистить все
      </button>

      <hr />

      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {dogs.map((dog, index) => (
            <img key={index} src={dog} alt="dog" width="200" />
          ))}
        </div>
      )}
    </div>
  );
}

export default DogGallery;
