import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux'
import { selectMovies } from 'store/movies'
import MovieSingle from '../MovieSingle'

import style from './style'

const useStyles = createUseStyles(style)

export default function MoviesList () {
  const classes = useStyles()

  const { data } = useSelector(selectMovies)

  return (
    <div className={classes.container}>
      {
       data.slice(1, 6).map((item) => <MovieSingle key={item.id} data={item} />)
      }
    </div>
  )
}
