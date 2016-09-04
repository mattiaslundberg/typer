import React from 'react'
import request from '../utils/net.js'

const options = [
  {value: "/static/texts/loremipsum.txt", name: "Lorem Ipsum"},
  {value: "/static/texts/hellopython.txt", name: "Hello Python"},
]

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
    let words = text.replace(/\s/, " ").replace(/\s+/g, " ").split(" ")
    let selected = this.getRandom(20, words)
    return selected.join(" ")
  }

  getRandom(num, choices) {
    let result = []
    for (var i = 0; i < num; ++i) {
      result.push(choices[Math.round(Math.random() * choices.length)])
    }
    return result
  }

  getOptions() {
    return options.map((o) => {
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
