import {toggleTodo} from "../actions/todoitem";
import {connect} from "react-redux";
import TodoItem from "../components/TodoItem";

export default connect(null, {toggleTodo})(TodoItem)