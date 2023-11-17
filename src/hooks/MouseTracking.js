import React, { useEffect, useState } from "react";

function MouseTracking() {
    const [x,setX] = useState(0);
    const [y, setY] = useState(0);

    let position = e =>{
        console.log("Mouse function")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log('useEffect function')
        window.addEventListener('mousemove', position)
    }, [])

    return(
        <>
        <p>Mouse Position X:{x} Y:{y}</p>
        </>
    )
}

export default MouseTracking