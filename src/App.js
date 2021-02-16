import "./context/ThemeContex"
import React from "react"
import './App.css';
import ThemeContext from "./context/ThemeContex";
import Header from "./components/header"
import Main from"./components/main"
function App() {
  const themeHook = React.useState("dark");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header /> 
        <Main />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
