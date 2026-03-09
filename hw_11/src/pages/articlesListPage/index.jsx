import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ArticleContext from "../../context/articleContext";

function ArticleListPage() {
  const { articles } = useContext(ArticleContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="container">
      <h1>Страница списка статей</h1>

      <ul className="article-list">
        {articles.map((item) => {
          return (
            <li className="article-item" key={item.id}>
              {item.title}

              <button
                onClick={() => {
                  handleClick(item.id);
                }}
              >
                Read
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ArticleListPage;
