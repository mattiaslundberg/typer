import React from 'react'
import Typer from './typer.js'
import TextSelector from './views/text-selector.js'
import request from './utils/net.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null,
      options: [],
    }

    this.onTextSelected = this.onTextSelected.bind(this)

    request("/api/texts/", (response) => {
      this.setState({options: JSON.parse(response)._items})
    })
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
      <TextSelector onSelect={this.onTextSelected} options={this.state.options} />
    )
  }
}

export default App;
