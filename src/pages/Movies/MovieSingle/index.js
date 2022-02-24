import { MoviePath } from 'core/Router'
import { pathParamsReplace } from 'helpers/routes'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import style from './style'

const useStyles = createUseStyles(style)

export default function MovieSingle ({ data: { id, image } }) {
  const classes = useStyles()

  const url = pathParamsReplace(MoviePath, { movieId: id })

  return (
    <Link to={url}>
      <div className={classes.movie} style={{ backgroundImage: `url('${image}')` }} />
    </Link>
  )
}
