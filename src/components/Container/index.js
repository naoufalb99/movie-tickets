import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import style from './style'

const useStyles = createUseStyles(style)

export default function Container ({ className, children }) {
  const classes = useStyles()

  const classNames = clsx(classes.container, className)

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}
