import style from './style'
import { createUseStyles } from 'react-jss'
import Button from 'components/Button'

const useStyles = createUseStyles(style)

export default function Hero ({ children }) {
  const { hero, bg, inner, date, title, buttonContainer } = useStyles()

  return (
    <div className={hero}>
      <div className={bg} />
      <div className={inner}>
        <div className={date}>
          6 April 2022 - 8 June 2022
        </div>
        <h2 className={title}>The Witcher</h2>
        <div className={buttonContainer}>
          <Button>More info</Button>
          <Button backgroundColor='red' textColor='white'>Get tickets</Button>
        </div>
        {children}
      </div>
    </div>
  )
}
