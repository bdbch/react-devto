import { useEffect, useState } from "react";

import { IFollowSuggestionsResponse, IUser } from "..";

/**
 * returns follow suggestions for new users
 */
export default function useFollowSuggestions(): IFollowSuggestionsResponse {
  const [suggestions, setSuggestions] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let apiUrl = "https://dev.to/api/users/?state=follow_suggestions";

    setLoading(true);
    setError(undefined);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setSuggestions(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return {
    suggestions,
    loading,
    error
  };
}
