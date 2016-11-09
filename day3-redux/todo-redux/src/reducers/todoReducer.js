import { ADD_TODO, TOGGLE_TODO } from '../actions/types'

const initialState = []

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:{

            const newTodo = {
                id: state.length + 1,
                text: action.payload.text,
                completed: false
            }

            return [
                ...state,
                newTodo
            ]

        }

        case TOGGLE_TODO:{
            return state.map(todo=>(todo.id === action.payload.id)?{
                id: todo.id,
                text: todo.text,
                completed: !todo.completed
            }: todo )
        }

        default: {
            return state
        }
    }
}



export default todoReducer