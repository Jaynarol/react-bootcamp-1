import NewTodo from "../components/NewTodo";
import {connect} from "react-redux";
import {addTodo} from "../actions/todoitem";

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(NewTodo)