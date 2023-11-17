import React, { useContext } from "react";
import { ThemeContext } from "./Context";

const Title =() =>{
    const [theme, changeTheme] =useContext(ThemeContext);
    return (
        <>
        <div>
            <h3>Theme changing</h3>
            <button onClick={changeTheme}> Change Theme </button>
        </div>
        </>
    )
}

export default Title;