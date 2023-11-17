import React, { useEffect, useState } from "react";

function UseEffectHook(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // useEffect(()=>{
    //     document.title= `You clicked ${count} times`
    // })

    useEffect(()=>{
        console.log("Updating")
        document.title= `You clicked ${count} times`
    },[count])

    return (
        <>
            <input value={name} type="text" onChange={(e)=> setName(e.target.value)}/>
            <button onClick={()=> setCount(count + 1)}>Clicked {count} times</button>
            <br></br>
            <p>clicked {count} times</p>
        </>
    )
}

export default UseEffectHook;