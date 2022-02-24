import clsx from 'clsx'
import { formatMovieDate } from 'helpers/date'
import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addMovieAction, selectCartMovieById } from 'store/cart'
import style from './style'

const useStyles = createUseStyles(style)

function MovieScheduleButton ({ value, selected, onScheduleSelected }) {
  const classes = useStyles()

  return (
    <button
      className={clsx(classes.hoursItem, selected && classes.hoursItemSelected)}
      onClick={() => onScheduleSelected(value)}
    >{value}
    </button>
  )
}

export default function MovieSchedule ({ data }) {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { movieId } = useParams()
  const cartMovie = useSelector(selectCartMovieById(movieId))

  const {
    dayOfMonth,
    dayName,
    monthName
  } = formatMovieDate(data.dayTimestamp)

  const handleScheduleSelected = (time) => {
    dispatch(addMovieAction(movieId, data.dayTimestamp, time, data.price))
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.date}>
        <div>{dayName}</div>
        <div className={classes.day}>{dayOfMonth}</div>
        <div>{monthName}</div>
      </div>
      <div className={classes.hours}>
        {data.times.map((time) => (
          <MovieScheduleButton
            key={time}
            value={time}
            onScheduleSelected={handleScheduleSelected}
            selected={cartMovie?.dayTimestamp === data.dayTimestamp && cartMovie?.time === time}
          />))}
      </div>
    </div>
  )
}
