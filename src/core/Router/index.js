import useInitialData from 'hooks/useInitialData'
import Checkout from 'pages/Checkout'
import Home from 'pages/Home'
import Movie from 'pages/Movie'
import Movies from 'pages/Movies'
import ThankYou from 'pages/ThankYou'
import UnderConstruction from 'pages/UnderConstruction '
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router () {
  useInitialData()

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HomePath} element={<Home />} />
        <Route path={MoviesPath} element={<Movies />} />
        <Route path={MoviePath} element={<Movie />} />
        <Route path={CheckoutPath} element={<Checkout />} />
        <Route path={ThankYouPath} element={<ThankYou />} />
        <Route path={UnderConstructionPath} element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  )
}

export const HomePath = '/'
export const MoviesPath = '/movies'
export const MoviePath = '/movies/:movieId'
export const CheckoutPath = '/checkout'
export const ThankYouPath = '/thank-you'
export const UnderConstructionPath = '/under-construction'
