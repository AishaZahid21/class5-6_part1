import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContex";
import AppTheme from "../color";


const Main = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,        
        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button> This is a button which do nothing</button>
        </main>
    );
}

export default Main;