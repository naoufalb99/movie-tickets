import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { worker } from 'mocks'

worker.start()
ReactDOM.render(<App />, document.getElementById('root'))
