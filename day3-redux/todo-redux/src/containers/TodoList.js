import TodoList from "../components/TodoList";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    todoitems: state.todoitems
})

export default connect(mapStateToProps)(TodoList)