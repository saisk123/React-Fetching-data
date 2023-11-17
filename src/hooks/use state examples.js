import React, { useState } from "react";

function HookCounter(){

    let initial = 0;
    const [count, setCount]=useState(initial)


    const [name,setName] =useState({ firstName:'', lastName:''})



    return (
        <>
        Count: {count}
        <br></br>
        {/* <button onClick={()=>setCount(count +1)}> Increment</button>
        <button onClick={()=>setCount(count -1)}> Decrement</button>
        <button onClick={()=>setCount(initial)}> Reset</button> */}
{/* 
        <button onClick={()=> setCount(initial)}>Reset</button>
        <button onClick={()=> setCount((prevCount) => prevCount +1)}>Increment</button>
        <button onClick={()=> setCount((prevCount) => prevCount -1)}>Decrement</button> */}

        <input type="text" placeholder="Enter first name" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>

        <input type="text" placeholder="Enter last name" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
        
        <p>Your first name is: {name.firstName}</p>
        <p>Your last name is: {name.lastName}</p>

        </>
    )
} 

export default HookCounter