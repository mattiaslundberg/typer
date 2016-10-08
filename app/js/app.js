import React from 'react'
import Typer from './typer.js'
import TextSelector from './views/text-selector.js'
import {get} from './utils/net.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null,
      options: [],
    }

    this.onTextSelected = this.onTextSelected.bind(this)
    this.startNew = this.startNew.bind(this)

    get("/api/texts/").then(
      response => this.setState({options: JSON.parse(response)._items}),
      error => this.setState({error: JSON.parse(error)._error})
    )
  }

  startNew() {
    this.setState({
      text: "",
      error: null
    })
  }

  onTextSelected(text) {
    this.setState({text: text})
  }


  render() {
    if (this.state.text) {
      return <Typer
        fullText={this.state.text.split("")}
        onNewClick={this.startNew}
      />
    } else if (this.state.error) {
      return <div className="error-message">{this.state.error.message}</div>
    } else {
      return <TextSelector
        onSelect={this.onTextSelected}
        options={this.state.options}
      />

    }
  }
}
