import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import style from './style'

const useStyles = createUseStyles(style)

export default function MovieSingle ({ url }) {
  const classes = useStyles()

  return (
    <Link to={url}>
      <div className={classes.movie} />
    </Link>
  )
}
