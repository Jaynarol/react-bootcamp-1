import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './style.css'

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default
        store.replaceReducer(nextRootReducer)
    })
}

ReactDOM.render(App, document.getElementById('react-root'))