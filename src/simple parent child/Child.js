import React, { Component } from "react";

class Child extends Component{
    constructor(props){
        super(props)

        this.clicking= this.clicking.bind(this);
    }
    
    clicking(){
        this.props.changeMessage("Child");
    }

    render(){
        return(
            <div>
                <button type='button' onClick={this.clicking}>Updating parent</button>
            </div>
        )
    }
}

export default Child