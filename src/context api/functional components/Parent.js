import React, { Component, useState } from "react";
import { Context } from "./Context";
import { IntermediateF } from "./Intermediate";

const ParentF =() => {
    const [data, setDate] = useState(["Innova","India"]);
    // const [data, setDate] = useState({
    //     company: "Innova",
    //     location: "India"
    // });


    return (
        <>
        <Context.Provider value={data}>
        {/* <Context.Provider value={{company, location}}> */}
            <p> In parent</p>
            <IntermediateF/>
        </Context.Provider>
        </>
    )
}

export default ParentF;