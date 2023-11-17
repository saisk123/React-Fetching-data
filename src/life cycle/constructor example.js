import { Component } from "react";

class ConstructorExample extends Component{
    constructor(props){
        super(props)
        this.state ={
            count:0
        };
        console.log('Inside the Constructor');
    }

    render(){
        return <p>Count : {this.state.count}</p>
    }
}

export default ConstructorExample;