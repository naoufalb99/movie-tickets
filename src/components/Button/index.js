import { createUseStyles } from 'react-jss'

import style from './style'

const useStyles = createUseStyles(style)

export default function Button ({ children, backgroundColor, textColor, ...props }) {
  const { button } = useStyles({ backgroundColor, textColor })

  return (
    <button className={button} {...props}>
      {children}
    </button>
  )
}
