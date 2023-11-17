import React, { Component } from "react";
import PComponent from './PComponent';
import RegComponent from './RegComponent';

class ParentComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'Sai'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Sa'
            })
        },3000)
    }

    render(){
        console.log("*    Parent Component    *")
        return(
            <div>
                Parent Component
                <RegComponent name={this.state.name}></RegComponent>
                <PComponent name={this.state.name}></PComponent>
            </div>
        )
    }
}

export default ParentComponent;