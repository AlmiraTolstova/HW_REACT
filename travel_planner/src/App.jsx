import "./App.css";
import { Routes, Route, Navigate, Router, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";

import Place from "./pages/place";
import NotFound from "./pages/notFound";
import { useEffect } from "react";
import Categories from "./pages/categories";
import Category from "./pages/category";
import Favorites from "./pages/favorites";

function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/");
    const currentLocation = path[path.length - 1];

    if (currentLocation === "") {
      document.title = "Home";
    } else {
      document.title = currentLocation;
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="categories" element={<Categories></Categories>}></Route>
        <Route
          path="categories/:categoryId"
          element={<Category></Category>}
        ></Route>
        <Route
          path="categories/:categoryId/places/:placeId"
          element={<Place></Place>}
        ></Route>
        <Route path="favorites" element={<Favorites></Favorites>}></Route>
        <Route
          path="home"
          element={<Navigate to="/" replace></Navigate>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
