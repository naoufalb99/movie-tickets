import Container from 'components/Container'
import DefaultLayout from 'components/DefaultLayout'
import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux'
import { selectCart } from 'store/cart'
import CartOverview from './CartOverview'
import CheckoutClientForm from './CheckoutClientForm'
import style from './style'
import emptyCart from 'assets/images/empty-cart.png'
import Button from 'components/Button'
import ui from 'constants/ui'
import { useNavigate } from 'react-router-dom'
import { MoviesPath } from 'core/Router'
import CheckoutPaymentForm from './CheckoutPaymentForm'

const useStyles = createUseStyles(style)

export default function Checkout () {
  const classes = useStyles()

  const navigate = useNavigate()
  const cart = useSelector(selectCart)

  const cartIsEmpty = Object.keys(cart?.movies).length === 0

  return (
    <DefaultLayout>
      <Container className={classes.container}>
        {cartIsEmpty
          ? (
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
            </div>)
          : (
            <>
              <h2 className={classes.title}>Checkout Page</h2>
              <div className={classes.inner}>
                <div>
                  <CheckoutClientForm />
                  <CheckoutPaymentForm />
                  <div className={classes.submitButton}>
                    <Button backgroundColor={ui.ACCENT_COLOR} textColor='white' onClick={() => navigate(MoviesPath)}>Confirm And Pay</Button>
                  </div>
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
