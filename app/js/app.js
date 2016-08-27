import React from 'react'
import Typer from './typer.js'

class App extends React.Component {
  render() {
    const text = "Hello world!".split("")
    return (
      <Typer fullText={text} />
    )
  }
}

export default App;
