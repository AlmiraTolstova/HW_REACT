import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ArticleProvider } from "./components/articleProvider/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ArticleProvider>
      <App />
    </ArticleProvider>
  </BrowserRouter>,
);
