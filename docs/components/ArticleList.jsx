import React, { useState, useCallback } from "react";
import { useArticles } from "../../src";
import Article from "./Article";
import "./ArticleList.css";

const ArticleList = () => {
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState(null);
  const [usernameValue, setUsernameValue] = useState("");
  const [username, setUsername] = useState("");
  const { articles, loading, error } = useArticles(page, tag, username);

  const updateUsername = useCallback(e => {
    e.preventDefault();
    setPage(1);
    setTag(null);
    setUsername(usernameValue);
  });

  return (
    <div className="ArticleList">
      <div className="ArticleList--Header">
        <form onSubmit={updateUsername}>
          <input
            type="text"
            placeholder="Search articles from users"
            onChange={e => setUsernameValue(e.target.value)}
            value={usernameValue}
          />
        </form>
      </div>
      <div class="ArticleList--List">
        {articles.map(article => (
          <div class="ArticleList--Item" key={article.id}>
            <Article article={article} />
          </div>
        ))}
      </div>
      <div className="ArticleList--Pagination">
        <button type="button" onClick={() => setPage(page - 1)}>
          Previous Page
        </button>
        <button type="button" onClick={() => setPage(page + 1)}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ArticleList;
