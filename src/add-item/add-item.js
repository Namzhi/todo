import { Component } from "react";


export default class AddItem extends Component {
    state = {
        label: ''
    }
    onChangeText = (e) => {
        this.setState( {
            label: e.target.value
            
        } )
        
        
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addExtraItem(this.state.label)
        this.setState({
            label: ''
        }
        )
    }
    
render() {
    return (
        <form onSubmit={this.onSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autofocus
                    onChange={this.onChangeText}
                    value = {this.state.label}
                    />
                </form>
    )
}
}