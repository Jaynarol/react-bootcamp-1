import TodoList from "../components/TodoList";
import {connect} from "react-redux";
import {toggleTodo} from "../actions/todoitem";

const mapStateToProps = (store) => ({
    todoitems: store.todoitems,
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)