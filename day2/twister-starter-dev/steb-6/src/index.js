import React from 'react'
import ReactDOM from 'react-dom'
import BodyContainer from './components/BodyContainer'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'

const App = () => (
  <BodyContainer />
)
ReactDOM.render(<App />, document.getElementById('react-root'))