import React, { useEffect, useState } from 'react';

function Fetching(){

  const [userData, setData] = useState([])
  const [newName, setNewName] =useState('');

  useEffect(()=>{
    console.log("Fetching started")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) =>{
      setData(data);
    })
    .catch((error) => {
      console.log("Error fetching data: ", error);
    })

    return (
      console.log("Fetching closed")
    );
  },[]);


  useEffect(() => {
    console.log('Adding user')

  },[userData])

  add =() =>{
    if(newName === ''){
      alert("Enter something")
    }
    else if( userData.find(user => user.name === newName)){
      alert("Duplicate name")
    }
    else{
      setData((previousData) => [...previousData , {name: newName}])
      setNewName('')
    }
  }




  return (
    <>
    <h1>Users</h1>
    {userData.map((user)=><p >Name : {user.name} </p>)}

    <input type='text' placeholder='Enter name' value={newName} onChange={e => setNewName(e.target.value)}/>
    <button onClick={add}> Add User</button>
    </>
  )
}

export default Fetching;