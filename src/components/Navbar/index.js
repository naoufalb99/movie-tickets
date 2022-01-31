import { createUseStyles } from 'react-jss'

import style from './style'

const useStyles = createUseStyles(style)

export default function Navbar () {
  const classes = useStyles()

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li><a href='#'>Whats'on</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Venue Here</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
  )
}
