import "./App.css";
import { Routes, Route, Navigate, Router, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Districts from "./pages/districts";
import District from "./pages/district";
import Place from "./pages/place";
import NotFound from "./pages/notFound";
import { useEffect } from "react";

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
        <Route path="districts" element={<Districts></Districts>}></Route>
        <Route
          path="districts/:districtId"
          element={<District></District>}
        ></Route>
        <Route
          path="districts/:districtId/places/:placeId"
          element={<Place></Place>}
        ></Route>
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
