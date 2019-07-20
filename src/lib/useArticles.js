import {
  useState,
  useEffect
} from 'react'

export default function useArticles(page, tag, username) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let apiUrl = 'https://dev.to/api/articles?'
    const params = []

    if (page) params.push(`page=${page}`)
    if (tag) params.push(`tag=${tag}`)
    if (username) params.push(`username=${username}`)
    apiUrl += params.join('&')

    setLoading(true)
    setError(false)
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setArticles(data)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })

  }, [page, tag, username])

  return {
    articles,
    loading,
    error
  }
}
