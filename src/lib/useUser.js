import {
  useState,
  useCallback
} from 'react'

export default function useUser(username, id) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useCallback(() => {
    if ((username && username.length > 0) || (id && id.length > 0)) {
      const apiUrl = (id && id.length > 0) ? `https://dev.to/api/users/${id}` : `https://dev.to/api/users/by_username?url=${username}`

      setError(null)
      setLoading(true)
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setUser(data)
        })
        .catch(err => {
          setLoading(false)
          setError(err)
        })
    }
  }, [user, loading, error])

  return {
    user,
    loading,
    error
  }
}
