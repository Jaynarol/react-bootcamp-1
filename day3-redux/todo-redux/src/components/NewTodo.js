import React, {Component} from 'react'

class NewTodo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
        this.addHandler = this.addHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(event){
        this.setState({
            text: event.target.value
        })
    }

    addHandler(){
        this.props.addTodo(this.state.text)
        this.setState({
            text: ''
        })
    }

    render(){
        return (
            <div>
                <input onChange={this.changeHandler} value={this.state.text} />
                <button onClick={this.addHandler}>Add</button>
            </div>
        )
    }

}

export default NewTodo