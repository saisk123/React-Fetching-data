import React, { Component } from "react";
class Fetching extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      users: [],
      newName: ""
    };
  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        this.setState({
          users: data
        });
      })
      .catch((error) => {
        console.error("Error feching data", error);
      });
  }
 
  componentDidUpdate() {
    console.log("Successfully Updated");
  }
 
  add = () => {
 
    if(this.state.newName === ''){
      alert("Enter something")
    }
    else if( this.state.users.find(user => user.name === this.state.newName)){
      alert("Duplicate name")
    }
    else{
 
      this.setState((pre) => ({
      users: [...pre.users, {  name: this.state.newName }],
      newName:''
      }))
    }
  }
 
  onChange =(e) =>{
    this.setState({newName: e.target.value});
  }
 
  render() {
    return (
      <div>
        <h1> Users </h1>
 
        {this.state.users.map((user) => (
          <p >Name : {user.name} </p>
        ))}
 
        <input type="text" placeholder="Enter name" value={this.state.newName} onChange={this.onChange}/>
 
        <button onClick={this.add} > Add user </button>
      </div>
    );
  }
}
 
export default Fetching;
 