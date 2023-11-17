import React, { Component } from "react";

class RegComponent extends Component{
    render(){
        console.log("Reg Component ")
        return(
            <div>
                RegComponent {this.props.name}
            </div>
        )
    }
}

export default RegComponent;