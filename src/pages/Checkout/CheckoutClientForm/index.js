import FormGroup from 'components/FormGroup'
import Input from 'components/Input'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function CheckoutClientForm () {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.title}>Client Details</div>
      <div>
        <div className={classes.formGroup2Cols}>
          <FormGroup label='First name'>
            <Input type='text' placeholder='First name' />
          </FormGroup>
          <FormGroup label='Last name'>
            <Input type='text' placeholder='Last name' />
          </FormGroup>
        </div>
        <FormGroup label='E-mail'>
          <Input type='email' placeholder='E-mail' />
        </FormGroup>
        <FormGroup label='Phone'>
          <Input type='text' placeholder='Phone' />
        </FormGroup>
        {/* <Button backgroundColor='red' textColor='white'>More movies</Button> */}
      </div>
    </div>
  )
}
