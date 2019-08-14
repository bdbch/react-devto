import { useEffect, useState } from "react";

import { IArticlesResponse, IPost } from "..";

/**
 * Returns a list of articles
 * @param page filter articles by pagination
 * @param tag filter articles by tag
 * @param username receive articles by username
 */
export default function useArticles(
  page?: string,
  tag?: string,
  username?: string
): IArticlesResponse {
  const [articles, setArticles] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let apiUrl = "https://dev.to/api/articles?";
    const params = [];

    if (page) params.push(`page=${page}`);
    if (tag) params.push(`tag=${tag}`);
    if (username) params.push(`username=${username}`);
    apiUrl += params.join("&");

    setLoading(true);
    setError(undefined);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setArticles(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }, [page, tag, username]);

  return {
    articles,
    loading,
    error
  };
}
