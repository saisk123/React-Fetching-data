import React, { Component } from "react";
import Child from './Child';

class Parent extends Component{
    constructor(){
        super()
        this.state= {
            message: "Parent"
        }
        this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage = (value) =>{
        this.setState({message:value})
    }

    render(){
        return(
            <div>
                <h1>Parent : {this.state.message}</h1>
                <Child changeMessage={this.changeMessage}/>
            </div>
        )
    }
}

export default Parent