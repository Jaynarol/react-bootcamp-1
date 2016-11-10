import React, {PropTypes} from 'react'
import TodoItem from '../components/TodoItem'

const TodoList = (props) => (
    <ul>
        {props.todoitems.map((todo) => <TodoItem key={todo.id} toggleTodo={props.toggleTodo} {...todo} />)}
    </ul>
)

export default TodoList