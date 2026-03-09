import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleContext from "../../context/articleContext";

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articles } = useContext(ArticleContext);

  const article = articles.find((a) => a.id === Number(id));

  return (
    <div className="container">
      <div className="article-page">
        <h1>{article.title}</h1>
        <p>{article.text}</p>

        <button
          className="back-btn"
          onClick={() => {
            navigate("/articleslist");
          }}
        >
          Back to the List
        </button>
      </div>
    </div>
  );
}
export default ArticlePage;
