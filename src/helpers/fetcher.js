import { BASE_API_URL } from 'constants/api'

export default async function fetcher (url, { method, body } = { method: 'GET' }) {
  const response = await window.fetch(`${BASE_API_URL}${url}`, {
    method,
    body: JSON.stringify(body)
  })

  return response.json()
}
