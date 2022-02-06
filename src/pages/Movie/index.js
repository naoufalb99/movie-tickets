import Container from 'components/Container'
import DefaultLayout from 'components/DefaultLayout'
import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectMovies } from 'store/movies'
import style from './style'

const useStyles = createUseStyles(style)

export default function Movie () {
  const classes = useStyles()
  const { data } = useSelector(selectMovies)
  const { movieId } = useParams()

  const movie = data.find(({ id }) => id === movieId)

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
        </Container>
      </div>
    </DefaultLayout>
  )
}
