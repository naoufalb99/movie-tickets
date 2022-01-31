// import Container from 'components/Container'
import Button from 'components/Button'
import DefaultLayout from 'components/DefaultLayout'
import { createUseStyles } from 'react-jss'
import Hero from './Hero'
import MoviesList from './MoviesList'

import style from './style'

const useStyles = createUseStyles(style)

export default function Home () {
  const classes = useStyles()

  return (
    <DefaultLayout>
      <Hero>
        <MoviesList />
        <div className={classes.more}>
          <Button backgroundColor='red' textColor='white'>More movies</Button>
        </div>
      </Hero>
    </DefaultLayout>
  )
}
