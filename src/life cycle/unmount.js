import React, { Component } from 'react';

class Unmount extends Component {
  constructor(){
    super();
    this.state= {
        showChild:true
    };
    console.log('In constructor')
  }


  handleDelete = () => {
    console.log("In handleDelete method")
    this.setState({ showChild: false });
  };

  render() {
    console.log("I render method")
    const { showChild } = this.state;

    return (
      <div>
        {showChild && <Child />}
        <button type="button" onClick={this.handleDelete}>
          Delete Child
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {

    console.log('The Child component is about to be unmounted.');
  }

  render() {
    console.log("In child render")
    return <h1>Hello World!</h1>;
  }
}

export default Unmount;
