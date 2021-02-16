import React from "react"
import ReactDom from "react-dom"

let App = () => {
  return (
    <div>
      <Text theme="yellow" />
    </div>
  )
}

let Text = ({theme}) => {
  return (
    <h1 style={{ color: `${theme}` }}>{theme}</h1>
  )
}

ReactDom.render(<App/>,document.querySelector('#root'))