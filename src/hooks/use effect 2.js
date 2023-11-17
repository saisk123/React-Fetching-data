import React, { useEffect, useState } from "react";

const HookExample =() =>{
    const [Message, setMessage] = useState("");

    useEffect(()=>{
        console.log("hook component did mount");
    },[])

    useEffect(()=>{

        return () => {
            console.log("hook component will unmount");
        }
    })

    useEffect(()=> {
        console.log("hook component did update");
    },[Message])

    const click = (event) =>{
        setMessage(event.target.value);
    }

    return (
        <>
        <h3>Hook useEffect</h3>
        <input type="text" value={Message} onChange={click}/>
        <p>Message : {Message}</p>
        </>
    )
}

export default HookExample;