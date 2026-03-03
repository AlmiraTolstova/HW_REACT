import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleContext from "../../context/articleContext";

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articles } = useContext(ArticleContext);

  return (
    <div>
      <h1> {articles[id].title}</h1>
      <p>{articles[id].text}</p>
      <button
        onClick={() => {
          navigate("/articleslist");
        }}
      >
        Back to the List
      </button>
    </div>
  );
}
export default ArticlePage;
