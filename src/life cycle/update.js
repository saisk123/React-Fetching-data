import React, { Component } from 'react';

class Update extends Component {
  constructor(props) {
    console.log("In Constructor")
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate( prevState) {
    console.log("In componentDidUpdate method")
    if (prevState.count !== this.state.count) {
      console.log('Component updated.   New count:', this.state.count);
    }
  }

  increment = () => {
    this.setState({count:this.state.count+1});
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Update;
