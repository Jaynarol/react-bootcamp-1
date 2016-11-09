import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from '../reducers'
import NewTodo from '../containers/NewTodo'
import TodoList from '../containers/TodoList'

const initialState = {
    todoitems: [
        {id: 1, text: 'hello'},
        {id: 2, text: 'finish', completed: true}
    ]
}

const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())

const App = (
    <Provider store={store}>
        <div>
            <NewTodo />
            <TodoList />
        </div>
    </Provider>
)

export default App