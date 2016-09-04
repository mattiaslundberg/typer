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
  }

  onChange(evt) {
    if (evt.target.value) {
      request(evt.target.value, (response) => {
        this.props.onSelect(response)
      })
    }
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
