import {
  useState,
  useEffect
} from 'react'

export default function useTags(page) {
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let apiUrl = 'https://dev.to/api/tags?'
    const params = []

    if (page) apiUrl += `page=${page}`

    setLoading(true)
    setError(false)
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setTags(data)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })

  }, [page])

  return {
    tags,
    loading,
    error
  }
}
