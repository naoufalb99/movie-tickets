import FormGroup from 'components/FormGroup'
import Input from 'components/Input'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function CheckoutPaymentForm () {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.title}>Payment Details</div>
      <div>
        <FormGroup label='Card Number'>
          <Input type='text' placeholder='Card number' />
        </FormGroup>
        <div className={classes.formGroup2Cols}>
          <FormGroup label='CVV Number'>
            <Input type='text' placeholder='CVV Number' />
          </FormGroup>
          <FormGroup label='Expiry Date'>
            <Input type='text' placeholder='Expiry Date' />
          </FormGroup>
        </div>
      </div>
    </div>
  )
}
