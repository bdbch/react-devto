import { useCallback, useState } from "react";

import { IUser, IUserResponse } from "..";

/**
 * returns a dev.to user by either the username or id
 * @param username the users username
 * @param id the users id
 */
export default function useUser(username?: string, id?: string): IUserResponse {
  const [user, setUser] = useState<IUser | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useCallback(() => {
    if ((username && username.length > 0) || (id && id.length > 0)) {
      const apiUrl =
        id && id.length > 0
          ? `https://dev.to/api/users/${id}`
          : `https://dev.to/api/users/by_username?url=${username}`;

      setError(undefined);
      setLoading(true);
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          setUser(data);
        })
        .catch(err => {
          setLoading(false);
          setError(err);
        });
    }
  }, [user, loading, error]);

  return {
    user,
    loading,
    error
  };
}
