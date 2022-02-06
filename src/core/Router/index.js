import useInitialData from 'hooks/useInitialData'
import Home from 'pages/Home'
import Movie from 'pages/Movie'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router () {
  useInitialData()

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HomePath} element={<Home />} />
        <Route path={MoviePath} element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

export const HomePath = '/'
export const MoviePath = '/movies/:movieId'
