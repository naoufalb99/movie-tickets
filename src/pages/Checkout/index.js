import Container from 'components/Container'
import DefaultLayout from 'components/DefaultLayout'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import { createReservationAction, selectCart, selectCreateReservation } from 'store/cart'
import CartOverview from './CartOverview'
import CheckoutClientForm from './CheckoutClientForm'
import style from './style'
import emptyCart from 'assets/images/empty-cart.png'
import Button from 'components/Button'
import ui from 'constants/ui'
import { useNavigate } from 'react-router-dom'
import { MoviesPath, ThankYouPath } from 'core/Router'
import { Formik, Form } from 'formik'
import formValidationSchema from './validation'
import { useEffect } from 'react'

// import CheckoutPaymentForm from './CheckoutPaymentForm'

const useStyles = createUseStyles(style)

const formInitialValues = {
  firstName: 'Naoufal',
  lastName: 'Bidari',
  email: 'naoufalb99@gmail.com',
  phone: '0658340895'
}

export default function Checkout () {
  const classes = useStyles()

  const disptach = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector(selectCart)
  const { data: reservation, isLoading } = useSelector(selectCreateReservation)

  const handleSubmit = (values) => {
    disptach(createReservationAction(values))
  }

  const cartIsEmpty = Object.keys(cart?.movies).length === 0

  useEffect(() => {
    if (reservation !== null) { navigate(ThankYouPath) }
  }, [reservation])

  return (
    <DefaultLayout>
      <Container className={classes.container}>
        {cartIsEmpty
          ? <EmptyCard />
          : (
            <>
              <h2 className={classes.title}>Checkout Page</h2>
              <div className={classes.inner}>
                <div>
                  <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={formValidationSchema}
                    validateOnBlur
                  >
                    <Form>
                      <CheckoutClientForm />
                      {/* <CheckoutPaymentForm /> */}
                      <div className={classes.submitButton}>
                        <Button type='submit' backgroundColor={ui.ACCENT_COLOR} textColor='white'>
                          {isLoading ? 'Loading...' : 'Reserve now'}
                        </Button>
                      </div>
                    </Form>
                  </Formik>
                </div>
                <div>
                  <CartOverview />
                </div>
              </div>
            </>)}
      </Container>
    </DefaultLayout>
  )
}

function EmptyCard () {
  const classes = useStyles()

  const navigate = useNavigate()

  return (
    <div className={classes.emptyCart}>
      <img className={classes.emptyCartImage} src={emptyCart} />
      <div className={classes.emptyCartTitle}>
        Oops! Your cart is empty!
      </div>
      <div className={classes.emptyCartCaption}>
        <div>Looks like you haven't added</div>
        <div>anything to your cart yet</div>
      </div>
      <Button backgroundColor={ui.ACCENT_COLOR} textColor='white' onClick={() => navigate(MoviesPath)}>Browse movies</Button>
    </div>
  )
}
