import React from 'react'
import request from '../utils/net.js'

class TextSelector extends React.Component {
  constructor() {
    super()

    this.onChange = this.onChange.bind(this)
    this.prepareText = this.prepareText.bind(this)
  }

  onChange(evt) {
    if (evt.target.value) {
      request(evt.target.value, (response) => {
        this.props.onSelect(this.prepareText(response))
      })
    }
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
      return <option key={o.value} value={o.value}>{o.name}</option>
    })
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="">Select text</option>
        {this.getOptions()}
      </select>
    )
  }
}

export default TextSelector;
