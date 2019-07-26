import { useEffect, useState } from "react";

import { ITag, ITagsResponse } from "..";

export default function useTags(page?: number): ITagsResponse {
  const [tags, setTags] = useState<ITag[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let apiUrl = "https://dev.to/api/tags?";

    if (page) apiUrl += `page=${page}`;

    setLoading(true);
    setError(undefined);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setTags(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }, [page]);

  return {
    tags,
    loading,
    error
  };
}
