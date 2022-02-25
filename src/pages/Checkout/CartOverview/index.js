import { formatMovieDate } from 'helpers/date'
import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux'
import { selectCart } from 'store/cart'
import { selectMovies } from 'store/movies'
import style from './style'

const useStyles = createUseStyles(style)

export default function CartOverview () {
  const classes = useStyles()

  const cart = useSelector(selectCart)
  const { data: movies } = useSelector(selectMovies)

  const cartMovies = Object.entries(cart?.movies)

  if (!movies || movies.length === 0) return null

  return (
    <div className={classes.container}>
      <div className={classes.title}>Cart summary</div>
      <div className={classes.cartItems}>
        {cartMovies.map(([id, { dayTimestamp, time }]) => (
          <CartItem
            key={id}
            ticketInfo={{ dayTimestamp, time }}
            movie={movies.find(({ id: movieId }) => movieId === id)}
          />))}
      </div>
      <div className={classes.totalPrice}>
        <div>Total Price</div>
        <div>{cart.price} Dhs</div>
      </div>
    </div>
  )
}

function CartItem ({ movie, ticketInfo }) {
  const classes = useStyles()

  const { dayTimestamp, time } = ticketInfo

  const movieDate = formatMovieDate(dayTimestamp)

  return (
    <div className={classes.cartItem}>
      <img className={classes.cartItemImage} src={movie.image} />
      <div>
        <div className={classes.cartItemTitle}>
          {movie.title}
        </div>
        <div className={classes.cartItemDate}>
          {movieDate.dayOfMonth} {movieDate.monthName} at {time}
        </div>
        <div className={classes.cartItemPrice}>
          {movie.price} Dhs
        </div>
      </div>
    </div>
  )
}
