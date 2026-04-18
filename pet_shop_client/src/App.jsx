import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import CategoriesPage from "./pages/categoriesPage";
import AllProductsPage from "./pages/allProductsPage";
import AllSalesPage from "./pages/allSalesPage";
import BasketPage from "./pages/basketPage";
import NotFoundPage from "./pages/notFoundPage";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/categoriespage"
            element={<CategoriesPage></CategoriesPage>}
          ></Route>
          <Route
            path="/allproductspage"
            element={<AllProductsPage></AllProductsPage>}
          ></Route>
          <Route path="/allsalespage" element={<AllSalesPage />}></Route>
          <Route path="/basketpage" element={<BasketPage />}></Route>
          <Route path="/notfoundpage" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
