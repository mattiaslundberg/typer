import React from 'react'
import Typer from './typer.js'
import TextSelector from './components/text-selector.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null,
    }

    this.onTextSelected = this.onTextSelected.bind(this)
  }

  onTextSelected(text) {
    this.setState({text: text})
  }


  render() {
    if (this.state.text) {
      return (
        <Typer fullText={this.state.text.split("")} />
      )
    }

    return (
      <TextSelector onSelect={this.onTextSelected} />
    )
  }
}

export default App;
