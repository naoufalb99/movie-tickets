import Button from 'components/Button'
import Container from 'components/Container'
import DefaultLayout from 'components/DefaultLayout'
import { CheckoutPath } from 'core/Router'
import { useLayoutEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectCartMovieById } from 'store/cart'
import { fetchMovieAction, selectMovie } from 'store/movie'
import MovieSchedule from './MovieSchedule'
import style from './style'

const useStyles = createUseStyles(style)

export default function Movie () {
  const navigate = useNavigate()
  const classes = useStyles()

  const dispatch = useDispatch()

  const { movieId } = useParams()
  const { data: movie, isLoading } = useSelector(selectMovie)
  const cartMovie = useSelector(selectCartMovieById(movieId))

  useLayoutEffect(() => {
    dispatch(fetchMovieAction(movieId))
  }, [movieId])

  const nextBarEnabled = cartMovie !== undefined

  if (!movie || isLoading) return null

  return (
    <DefaultLayout>
      <div className={classes.wrapper} style={{ backgroundImage: `url('${movie.image}')` }}>
        <Container>
          <h2 className={classes.title}>{movie.title}</h2>
          <div className={classes.people}>
            {
              movie.people.map(({ fullName, jobTitle }) => (
                <div key={fullName} className={classes.profile}>
                  <h4>{fullName}</h4>
                  <p>{jobTitle}</p>
                </div>
              ))
            }
          </div>
          <div className={classes.date}>
            {movie.dateStart} - {movie.dateEnd}
          </div>
          <div className={classes.schedules}>
            {movie.schedules.map((item) => (<MovieSchedule key={item.dayTimestamp} data={item} price={movie.price} />))}
          </div>
        </Container>
        {nextBarEnabled && (
          <div className={classes.nextBar}>
            <Container className={classes.nextBarContainer}>
              <Button backgroundColor='red' textColor='white' onClick={() => navigate(CheckoutPath)}>Buy Ticket
                <span className={classes.price}>{movie.price} Dhs</span>
              </Button>
            </Container>
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}
