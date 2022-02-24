import Container from 'components/Container'
import DefaultLayout from 'components/DefaultLayout'
import MoviesList from './MoviesList'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function Movies () {
  const classes = useStyles()

  return (
    <DefaultLayout>
      <Container className={classes.container}>
        <h2 className={classes.title}>Now Playing Movies</h2>
        <MoviesList />
      </Container>
    </DefaultLayout>
  )
}
