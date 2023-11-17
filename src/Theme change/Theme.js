import React, { useState } from "react";
import './Theme.css';
import { ThemeContext } from "./Context";
import Title from "./Title";
import Description from "./Description";

const Theme =() =>{
    const [theme, setTheme] = useState('light');

    const changeTheme =() => {
        setTheme((previousTheme) => (previousTheme === 'light' ? 'dark': 'light'))
    }

    return (
        <>
        <ThemeContext.Provider value={[theme, changeTheme]}>
            <div className={`app ${theme}`}>
                <Title/>
                <Description/>
            </div>
        </ThemeContext.Provider>
        </>
    )
}

export default Theme;