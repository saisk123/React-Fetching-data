import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state= {
            message: "Welcome User"
        }
        this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage(){
        this.setState({message:"Login success"})
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button type='button' onClick={this.changeMessage}>Login</button>
            </div>
        )
    }
}

export default Message