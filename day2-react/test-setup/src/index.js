import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const Hello = (props) =>(
  <div>
    <h1>Hello</h1>
    <h2>{ props.children }</h2>
	<hr />
	<Link to='/' >Home</Link> | <Link to='/Jaynarol' >Jaynarol</Link>
  </div>
)

const EveryOne = () =>(
  <div>EveryOne</div>
)

const YourName = (props) =>(
  <div>{ props.params.yourName }</div>
)

const App = () => (
  <Router history={ browserHistory }>
    <Route path='/' component={ Hello }>
        <IndexRoute component={ EveryOne } />
        <Route path=':yourName' component={ YourName } />
     </Route>
  </Router>
)
ReactDOM.render(<App />, document.getElementById('react-root'))