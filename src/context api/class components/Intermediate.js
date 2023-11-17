import React, { Component } from "react";
import ChildC from "./Child";

export class Intermediate extends Component{

    render(){
        return(
            <>
            <p> before calling Child</p>
            <ChildC/>
            <p> after calling child</p>
            </>
        )
    }
}
