import Header from 'components/Header'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function DefaultLayout ({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      {children}
    </div>
  )
}
