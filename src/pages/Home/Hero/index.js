import style from './style'
import { createUseStyles } from 'react-jss'
import Button from 'components/Button'
import { useSelector } from 'react-redux'
import { selectMovies } from 'store/movies'
import { useNavigate } from 'react-router-dom'
import { MoviePath } from 'core/Router'
import { pathParamsReplace } from 'helpers/routes'

const useStyles = createUseStyles(style)

export default function Hero ({ children }) {
  const classes = useStyles()

  const navigate = useNavigate()

  const { data } = useSelector(selectMovies)
  const heroMovie = data?.[0]

  if (!heroMovie) return null

  const moviePath = pathParamsReplace(MoviePath, { movieId: heroMovie.id })

  return (
    <div className={classes.hero}>
      <div
        className={classes.bg} style={{
          backgroundImage: `url(${heroMovie.image})`
        }}
      />
      <div className={classes.inner}>
        <div className={classes.date}>
          {heroMovie.dateStart} - {heroMovie.dateEnd}
        </div>
        <h2 className={classes.title}>{heroMovie.title}</h2>
        <div className={classes.buttonContainer}>
          <Button onClick={() => navigate(moviePath)}>More info</Button>
          <Button backgroundColor='red' textColor='white' onClick={() => navigate(moviePath)}>Get tickets</Button>
        </div>
        {children}
      </div>
    </div>
  )
}
