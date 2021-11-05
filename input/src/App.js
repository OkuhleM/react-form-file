import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           username: " ",
           List: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.username]: event.target.value
           });
    }

handleSubmit(event){
    console.log("username");
    console.log("password")
event.preventDefault();
const newItems = {username:this.state.username};
this.setState({
    ...this.state.List
})
console.log(newItems)
}

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <label>username:</label>
                <input type="text" value={this.props.username} onChange={this.handleChange} name="username"></input>
               
                <button >Submit</button>
            </form>
        )
    }
}



export default Form;