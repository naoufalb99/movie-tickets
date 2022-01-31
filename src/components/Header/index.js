// import Container from 'components/Container'
import Navbar from 'components/Navbar'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function Header () {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <span>MovieT.</span>
      </div>
      <Navbar />
    </div>
  )
}
