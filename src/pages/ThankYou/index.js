import Button from 'components/Button'
import DefaultLayout from 'components/DefaultLayout'
import { HomePath, MoviesPath } from 'core/Router'
import { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetCartAction, selectCreateReservation } from 'store/cart'
import style from './style'

const useStyles = createUseStyles(style)

export default function ThankYou () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const reservation = useSelector(selectCreateReservation)

  useEffect(() => {
    if (reservation.data === null) {
      navigate(HomePath)
    }
  }, [reservation])

  useEffect(() => {
    return () => dispatch(resetCartAction())
  }, [])

  return (
    <DefaultLayout>
      <div className={classes.container}>
        <div className={classes.title}>Merci {reservation?.data?.firstName} !</div>
        <div className={classes.reservationID}>Votre numéro de réservation est #{reservation?.data?.id}</div>
        <p>Pour confirmer votre réservation vous devez procéder au paiement dans l'une de nos agences.</p>
        <div className={classes.moreButtonWrapper}>
          <Button backgroundColor='red' textColor='white' onClick={() => navigate(MoviesPath)}>More movies</Button>
        </div>
      </div>
    </DefaultLayout>
  )
}
