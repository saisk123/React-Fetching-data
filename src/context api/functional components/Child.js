import React, { Component, useContext } from "react";
import { Context } from "./Context";

const ChildF =() =>{
    const data = useContext(Context);

    return (
        <>
        <p>In child</p>
        <p>Printing context value</p>
        <p>{data[0]}  , {data[1]}</p>
        </>
    )
}

export default ChildF;