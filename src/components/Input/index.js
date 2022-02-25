import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function Input ({ type = 'text', ...props }) {
  const classes = useStyles()

  return <input type={type} className={classes.input} {...props} />
}
