import { Provider as ReduxProvider } from 'react-redux'
import store from 'store'
import style from './style'
import { createUseStyles } from 'react-jss'
import Router from 'core/Router'

const useStyles = createUseStyles(style)

export default function App () {
  useStyles()

  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  )
}
