import React, { Component } from "react";
import { Context } from "./Context";
import ChildC from "./Child";
import { Intermediate } from "./Intermediate";

class ParentC extends Component{
    constructor(){
        super()
        this.state={
            data: "Innova"
        }
    }

    render(){
        return(
            <>
            <p>In Parent render</p>
            <Context.Provider value={this.state.data}>
                <p> In Context Provider</p>
                <p> Before calling Intermediate</p>
                <Intermediate />
                <p> After calling intermediate</p>
            </Context.Provider>
            </>
        )
    }
}

export default ParentC;