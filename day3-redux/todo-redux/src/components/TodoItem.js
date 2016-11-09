import React, {PropTypes} from 'react'

const TodoItem = (props) => (
    <li onClick={() => props.toggleTodo(props.id)} className={props.completed ? 'complete' : null}>
        {props.text}
    </li>
)

export default TodoItem