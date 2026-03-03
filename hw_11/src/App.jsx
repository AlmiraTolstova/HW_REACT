import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ArticleListPage from "./pages/articlesListPage";
import ArticlePage from "./pages/articlePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route
          path="/articleslist"
          element={<ArticleListPage></ArticleListPage>}
        ></Route>
        <Route path="/article" element={<ArticlePage></ArticlePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
