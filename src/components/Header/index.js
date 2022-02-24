// import Container from 'components/Container'
import Navbar from 'components/Navbar'
import { HomePath } from 'core/Router'
import { createUseStyles } from 'react-jss'
import { useNavigate } from 'react-router-dom'
import style from './style'

const useStyles = createUseStyles(style)

export default function Header () {
  const classes = useStyles()

  const navigate = useNavigate()

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <span onClick={() => navigate(HomePath)}>MovieT.</span>
      </div>
      <Navbar />
    </div>
  )
}
