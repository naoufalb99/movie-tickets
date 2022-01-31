import { createUseStyles } from 'react-jss'

import style from './style'

const useStyles = createUseStyles(style)

export default function Container ({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}
