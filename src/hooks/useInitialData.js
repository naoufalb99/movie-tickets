import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMoviesAction } from 'store/movies'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMoviesAction())
  }, [])
}
