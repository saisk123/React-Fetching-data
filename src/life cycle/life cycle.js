import React, { Component } from 'react';

class LifeCycleExample extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'Life Cycle Example class'
        };
        console.log(' In Constructor')
    }

    componentDidMount(){
        console.log('In componentDidMount method')
    }

    componentDidUpdate(pastProps, pastState){
        console.log('In componentDidUpdate method')
        // console.log('Past props:', pastProps,"     Present props:",this.props)
        console.log('past State:', pastState,"      Prestnt State: ",this.state)
    }

    componentWillUnmount(){
        console.log('In componentWillUnMount method')

    }

    updateMessage = () =>{
        console.log('updating the message')
        
        this.setState({message: 'Updated message'})
    };


    render(){
        console.log('In render')
        return (
            <>
            <h1 >{this.state.message}</h1>
            <button onClick={this.updateMessage}>Update</button>
            </>
        );
    }
}


export default LifeCycleExample