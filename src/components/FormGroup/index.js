import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function FormGroup ({ children, label }) {
  const classes = useStyles()

  return (
    <div className={classes.formGroup}>
      <label>
        <span className={classes.label}>{label}</span>
        {children}
      </label>
    </div>
  )
}
