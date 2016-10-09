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
    let modules = []
    if (this.state.text) {
      modules.push(<Typer
        key="typer"
        fullText={this.state.text.split("")}
        onNewClick={this.startNew}
      />)
    } else if (this.state.error) {
      modules.push(<div
        key="error-display"
        className="error-message">
          {this.state.error.message}
      </div>)
    } else {
      modules.push(<TextSelector
        key="textselector"
        onSelect={this.onTextSelected}
        options={this.state.options}
      />)
    }

    return (
      <div>
        {modules}
      </div>
    )
  }
}
