import Container from 'components/Container'
import DefaultLayout from 'components/DefaultLayout'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default function UnderConstruction () {
  const classes = useStyles()

  return (
    <DefaultLayout>
      <Container className={classes.container}>
        <h2 className={classes.title}>Under Construction</h2>
      </Container>
    </DefaultLayout>
  )
}
