import Button from 'components/Button'
import Container from 'components/Container'
import DefaultLayout from 'components/DefaultLayout'
import { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectCartMovieById } from 'store/cart'
import { fetchMovieAction, selectMovie } from 'store/movie'
import MovieSchedule from './MovieSchedule'
import style from './style'

const useStyles = createUseStyles(style)

export default function Movie () {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { movieId } = useParams()
  const { data: movie } = useSelector(selectMovie)
  const cartMovie = useSelector(selectCartMovieById(movieId))

  useEffect(() => {
    dispatch(fetchMovieAction(movieId))
  }, [movieId])

  if (!movie) return null

  return (
    <DefaultLayout>
      <div className={classes.wrapper} style={{ backgroundImage: `url('${movie.image}')` }}>
        <Container>
          <h2 className={classes.title}>{movie.title}</h2>
          <div className={classes.people}>
            <div className={classes.profile}>
              <h4>Bong Joon-ho</h4>
              <p>Director, Screenplay</p>
            </div>
            <div className={classes.profile}>
              <h4>Kelly Masterson</h4>
              <p>Screenplay</p>
            </div>
          </div>
          <div className={classes.date}>
            6 April 2022 - 8 June 2022
          </div>
          <div className={classes.schedules}>
            {movie.schedules.map((item) => (<MovieSchedule key={item.dayTimestamp} data={item} />))}
          </div>
        </Container>
        {cartMovie !== undefined && (
          <div className={classes.nextBar}>
            <Container className={classes.nextBarContainer}>
              <Button backgroundColor='red' textColor='white'>Continue</Button>
            </Container>
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}
