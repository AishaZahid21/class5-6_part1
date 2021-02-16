import React from "react"
import ReactDom from "react-dom"

let App = () => {
  const [theme, settheme] = React.useState("red")
  
  const OnClickHandler = () => {
    settheme(theme === "red" ? "blue" : "red");
  }
  return (
    <div>
      <Text theme={theme} />
      <button onClick={OnClickHandler}>Change theme</button>
    </div>
  )
}

let Text = ({theme}) => {
  return (
    <h1 style={{ color: `${theme}` }}>{theme}</h1>
  )
}

ReactDom.render(<App/>,document.querySelector('#root'))