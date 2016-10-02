import React from 'react'
import request from '../utils/net.js'

export default class TextSelector extends React.Component {
  constructor() {
    super()

    this.state = {
      isUploading: false
    }

    this.onChange = this.onChange.bind(this)
    this.prepareText = this.prepareText.bind(this)
    this.onAddClick = this.onAddClick.bind(this)
    this.onNewSubmit = this.onNewSubmit.bind(this)
    this.onNewCancel = this.onNewCancel.bind(this)
  }

  onChange(evt) {
    if (evt.target.value) {
      this.props.onSelect(this.prepareText(evt.target.value))
    }
  }

  onAddClick() {
    this.setState({isUploading: true})
  }

  onNewCancel() {
    this.setState({isUploading: false})
  }

  onNewSubmit() {
    const data = {
      name: this._name.value,
      fulltext: this._text.value,
    }
    request("/api/texts/", (response) => {
      this.setState({isUploading: false})
    }, "POST", JSON.stringify(data))
  }

  prepareText(text) {
    let i = 10
    while (i-- && text.match(/\s{2,}/g))
      text = text.replace(/[^\x20-\x7E]/g, " ").replace(/\s+/g, " ").trim()
    let selected = this.getRandom(20, text.split(" "))
    return selected.join(" ")
  }

  getRandom(num, choices) {
    let result = []
    for (var i = 0; i < num; ++i) {
      result.push(choices[Math.floor(Math.random() * choices.length)])
    }
    return result
  }

  getOptions() {
    return this.props.options.map((o) => {
      return <option key={o.name} value={o.fulltext}>{o.name}</option>
    })
  }

  render() {
    if (this.state.isUploading) {
      return (
        <div>
          <p>
            <label htmlFor="name">Name</label>
            <input ref={(i) => this._name = i} type="text" name="name"></input>
          </p>
          <p>
            <label htmlFor="text">Text</label>
            <input ref={(i) => this._text = i} type="text" name="text"></input>
          </p>
          <p>
            <button onClick={this.onNewSubmit}>Save</button>
            <button onClick={this.onNewCancel}>Cancel</button>
          </p>
        </div>
      )
    }

    return (
      <div>
        <p>
          <select onChange={this.onChange}>
            <option value="">Select text</option>
            {this.getOptions()}
          </select>
        </p>
        <p>
          <button onClick={this.onAddClick}>Add new</button>
        </p>
      </div>
    )
  }
}
