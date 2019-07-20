import {
  useState,
  useEffect
} from 'react'

export default function useFollowSuggestions() {
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let apiUrl = 'https://dev.to/api/users/?state=follow_suggestions'

    setLoading(true)
    setError(false)
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setSuggestions(data)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })

  }, [])

  return {
    suggestions,
    loading,
    error
  }
}
