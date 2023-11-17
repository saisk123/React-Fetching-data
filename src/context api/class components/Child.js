import React, { Component } from "react";
import { Context } from "./Context";

class ChildC extends Component{
    render(){
        return (
            <>
            <p> before Context consumer</p>
            <Context.Consumer>
                {contextValue => (
                    <div>
                        <p>Printing context value</p>
                        <p>{contextValue}</p>
                    </div>
                )}
            </Context.Consumer>
            <p> after context consumer</p>
            </>
        )
    }
}

export default ChildC;