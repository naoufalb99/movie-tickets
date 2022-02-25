import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function CheckoutClientForm () {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.title}>Client Details</div>
      <div>
        <input type='text' placeholder='First name' />
        <input type='text' placeholder='Last name' />
      </div>
    </div>
  )
}
