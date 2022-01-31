import { MoviePath } from 'core/Router'
import { pathParamsReplace } from 'helpers/routes'
import { createUseStyles } from 'react-jss'
import MovieSingle from '../MovieSingle'

import style from './style'

const useStyles = createUseStyles(style)

export default function MoviesList () {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <MovieSingle url={pathParamsReplace(MoviePath, { movieId: 1 })} />
      <MovieSingle url='/' />
      <MovieSingle url='/' />
      <MovieSingle url='/' />
      <MovieSingle url='/' />
    </div>
  )
}
