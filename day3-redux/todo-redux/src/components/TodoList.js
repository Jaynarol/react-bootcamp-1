import React, {PropTypes} from 'react'
import TodoItem from '../containers/TodoItem'

const TodoList = (props) => (
    <ul>
        {props.todoitems.map((todo) => <TodoItem key={todo.id} id={todo.id} {...todo} />)}
    </ul>
)

export default TodoList