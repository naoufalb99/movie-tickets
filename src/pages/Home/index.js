// import Container from 'components/Container'
import Button from 'components/Button'
import DefaultLayout from 'components/DefaultLayout'
import { MoviesPath } from 'core/Router'
import { createUseStyles } from 'react-jss'
import { useNavigate } from 'react-router-dom'
import Hero from './Hero'
import MoviesList from './MoviesList'

import style from './style'

const useStyles = createUseStyles(style)

export default function Home () {
  const classes = useStyles()

  const navigate = useNavigate()

  return (
    <DefaultLayout>
      <Hero>
        <MoviesList />
        <div className={classes.more}>
          <Button backgroundColor='red' textColor='white' onClick={() => navigate(MoviesPath)}>More movies</Button>
        </div>
      </Hero>
    </DefaultLayout>
  )
}
