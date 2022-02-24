import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import style from './style'

const useStyles = createUseStyles(style)

const NAVBAR_LINKS = [
  {
    title: 'Whats\'on',
    to: '/movies'
  },
  {
    title: 'About Us',
    to: '/under-construction'
  },
  {
    title: 'Venue Here',
    to: '/under-construction'

  },
  {
    title: 'Contact',
    to: '/under-construction'
  }
]

export default function Navbar () {
  const classes = useStyles()

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        {NAVBAR_LINKS.map(({ title, to }) => (
          <li key={title}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive && to !== '/under-construction' ? classes.activeLink : undefined}
            >{title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
